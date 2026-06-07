"use client";

import { useSyncExternalStore } from "react";
import { PRODUCTS, COLLECTIONS, BOOKING } from "@/lib/xo-data";
import type {
  AdminProduct,
  AdminCategory,
  AdminPhoto,
  Consultation,
  ConsultationStatus,
} from "@/types/admin";

/* XO47 admin store — DEMO PHASE persistence via localStorage.
   Designed with a clean seam to swap in Supabase later: every read/write
   funnels through the functions below, and public pages never touch this. */

const STORAGE_KEY = "xo47_admin_v1";

interface AdminState {
  products: AdminProduct[];
  categories: AdminCategory[];
  photos: AdminPhoto[];
  consultations: Consultation[];
}

/* ---- id generation ---- */
export function newId(prefix = "x"): string {
  const ts = Date.now().toString(36);
  const rnd = Math.random().toString(36).slice(2, 7);
  return `${prefix}${ts}${rnd}`;
}

/* ---- stable SSR singleton (stable references for getServerSnapshot) ---- */
const SERVER_STATE: AdminState = {
  products: [],
  categories: [],
  photos: [],
  consultations: [],
};

/* ---- cached client state (the SAME reference returned by getSnapshot
   until a mutation replaces it) ---- */
let cache: AdminState | null = null;

const listeners = new Set<() => void>();

function notify(): void {
  for (const l of listeners) l();
}

function read(): AdminState {
  if (typeof window === "undefined") return SERVER_STATE;
  if (cache) return cache;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as Partial<AdminState>;
      cache = {
        products: parsed.products ?? [],
        categories: parsed.categories ?? [],
        photos: parsed.photos ?? [],
        consultations: parsed.consultations ?? [],
      };
      return cache;
    }
  } catch {
    // ignore — corrupt or unavailable storage
  }
  cache = {
    products: [],
    categories: [],
    photos: [],
    consultations: [],
  };
  return cache;
}

/* Build a new state object (so the top-level reference changes), persist it,
   set the cached ref, then notify. Pass through unchanged slices by reference
   so their identity stays stable between renders. */
function write(next: AdminState): void {
  cache = next;
  if (typeof window !== "undefined") {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // ignore — storage unavailable / quota
    }
  }
  notify();
}

/* ---- seeding ---- */
function buildSeed(): AdminState {
  const products: AdminProduct[] = PRODUCTS.map((p) => ({
    id: newId("p"),
    slug: p.slug,
    name: p.name,
    cut: p.cut,
    price: p.price,
    cat: p.cat,
    fabric: p.fabric,
    cloth: p.cloth,
    img: p.img,
    gallery: [p.img],
    description: "",
    featured: false,
  }));

  const categories: AdminCategory[] = COLLECTIONS.map((c, i) => ({
    id: newId("c"),
    label: c.label,
    desc: c.desc,
    img: c.img,
    n: c.n,
    tone: c.tone,
    href: c.href,
    order: i,
  }));

  const photos: AdminPhoto[] = [];

  // 4 realistic mock consultations using the BOOKING vocabulary.
  const now = Date.now();
  const day = 86_400_000;
  const consultations: Consultation[] = [
    {
      id: newId("q"),
      ref: "XO-7KQ4M",
      service: BOOKING.services[0][0], // Bespoke Experience
      occasion: "Wedding",
      timeline: "1–2 months",
      notes: "Sherwani-alternative ivory tuxedo for the reception. Loves deep forest tones.",
      appt: BOOKING.appointments[0], // Studio — Ambawatta One
      date: "2026-07-15",
      time: BOOKING.times[2], // Evening · 4–8
      name: "Aditya Vir Singh",
      email: "aditya.vsingh@gmail.com",
      phone: "+91 98110 24578",
      city: "New Delhi",
      status: "new",
      createdAt: now - day * 1,
    },
    {
      id: newId("q"),
      ref: "XO-3WD8P",
      service: BOOKING.services[1][0], // Signature Formalwear
      occasion: "Business",
      timeline: "3+ months",
      notes: "Three-suit boardroom capsule — charcoal, navy, mid-grey. Travels often.",
      appt: BOOKING.appointments[2], // Virtual Consultation
      date: "2026-06-22",
      time: BOOKING.times[0], // Morning · 10–12
      name: "Rohan Mehta",
      email: "rohan.mehta@outlook.com",
      phone: "+91 99203 71164",
      city: "Mumbai",
      status: "contacted",
      createdAt: now - day * 3,
    },
    {
      id: newId("q"),
      ref: "XO-9BT2L",
      service: BOOKING.services[2][0], // Occasion Wear
      occasion: "Black Tie / Gala",
      timeline: "Within 3 weeks",
      notes: "Embellished dinner jacket for an awards evening. Confirmed first fitting.",
      appt: BOOKING.appointments[1], // Home Appointment (Delhi NCR)
      date: "2026-06-18",
      time: BOOKING.times[1], // Afternoon · 12–4
      name: "Kabir Anand",
      email: "kabir.anand@gmail.com",
      phone: "+91 98715 60932",
      city: "New Delhi",
      status: "booked",
      createdAt: now - day * 6,
    },
    {
      id: newId("q"),
      ref: "XO-AB12C",
      service: BOOKING.services[3][0], // Wardrobe Consultation
      occasion: "Everyday Wardrobe",
      timeline: "Just exploring",
      notes: "Wanted to refine a work wardrobe — decided to revisit next season.",
      appt: BOOKING.appointments[0], // Studio — Ambawatta One
      date: "2026-06-12",
      time: BOOKING.times[1], // Afternoon · 12–4
      name: "Vikram Nair",
      email: "vikram.nair@gmail.com",
      phone: "+91 98330 41257",
      city: "Mumbai",
      status: "archived",
      createdAt: now - day * 12,
    },
  ];

  return { products, categories, photos, consultations };
}

export function seedIfEmpty(): void {
  if (typeof window === "undefined") return;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as Partial<AdminState>;
      const empty =
        !parsed.products?.length &&
        !parsed.categories?.length &&
        !parsed.consultations?.length;
      if (!empty) return;
    }
  } catch {
    // fall through to seed
  }
  write(buildSeed());
}

/* ---- products ---- */
export function getProducts(): AdminProduct[] {
  return read().products;
}

export function upsertProduct(p: AdminProduct): void {
  const s = read();
  const i = s.products.findIndex((x) => x.id === p.id);
  const products = i >= 0 ? s.products.map((x) => (x.id === p.id ? p : x)) : [...s.products, p];
  write({ ...s, products });
}

export function deleteProduct(id: string): void {
  const s = read();
  write({ ...s, products: s.products.filter((x) => x.id !== id) });
}

/* ---- categories ---- */
export function getCategories(): AdminCategory[] {
  return [...read().categories].sort((a, b) => a.order - b.order);
}

export function upsertCategory(c: AdminCategory): void {
  const s = read();
  const i = s.categories.findIndex((x) => x.id === c.id);
  const categories = i >= 0 ? s.categories.map((x) => (x.id === c.id ? c : x)) : [...s.categories, c];
  write({ ...s, categories });
}

export function deleteCategory(id: string): void {
  const s = read();
  write({ ...s, categories: s.categories.filter((x) => x.id !== id) });
}

/* ---- photos ---- */
export function getPhotos(): AdminPhoto[] {
  return [...read().photos].sort((a, b) => b.createdAt - a.createdAt);
}

export function addPhoto(name: string, dataUrl: string): AdminPhoto {
  const s = read();
  const photo: AdminPhoto = { id: newId("ph"), name, dataUrl, createdAt: Date.now() };
  write({ ...s, photos: [...s.photos, photo] });
  return photo;
}

export function deletePhoto(id: string): void {
  const s = read();
  write({ ...s, photos: s.photos.filter((x) => x.id !== id) });
}

/* ---- consultations ---- */
export function getConsultations(): Consultation[] {
  return [...read().consultations].sort((a, b) => b.createdAt - a.createdAt);
}

export function addConsultation(
  input: Omit<Consultation, "id" | "createdAt" | "status"> & { status?: ConsultationStatus },
): Consultation {
  const s = read();
  const entry: Consultation = {
    ...input,
    id: newId("q"),
    status: input.status ?? "new",
    createdAt: Date.now(),
  };
  write({ ...s, consultations: [...s.consultations, entry] });
  return entry;
}

export function setConsultationStatus(id: string, status: ConsultationStatus): void {
  const s = read();
  write({
    ...s,
    consultations: s.consultations.map((c) => (c.id === id ? { ...c, status } : c)),
  });
}

export function deleteConsultation(id: string): void {
  const s = read();
  write({ ...s, consultations: s.consultations.filter((x) => x.id !== id) });
}

/* ---- subscription / snapshots ---- */
export function subscribe(listener: () => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function getSnapshot(): AdminState {
  return read();
}

function getServerSnapshot(): AdminState {
  return SERVER_STATE;
}

/* ---- hooks ----
   Each hook subscribes to the whole state but selects a slice. Slices keep
   stable identity on the cached state object between renders unless a mutation
   replaced that slice, so re-renders only fire on real changes. getProducts /
   getCategories etc. that sort return fresh arrays, so hooks read the slice
   directly off the snapshot to preserve reference stability where possible. */

export function useProducts(): AdminProduct[] {
  const s = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return s.products;
}

export function useCategories(): AdminCategory[] {
  const s = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return [...s.categories].sort((a, b) => a.order - b.order);
}

export function usePhotos(): AdminPhoto[] {
  const s = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return [...s.photos].sort((a, b) => b.createdAt - a.createdAt);
}

export function useConsultations(): Consultation[] {
  const s = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return [...s.consultations].sort((a, b) => b.createdAt - a.createdAt);
}

export interface AdminStats {
  products: number;
  categories: number;
  photos: number;
  consultations: number;
  newConsultations: number;
  recent: Consultation[];
}

export function useAdminStats(): AdminStats {
  const s = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const sorted = [...s.consultations].sort((a, b) => b.createdAt - a.createdAt);
  return {
    products: s.products.length,
    categories: s.categories.length,
    photos: s.photos.length,
    consultations: s.consultations.length,
    newConsultations: s.consultations.filter((c) => c.status === "new").length,
    recent: sorted.slice(0, 5),
  };
}
