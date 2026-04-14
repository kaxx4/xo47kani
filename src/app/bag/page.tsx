"use client";

import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export default function BagPage() {
  return (
    <>
      <style>{`
        .bag-outer {
          padding: 32px 20px 60px;
        }
        @media (min-width: 768px) {
          .bag-outer {
            padding: 48px 48px 80px;
          }
        }
        .bag-layout {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }
        @media (min-width: 768px) {
          .bag-layout {
            flex-direction: row;
            align-items: flex-start;
          }
        }
        .bag-items {
          flex: 1;
        }
        .bag-summary {
          width: 100%;
        }
        @media (min-width: 768px) {
          .bag-summary {
            width: 320px;
            flex-shrink: 0;
            position: sticky;
            top: 76px;
          }
        }
      `}</style>
      <SiteHeader />
      <main style={{ paddingTop: 56 }}>
        <div className="bag-outer">
          <div className="bag-layout">
            {/* Left: bag items */}
            <div className="bag-items">
              <h1
                style={{
                  fontSize: 28,
                  fontWeight: 200,
                  color: "#1C1B18",
                  margin: "0 0 40px",
                  letterSpacing: "-0.02em",
                }}
              >
                Your Bag
              </h1>

              {/* Empty state */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "80px 0",
                  gap: 12,
                }}
              >
                <ShoppingBag size={32} color="#9A9590" />
                <p
                  style={{
                    fontSize: 16,
                    fontWeight: 300,
                    color: "#9A9590",
                    margin: 0,
                  }}
                >
                  Your bag is empty
                </p>
                <div style={{ marginTop: 16 }}>
                  <Link href="/" className="xo-btn-primary">
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>

            {/* Right: order summary */}
            <div
              className="bag-summary"
              style={{
                border: "1px solid #E0DCD5",
                padding: 24,
              }}
            >
              <h2
                style={{
                  fontSize: 12,
                  fontWeight: 500,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#1C1B18",
                  margin: "0 0 24px",
                }}
              >
                Order Summary
              </h2>

              {/* Subtotal row */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 12,
                }}
              >
                <span style={{ fontSize: 14, fontWeight: 300, color: "#4A4845" }}>
                  Subtotal
                </span>
                <span style={{ fontSize: 14, fontWeight: 300, color: "#4A4845" }}>
                  ₹0
                </span>
              </div>

              {/* Shipping row */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 20,
                }}
              >
                <span style={{ fontSize: 14, fontWeight: 300, color: "#4A4845" }}>
                  Shipping
                </span>
                <span style={{ fontSize: 14, fontWeight: 300, color: "#9A9590" }}>
                  Calculated at checkout
                </span>
              </div>

              {/* Divider */}
              <div style={{ height: 1, backgroundColor: "#E0DCD5", marginBottom: 20 }} />

              {/* Total row */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 24,
                }}
              >
                <span style={{ fontSize: 15, fontWeight: 300, color: "#1C1B18" }}>
                  Total
                </span>
                <span style={{ fontSize: 15, fontWeight: 300, color: "#1C1B18" }}>
                  ₹0
                </span>
              </div>

              {/* Disabled checkout button */}
              <button
                disabled
                style={{
                  width: "100%",
                  height: 48,
                  backgroundColor: "#9A9590",
                  color: "#FAF8F4",
                  fontSize: 11,
                  fontWeight: 500,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  border: "none",
                  cursor: "not-allowed",
                  fontFamily: "inherit",
                }}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
