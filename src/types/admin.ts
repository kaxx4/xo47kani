export interface AdminProduct {
  id: string;
  slug: string;
  name: string;
  cut: string;
  price: number;
  cat: string;
  fabric: string;
  cloth: string;
  img: string;
  gallery: string[];
  description: string;
  featured: boolean;
}

export interface AdminCategory {
  id: string;
  label: string;
  desc: string;
  img: string;
  n: string;
  tone: "ink" | "ivory" | "neutral";
  href: string;
  order: number;
}

export interface AdminPhoto {
  id: string;
  name: string;
  dataUrl: string;
  createdAt: number;
}

export type ConsultationStatus = "new" | "contacted" | "booked" | "archived";

export interface Consultation {
  id: string;
  ref: string;
  service: string;
  occasion: string;
  timeline: string;
  notes: string;
  appt: string;
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string;
  city: string;
  status: ConsultationStatus;
  createdAt: number;
}
