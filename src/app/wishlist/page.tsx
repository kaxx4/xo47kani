"use client";

import { Bookmark } from "lucide-react";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export default function WishlistPage() {
  return (
    <>
      <SiteHeader />
      <main style={{ paddingTop: 56 }}>
        {/* Page header */}
        <div
          style={{
            borderBottom: "1px solid #E0DCD5",
            padding: "24px 20px",
          }}
        >
          <h1
            style={{
              fontSize: 28,
              fontWeight: 200,
              color: "#1C1B18",
              margin: 0,
              letterSpacing: "-0.02em",
            }}
          >
            Wishlist
          </h1>
        </div>

        {/* Empty state */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "80px 20px",
            gap: 12,
          }}
        >
          <Bookmark size={32} color="#9A9590" />
          <p
            style={{
              fontSize: 16,
              fontWeight: 300,
              color: "#9A9590",
              margin: 0,
            }}
          >
            Your wishlist is empty
          </p>
          <p
            style={{
              fontSize: 13,
              fontWeight: 300,
              color: "#9A9590",
              margin: 0,
            }}
          >
            Save your favourite items to buy later
          </p>
          <div style={{ marginTop: 20 }}>
            <Link
              href="/"
              className="xo-btn-primary"
            >
              Start Shopping
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
