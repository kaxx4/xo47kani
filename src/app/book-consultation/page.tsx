"use client";

import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  occasion: string;
  referral: string;
  notes: string;
};

const initialForm: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  occasion: "",
  referral: "",
  notes: "",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: 10,
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  color: "#9A9590",
  marginBottom: 8,
  fontWeight: 400,
};

export default function BookConsultationPage() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <style>{`
        .bc-hero {
          background-color: #1C1B18;
          padding: 80px 20px;
          padding-top: calc(80px + 56px);
        }
        @media (min-width: 640px) {
          .bc-hero {
            padding: 88px 32px 80px;
            padding-top: calc(88px + 56px);
          }
        }
        @media (min-width: 1024px) {
          .bc-hero {
            padding: 96px 48px 80px;
            padding-top: calc(96px + 56px);
          }
        }
        .bc-form-section {
          background-color: #FAF8F4;
          padding: 48px 20px;
        }
        @media (min-width: 640px) {
          .bc-form-section {
            padding: 64px 32px;
          }
        }
        @media (min-width: 1024px) {
          .bc-form-section {
            padding: 80px 48px;
          }
        }
        .bc-name-row {
          display: flex;
          flex-direction: column;
          gap: 0;
          margin-bottom: 0;
        }
        @media (min-width: 480px) {
          .bc-name-row {
            flex-direction: row;
            gap: 16px;
          }
        }
        .bc-field {
          flex: 1;
          margin-bottom: 20px;
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
          outline: none;
          box-sizing: border-box;
          font-family: inherit;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
          border-radius: 0;
        }
        .xo-input:focus {
          outline: none;
          border-color: #8C6A4A !important;
          box-shadow: 0 0 0 2px rgba(140,106,74,0.12);
        }
        .xo-textarea {
          height: 120px;
          padding: 12px 16px;
          resize: vertical;
          line-height: 24px;
        }
        .bc-thanks {
          animation: fade-in-up 0.4s ease;
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      <SiteHeader />
      <main style={{ paddingTop: 56 }}>

        {/* Header Section */}
        <section className="bc-hero">
          <p
            style={{
              fontSize: 11,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.3)",
              marginBottom: 24,
              marginTop: 0,
              fontWeight: 400,
            }}
          >
            Bespoke Tailoring
          </p>
          <h1
            style={{
              fontWeight: 200,
              fontSize: "clamp(36px, 5vw, 64px)",
              letterSpacing: "-0.025em",
              color: "#FAF8F4",
              lineHeight: 1.1,
              margin: "0 0 24px",
            }}
          >
            Book a Consultation
          </h1>
          <p
            style={{
              fontSize: 15,
              fontWeight: 300,
              color: "rgba(255,255,255,0.42)",
              maxWidth: 480,
              lineHeight: 1.85,
              margin: 0,
            }}
          >
            Begin your XO47 journey. Tell us about yourself and what you have in mind — we will be in touch within 24 hours.
          </p>
        </section>

        {/* Form Section */}
        <section className="bc-form-section">
          <div style={{ maxWidth: 680, margin: "0 auto" }}>

            {submitted ? (
              <div
                className="bc-thanks"
                style={{
                  textAlign: "center",
                  padding: "80px 0",
                }}
              >
                <p
                  style={{
                    fontSize: 11,
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    color: "#9A9590",
                    marginBottom: 24,
                    marginTop: 0,
                    fontWeight: 400,
                  }}
                >
                  Enquiry Received
                </p>
                <h2
                  style={{
                    fontSize: "clamp(24px,3vw,40px)",
                    fontWeight: 300,
                    color: "#1C1B18",
                    letterSpacing: "-0.01em",
                    marginTop: 0,
                    marginBottom: 16,
                  }}
                >
                  Thank you. We will be in touch shortly.
                </h2>
                <p
                  style={{
                    fontSize: 14,
                    fontWeight: 300,
                    color: "#9A9590",
                    lineHeight: "26px",
                    margin: 0,
                  }}
                >
                  We aim to respond within 24 hours. For urgent enquiries, reach us on Instagram{" "}
                  <a
                    href="https://instagram.com/studio.xo47"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#1C1B18", textDecoration: "underline" }}
                  >
                    @studio.xo47
                  </a>
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>

                {/* First Name + Last Name row */}
                <div className="bc-name-row">
                  <div className="bc-field">
                    <label htmlFor="firstName" style={labelStyle}>First Name</label>
                    <input
                      id="firstName"
                      type="text"
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      required
                      className="xo-input"
                    />
                  </div>
                  <div className="bc-field">
                    <label htmlFor="lastName" style={labelStyle}>Last Name</label>
                    <input
                      id="lastName"
                      type="text"
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      required
                      className="xo-input"
                    />
                  </div>
                </div>

                <div style={{ marginBottom: 20 }}>
                  <label htmlFor="email" style={labelStyle}>Email Address</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="xo-input"
                  />
                </div>

                <div style={{ marginBottom: 20 }}>
                  <label htmlFor="phone" style={labelStyle}>Phone Number</label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="xo-input"
                  />
                </div>

                <div style={{ marginBottom: 20 }}>
                  <label htmlFor="occasion" style={labelStyle}>Purpose</label>
                  <select
                    id="occasion"
                    name="occasion"
                    value={form.occasion}
                    onChange={handleChange}
                    required
                    className="xo-input"
                    style={{
                      appearance: "none",
                      cursor: "pointer",
                      color: form.occasion ? "#1C1B18" : "#9A9590",
                    }}
                  >
                    <option value="" disabled>
                      Select purpose
                    </option>
                    <option value="signature-suit">Signature Suit</option>
                    <option value="blazer">Blazer</option>
                    <option value="tuxedo">Tuxedo</option>
                    <option value="wedding-occasion">Wedding / Occasion Wear</option>
                    <option value="wardrobe-consultation">Wardrobe Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div style={{ marginBottom: 20 }}>
                  <label htmlFor="referral" style={labelStyle}>How Did You Hear About Us</label>
                  <select
                    id="referral"
                    name="referral"
                    value={form.referral}
                    onChange={handleChange}
                    className="xo-input"
                    style={{
                      appearance: "none",
                      cursor: "pointer",
                      color: form.referral ? "#1C1B18" : "#9A9590",
                    }}
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    <option value="instagram">Instagram</option>
                    <option value="friend-referral">Friend / Referral</option>
                    <option value="celebrity-press">Celebrity / Press</option>
                    <option value="popup-exhibition">Pop-up / Exhibition</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div style={{ marginBottom: 20 }}>
                  <label htmlFor="notes" style={labelStyle}>Additional Notes</label>
                  <textarea
                    id="notes"
                    name="notes"
                    value={form.notes}
                    onChange={handleChange}
                    className="xo-input xo-textarea"
                  />
                </div>

                <button
                  type="submit"
                  className="xo-btn-primary"
                  style={{
                    display: "block",
                    width: "100%",
                    marginBottom: 16,
                    fontSize: 10,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    backgroundColor: "#1C1B18",
                    color: "#FAF8F4",
                  }}
                >
                  Send Enquiry
                </button>

                <p
                  style={{
                    fontSize: 13,
                    fontWeight: 300,
                    color: "#9A9590",
                    lineHeight: "22px",
                    margin: 0,
                    textAlign: "center",
                  }}
                >
                  We will respond within 24 hours. For urgent enquiries, reach us on Instagram @studio.xo47
                </p>

              </form>
            )}
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
