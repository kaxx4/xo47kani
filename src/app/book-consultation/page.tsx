import { Suspense } from "react";
import type { Metadata } from "next";
import { Booking } from "@/components/xo/booking/Booking";

export const metadata: Metadata = {
  title: "Book a Consultation | XO47",
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Booking />
    </Suspense>
  );
}
