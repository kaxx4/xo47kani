"use client";

// DEMO ONLY — client-side PIN. Real security arrives with Supabase service-role
// gating + RLS in the backend pass.

export const ADMIN_PIN = process.env.NEXT_PUBLIC_ADMIN_PIN || "4747";

const KEY = "xo47_admin_unlocked";

export function isUnlocked(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return sessionStorage.getItem(KEY) === "1";
  } catch {
    return false;
  }
}

export function unlock(pin: string): boolean {
  if (pin.trim() !== ADMIN_PIN) return false;
  try {
    sessionStorage.setItem(KEY, "1");
  } catch {
    // ignore — storage unavailable
  }
  return true;
}

export function lock(): void {
  try {
    sessionStorage.removeItem(KEY);
  } catch {
    // ignore — storage unavailable
  }
}
