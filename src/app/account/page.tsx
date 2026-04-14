"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: 10,
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  color: "#9A9590",
  marginBottom: 8,
  fontWeight: 400,
};

export default function AccountPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <>
      <style>{`
        .account-wrapper {
          max-width: 400px;
          margin: 0 auto;
          padding: 48px 20px;
          box-sizing: border-box;
        }
        @media (min-width: 480px) {
          .account-wrapper {
            padding: 48px 0;
          }
        }
        .xo-input {
          display: block;
          width: 100%;
          height: 48px;
          border: 1px solid #E0DCD5;
          padding: 0 16px;
          font-size: 14px;
          font-weight: 300;
          background-color: #FDFCFA;
          color: #1C1B18;
          box-sizing: border-box;
          outline: none;
          font-family: inherit;
          border-radius: 0;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .xo-input:focus {
          outline: none;
          border-color: #8C6A4A !important;
          box-shadow: 0 0 0 2px rgba(140,106,74,0.12);
        }
        .account-field {
          margin-bottom: 16px;
        }
      `}</style>
      <SiteHeader />
      <main style={{ paddingTop: 56 }}>
        <div className="account-wrapper">
          <h1
            style={{
              fontSize: "clamp(24px, 3vw, 36px)",
              fontWeight: 200,
              letterSpacing: "-0.01em",
              color: "#1C1B18",
              margin: "0 0 36px",
              textAlign: "center",
            }}
          >
            Sign In
          </h1>

          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
            <div className="account-field">
              <label htmlFor="email" style={labelStyle}>Email Address</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="xo-input"
              />
            </div>
            <div className="account-field">
              <label htmlFor="password" style={labelStyle}>Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="xo-input"
              />
            </div>

            <button
              type="submit"
              className="xo-btn-primary"
              style={{
                width: "100%",
                marginTop: 8,
                backgroundColor: "#1C1B18",
                color: "#FAF8F4",
                fontSize: 10,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              Sign In
            </button>
          </form>

          <p style={{ textAlign: "center", margin: "16px 0 0" }}>
            <Link
              href="/faq"
              className="xo-link"
              style={{
                fontSize: 12,
                color: "#9A9590",
                textDecoration: "none",
                letterSpacing: "0.05em",
              }}
            >
              Forgot password?
            </Link>
          </p>

          {/* Divider */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              margin: "24px 0",
            }}
          >
            <div style={{ flex: 1, height: 1, backgroundColor: "#E0DCD5" }} />
            <span
              style={{
                fontSize: 11,
                color: "#C0BBB5",
                letterSpacing: "0.15em",
                fontWeight: 300,
              }}
            >
              OR
            </span>
            <div style={{ flex: 1, height: 1, backgroundColor: "#E0DCD5" }} />
          </div>

          <Link
            href="/account"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: 48,
              backgroundColor: "#FDFCFA",
              border: "1px solid #E0DCD5",
              color: "#1C1B18",
              fontSize: 10,
              letterSpacing: "0.2em",
              fontWeight: 400,
              textDecoration: "none",
              textTransform: "uppercase",
              boxSizing: "border-box",
            }}
          >
            Create Account
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
