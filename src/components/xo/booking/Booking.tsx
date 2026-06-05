"use client";

import Link from "next/link";
import { useEffect, useState, type CSSProperties } from "react";
import { useSearchParams } from "next/navigation";
import { Reveal } from "@/components/xo/Reveal";
import { BOOKING } from "@/lib/xo-data";

/* XO47 — Book a Consultation · multi-step enquiry flow.
   Faithful port of booking.jsx. */

type FormKey =
  | "service"
  | "occasion"
  | "timeline"
  | "notes"
  | "appt"
  | "date"
  | "time"
  | "name"
  | "email"
  | "phone"
  | "city";

type Form = Record<FormKey, string>;
type Errors = Partial<Record<FormKey, string>>;

type SetField = (k: FormKey, v: string) => void;

/* Map each field to the right mobile keyboard + browser autofill hint. */
const INPUT_MODE: Partial<Record<FormKey, "email" | "tel">> = {
  email: "email",
  phone: "tel",
};
const AUTOCOMPLETE: Partial<Record<FormKey, string>> = {
  name: "name",
  email: "email",
  phone: "tel",
  city: "address-level2",
};

/* Hoisted to module scope so input nodes are STABLE across renders
   (declaring these inside Booking remounts inputs every keystroke → focus loss). */
function BkField({
  label,
  k,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  min,
}: {
  label: string;
  k: FormKey;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: SetField;
  error?: string;
  min?: string;
}) {
  return (
    <label style={{ display: "block" }}>
      <span className="over" style={{ display: "block", marginBottom: 10, color: error ? "var(--clay)" : "var(--muted)" }}>
        {label}
        {error && (
          <span style={{ textTransform: "none", letterSpacing: 0, fontStyle: "italic", marginLeft: 10, fontFamily: "var(--ff-display)", fontSize: "0.92rem" }}>
            — {error}
          </span>
        )}
      </span>
      <input
        type={type}
        inputMode={INPUT_MODE[k]}
        autoComplete={AUTOCOMPLETE[k]}
        min={min}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(k, e.target.value)}
        style={{
          width: "100%",
          height: 56,
          padding: "0 18px",
          background: "transparent",
          border: `1px solid ${error ? "var(--clay)" : "var(--line)"}`,
          color: "var(--ink)",
          fontFamily: "var(--ff-sans)",
          fontSize: "1rem",
          fontWeight: 300,
          outline: "none",
          transition: "border-color .3s var(--ease)",
        }}
        onFocus={(e) => (e.currentTarget.style.borderColor = "var(--ink)")}
        onBlur={(e) => (e.currentTarget.style.borderColor = error ? "var(--clay)" : "var(--line)")}
      />
    </label>
  );
}

function BkChoice({
  active,
  onClick,
  title,
  sub,
}: {
  active: boolean;
  onClick: () => void;
  title: string;
  sub?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="bk-choice press"
      data-on={active ? "1" : "0"}
      aria-pressed={active}
      style={{
        textAlign: "left",
        display: "block",
        width: "100%",
        padding: "20px 22px",
        border: `1px solid ${active ? "var(--ink)" : "var(--line)"}`,
        background: active ? "var(--ink)" : "transparent",
        color: active ? "var(--milk)" : "var(--ink)",
        transition: "border-color .3s var(--ease), background .3s var(--ease), color .3s var(--ease), transform .16s var(--ease)",
      }}
    >
      <span className="display d-3" style={{ display: "block", fontSize: "1.3rem", marginBottom: sub ? 6 : 0 }}>
        {title}
      </span>
      {sub && <span style={{ fontSize: "0.88rem", opacity: 0.7, fontWeight: 300 }}>{sub}</span>}
    </button>
  );
}

function BkPills({
  options,
  k,
  value,
  onChange,
}: {
  options: string[];
  k: FormKey;
  value: string;
  onChange: SetField;
}) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
      {options.map((o) => (
        <button
          key={o}
          type="button"
          onClick={() => onChange(k, o)}
          aria-pressed={value === o}
          className="press"
          style={{
            padding: "12px 20px",
            border: `1px solid ${value === o ? "var(--ink)" : "var(--line)"}`,
            background: value === o ? "var(--ink)" : "transparent",
            color: value === o ? "var(--milk)" : "var(--ink)",
            fontFamily: "var(--ff-sans)",
            fontSize: "0.8rem",
            letterSpacing: "0.08em",
            transition: "border-color .3s var(--ease), background .3s var(--ease), color .3s var(--ease), transform .16s var(--ease)",
          }}
        >
          {o}
        </button>
      ))}
    </div>
  );
}

const errLine: CSSProperties = { textTransform: "none", letterSpacing: 0, fontStyle: "italic", fontFamily: "var(--ff-display)" };

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
/* Format a native date-input value (YYYY-MM-DD) into an elegant "15 July 2026". */
function prettyDate(iso: string): string {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);
  if (!m) return iso;
  return `${Number(m[3])} ${MONTHS[Number(m[2]) - 1]} ${m[1]}`;
}

export function Booking() {
  const B = BOOKING;
  const prefill = useSearchParams().get("piece");

  const steps = ["Service", "Details", "Appointment", "You"];
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [ref, setRef] = useState("");
  const [err, setErr] = useState<Errors>({});
  const [f, setF] = useState<Form>({
    service: prefill ? "Bespoke Experience" : "",
    occasion: "",
    timeline: "",
    notes: prefill ? `Regarding: ${prefill}.\n` : "",
    appt: "",
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
    city: "",
  });
  const set: SetField = (k, v) => setF((s) => ({ ...s, [k]: v }));

  // today (computed client-side to avoid SSR/hydration drift) — gates past dates
  const [today, setToday] = useState("");
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- client-only date, set once on mount to avoid SSR/hydration drift
    setToday(new Date().toISOString().slice(0, 10));
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [step, done]);

  const valid = (s: number): boolean => {
    const e: Errors = {};
    if (s === 0 && !f.service) e.service = "Please choose a service.";
    if (s === 1) {
      if (!f.occasion) e.occasion = "Select an occasion.";
      if (!f.timeline) e.timeline = "Select a timeline.";
    }
    if (s === 2) {
      if (!f.appt) e.appt = "Choose how you'd like to meet.";
      if (!f.date) e.date = "Pick a date.";
      else if (today && f.date < today) e.date = "Please choose an upcoming date.";
      if (!f.time) e.time = "Pick a time.";
    }
    if (s === 3) {
      if (!f.name.trim()) e.name = "Your name, please.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = "A valid email, please.";
      if (f.phone.replace(/\D/g, "").length < 8) e.phone = "A reachable number, please.";
      if (!f.city.trim()) e.city = "Which city?";
    }
    setErr(e);
    return Object.keys(e).length === 0;
  };

  const submit = () => {
    setRef("XO-" + Math.random().toString(36).slice(2, 7).toUpperCase());
    setDone(true);
  };
  const next = () => {
    if (valid(step)) {
      if (step < 3) setStep(step + 1);
      else submit();
    }
  };
  const back = () => {
    if (step > 0) setStep(step - 1);
    setErr({});
  };

  // ---- confirmation ----
  if (done) {
    return (
      <div className="fade-page" style={{ background: "var(--milk)", color: "var(--ink)", minHeight: "100vh", display: "flex", alignItems: "center" }}>
        <div className="wrap" style={{ paddingTop: "var(--pad-top)", paddingBottom: 64, textAlign: "center", width: "100%" }}>
          <Reveal>
            <div className="over" style={{ color: "var(--clay)", marginBottom: 30 }}>Enquiry Received</div>
            <h1 className="display" style={{ fontSize: "clamp(2.8rem,7vw,6rem)", lineHeight: 0.96, marginBottom: 26 }}>
              Thank you, <span className="italic serif-accent">{f.name.split(" ")[0] || "friend"}.</span>
            </h1>
            <p className="lede" style={{ maxWidth: "46ch", margin: "0 auto 36px" }}>
              Your request for a <strong style={{ fontWeight: 400 }}>{f.service}</strong> is with our studio. We&apos;ll be in touch within one business day to confirm your{" "}
              {f.appt.toLowerCase().includes("home") ? "home appointment" : f.appt.toLowerCase().includes("virtual") ? "virtual consultation" : "visit"} on{" "}
              <strong style={{ fontWeight: 400 }}>{prettyDate(f.date)}</strong>, {f.time.toLowerCase()}.
            </p>
            <div style={{ display: "inline-flex", flexDirection: "column", gap: 6, border: "1px solid var(--line)", padding: "20px 40px", marginBottom: 44 }}>
              <span className="mono" style={{ color: "var(--muted)" }}>Your reference</span>
              <span className="display d-2 tnum">{ref}</span>
            </div>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <Link className="btn" href="/">Back to Home</Link>
              <Link className="btn btn-ghost" href="/collections">Explore Collections</Link>
            </div>
          </Reveal>
        </div>
      </div>
    );
  }

  return (
    <div className="fade-page" style={{ background: "var(--milk)", color: "var(--ink)", minHeight: "100vh" }}>
      <div className="wrap-wide bk-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 0, minHeight: "100vh" }}>
        {/* LEFT — context rail */}
        <aside className="bk-rail" style={{ background: "var(--ink)", color: "var(--on-dark)", padding: "var(--pad-top) 48px 56px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            <div className="over" style={{ color: "var(--on-dark-mut)", marginBottom: 30 }}>Book a Consultation</div>
            <h2 className="display" style={{ fontSize: "clamp(2.4rem,3.4vw,3.6rem)", lineHeight: 1.0, marginBottom: 22 }}>
              Tell us the occasion —<br />
              <span className="italic" style={{ color: "var(--amber-2)" }}>we&apos;ll tell you the cloth.</span>
            </h2>
            <p className="lede" style={{ color: "var(--on-dark-mut)", fontSize: "0.95rem", maxWidth: "38ch" }}>
              Every commission begins with a conversation at the studio in Ambawatta One, Mehrauli. Four short steps.
            </p>
            {prefill && <div className="mono" style={{ color: "var(--amber-2)", marginTop: 26 }}>Regarding · {prefill}</div>}
          </div>
          <ol style={{ listStyle: "none", margin: "40px 0 0", padding: 0, display: "grid", gap: 14 }}>
            {steps.map((s, i) => (
              <li key={i} style={{ display: "flex", alignItems: "center", gap: 16, opacity: i === step ? 1 : i < step ? 0.5 : 0.32, transition: "opacity .4s" }}>
                <span className="mono" style={{ color: i <= step ? "var(--amber-2)" : "var(--on-dark)", width: 22 }}>{i < step ? "✓" : String(i + 1).padStart(2, "0")}</span>
                <span className="display d-3" style={{ fontSize: "1.4rem" }}>{s}</span>
              </li>
            ))}
          </ol>
        </aside>

        {/* RIGHT — steps */}
        <div className="bk-main" style={{ padding: "var(--pad-top) 48px 60px", display: "flex", flexDirection: "column" }}>
          {/* progress */}
          <div style={{ display: "flex", gap: 8, marginBottom: 44 }}>
            {steps.map((_, i) => (
              <div key={i} style={{ flex: 1, height: 2, background: i <= step ? "var(--clay)" : "var(--line)", transition: "background .4s" }} />
            ))}
          </div>

          <div key={step} className="fade-page" style={{ flex: 1 }}>
            {step === 0 && (
              <div>
                <h3 className="display d-1" style={{ fontSize: "clamp(2rem,3.4vw,3rem)", marginBottom: 8 }}>What brings you in?</h3>
                <p className="lede" style={{ marginBottom: 30 }}>
                  Choose the experience that fits — we&apos;ll tailor the conversation around it.
                  {err.service && <span style={{ color: "var(--clay)", fontStyle: "italic", display: "block", marginTop: 8 }}>{err.service}</span>}
                </p>
                <div style={{ display: "grid", gap: 12 }}>
                  {B.services.map((s) => (
                    <BkChoice key={s[0]} active={f.service === s[0]} onClick={() => set("service", s[0])} title={s[0]} sub={s[1]} />
                  ))}
                </div>
              </div>
            )}
            {step === 1 && (
              <div>
                <h3 className="display d-1" style={{ fontSize: "clamp(2rem,3.4vw,3rem)", marginBottom: 8 }}>The details.</h3>
                <p className="lede" style={{ marginBottom: 36 }}>A little context so your first fitting is time well spent.</p>
                <div style={{ marginBottom: 34 }}>
                  <span className="over" style={{ display: "block", marginBottom: 16, color: err.occasion ? "var(--clay)" : "var(--muted)" }}>
                    The Occasion {err.occasion && <span style={errLine}>— {err.occasion}</span>}
                  </span>
                  <BkPills options={B.occasions} k="occasion" value={f.occasion} onChange={set} />
                </div>
                <div style={{ marginBottom: 34 }}>
                  <span className="over" style={{ display: "block", marginBottom: 16, color: err.timeline ? "var(--clay)" : "var(--muted)" }}>
                    Timeline {err.timeline && <span style={errLine}>— {err.timeline}</span>}
                  </span>
                  <BkPills options={B.timelines} k="timeline" value={f.timeline} onChange={set} />
                </div>
                <label style={{ display: "block" }}>
                  <span className="over" style={{ display: "block", marginBottom: 12, color: "var(--muted)" }}>
                    Notes <span style={{ textTransform: "none", letterSpacing: 0 }}>(optional)</span>
                  </span>
                  <textarea
                    value={f.notes}
                    onChange={(e) => set("notes", e.target.value)}
                    rows={4}
                    placeholder="Colours you love, references, anything we should know…"
                    style={{ width: "100%", padding: "16px 18px", background: "transparent", border: "1px solid var(--line)", color: "var(--ink)", fontFamily: "var(--ff-sans)", fontSize: "1rem", fontWeight: 300, outline: "none", resize: "vertical" }}
                  />
                </label>
              </div>
            )}
            {step === 2 && (
              <div>
                <h3 className="display d-1" style={{ fontSize: "clamp(2rem,3.4vw,3rem)", marginBottom: 8 }}>When &amp; where.</h3>
                <p className="lede" style={{ marginBottom: 36 }}>Visit the atelier, or we&apos;ll come to you.</p>
                <div style={{ marginBottom: 34 }}>
                  <span className="over" style={{ display: "block", marginBottom: 16, color: err.appt ? "var(--clay)" : "var(--muted)" }}>
                    How we&apos;ll meet {err.appt && <span style={errLine}>— {err.appt}</span>}
                  </span>
                  <div style={{ display: "grid", gap: 12 }}>
                    {B.appointments.map((a) => (
                      <BkChoice key={a} active={f.appt === a} onClick={() => set("appt", a)} title={a} />
                    ))}
                  </div>
                </div>
                <div className="bk-when" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 24 }}>
                  <BkField label="Preferred Date" k="date" type="date" value={f.date} onChange={set} error={err.date} min={today} />
                  <div>
                    <span className="over" style={{ display: "block", marginBottom: 12, color: err.time ? "var(--clay)" : "var(--muted)" }}>
                      Time {err.time && <span style={errLine}>— {err.time}</span>}
                    </span>
                    <BkPills options={B.times} k="time" value={f.time} onChange={set} />
                  </div>
                </div>
              </div>
            )}
            {step === 3 && (
              <div>
                <h3 className="display d-1" style={{ fontSize: "clamp(2rem,3.4vw,3rem)", marginBottom: 8 }}>And finally — you.</h3>
                <p className="lede" style={{ marginBottom: 36 }}>So we can confirm your appointment.</p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 24 }} className="bk-you">
                  <BkField label="Full Name" k="name" placeholder="Aditya Vir Singh" value={f.name} onChange={set} error={err.name} />
                  <BkField label="Email" k="email" type="email" placeholder="you@email.com" value={f.email} onChange={set} error={err.email} />
                  <BkField label="Phone" k="phone" type="tel" placeholder="+91 ·····" value={f.phone} onChange={set} error={err.phone} />
                  <BkField label="City" k="city" placeholder="New Delhi" value={f.city} onChange={set} error={err.city} />
                </div>
              </div>
            )}
          </div>

          {/* nav */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, marginTop: 44, borderTop: "1px solid var(--line)", paddingTop: 26 }}>
            {step === 0 ? (
              <Link className="ulink" href="/" style={{ color: "var(--muted)" }}>← Cancel</Link>
            ) : (
              <button type="button" className="ulink" onClick={back} style={{ color: "var(--muted)" }}>← Back</button>
            )}
            <button type="button" className="btn" onClick={next}>{step < 3 ? "Continue" : "Submit Enquiry"}</button>
          </div>
        </div>
      </div>
      <style>{`
        @media(min-width:940px){
          .bk-grid{grid-template-columns:0.85fr 1.15fr !important;background:linear-gradient(to right,var(--ink) 0 42.5%,var(--milk) 42.5%)}
          .bk-rail{position:sticky;top:0;height:100vh}
          .bk-when{grid-template-columns:1fr 1.2fr !important}
          .bk-you{grid-template-columns:1fr 1fr !important}
        }
        @media(max-width:939px){.bk-rail{padding:110px 22px 40px !important}.bk-main{padding:48px 22px 50px !important}}
        .bk-choice:hover[data-on="0"]{border-color:var(--ink) !important}
      `}</style>
    </div>
  );
}
