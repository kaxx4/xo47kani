"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { Reveal } from "@/components/xo/Reveal";

export default function AccountPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    setSent(true);
  }

  return (
    <div
      className="fade-page"
      style={{ background: "var(--milk)", color: "var(--ink)", minHeight: "100vh" }}
    >
      <div
        className="wrap"
        style={{ paddingTop: "var(--pad-top)", paddingBottom: "var(--sec)", width: "100%" }}
      >
        {/* Editorial header */}
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: "clamp(54px,7vw,90px)" }}>
            <div className="over" style={{ color: "var(--clay)", marginBottom: 30 }}>
              Client Account
            </div>
            <h1
              className="display"
              style={{
                fontSize: "clamp(2.8rem,7vw,6rem)",
                lineHeight: 0.96,
                marginBottom: 26,
              }}
            >
              Your <span className="italic serif-accent">account.</span>
            </h1>
            <p className="lede" style={{ maxWidth: "48ch", margin: "0 auto" }}>
              A quiet place to follow your commissions. Sign in to pick up a
              conversation already underway — or let us look after you personally,
              from the first fitting onward.
            </p>
          </div>
        </Reveal>

        {/* Two panels */}
        <div className="acc-grid">
          {/* ── Sign-in card ── */}
          <Reveal delay={1}>
            <div
              style={{
                border: "1px solid var(--line)",
                padding: "clamp(28px,3.4vw,46px)",
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div className="over" style={{ color: "var(--muted)", marginBottom: 18 }}>
                Sign In
              </div>
              <h2
                className="display d-2"
                style={{ marginBottom: 14, fontSize: "clamp(1.9rem,3vw,2.6rem)" }}
              >
                Welcome <span className="italic serif-accent">back.</span>
              </h2>

              {sent ? (
                <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                  <p className="lede" style={{ marginBottom: 26 }}>
                    If <strong style={{ fontWeight: 400 }}>{email}</strong> is known to
                    the atelier, a secure link to continue is on its way. Do check your
                    inbox in a moment.
                  </p>
                  <button
                    type="button"
                    className="ulink"
                    onClick={() => setSent(false)}
                    style={{ color: "var(--muted)", alignSelf: "flex-start" }}
                  >
                    ← Use another email
                  </button>
                </div>
              ) : (
                <>
                  <p className="lede" style={{ marginBottom: 28 }}>
                    Enter your email and we&apos;ll send a secure link — no password to
                    remember, in keeping with how we like to work.
                  </p>
                  <form
                    onSubmit={handleSubmit}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 18,
                      marginTop: "auto",
                    }}
                  >
                    <label style={{ display: "block" }}>
                      <span
                        className="over"
                        style={{ display: "block", marginBottom: 10, color: "var(--muted)" }}
                      >
                        Email
                      </span>
                      <input
                        type="email"
                        value={email}
                        placeholder="you@email.com"
                        onChange={(e) => setEmail(e.target.value)}
                        style={{
                          width: "100%",
                          height: 56,
                          padding: "0 18px",
                          background: "transparent",
                          border: "1px solid var(--line)",
                          color: "var(--ink)",
                          fontFamily: "var(--ff-sans)",
                          fontSize: "1rem",
                          fontWeight: 300,
                          outline: "none",
                          transition: "border-color .3s var(--ease)",
                        }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = "var(--ink)")}
                        onBlur={(e) => (e.currentTarget.style.borderColor = "var(--line)")}
                      />
                    </label>
                    <button type="submit" className="btn" style={{ width: "100%" }}>
                      Continue
                    </button>
                  </form>
                </>
              )}
            </div>
          </Reveal>

          {/* ── Your commissions panel ── */}
          <Reveal delay={2}>
            <div
              style={{
                background: "var(--ink)",
                color: "var(--on-dark)",
                padding: "clamp(28px,3.4vw,46px)",
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                className="over"
                style={{ color: "var(--on-dark-mut)", marginBottom: 18 }}
              >
                Your Commissions
              </div>
              <h2
                className="display d-2"
                style={{ marginBottom: 18, fontSize: "clamp(1.9rem,3vw,2.6rem)" }}
              >
                Looked after,
                <br />
                <span className="italic" style={{ color: "var(--amber-2)" }}>
                  personally.
                </span>
              </h2>
              <p
                className="lede"
                style={{ color: "var(--on-dark-mut)", marginBottom: 18 }}
              >
                At XO47 there are no order numbers to chase. Each client is held by the
                atelier itself — your measurements, your cloths and the rhythm of every
                fitting kept by the people who cut for you.
              </p>
              <p
                className="lede"
                style={{ color: "var(--on-dark-mut)", marginBottom: 36 }}
              >
                Not yet a client? Begin with a conversation at the studio in Ambawatta
                One, Mehrauli. That first meeting opens your account with us.
              </p>
              <div style={{ marginTop: "auto" }}>
                <Link className="btn btn-on-dark" href="/book-consultation" style={{ width: "100%" }}>
                  Book a Consultation
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`
        .acc-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
          max-width: 980px;
          margin: 0 auto;
        }
        @media (min-width: 860px) {
          .acc-grid { grid-template-columns: 1fr 1fr; gap: 24px; }
        }
      `}</style>
    </div>
  );
}
