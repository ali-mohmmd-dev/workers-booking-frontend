"use client";
import { useState } from "react";
import { ShieldCheck, KeyRound } from "@/components/shared/icon";
import { IconCredit } from "@/components/shared/icon-credit";
import { Logo } from "@/components/shared/logo";
export function AuthScreen({ onLogin }: {
    onLogin: () => void;
}) {
    const [signup, setSignup] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    function submit(e: React.FormEvent) {
        e.preventDefault();
        setError("");
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            onLogin();
        }, 650);
    }
    return (<main className="auth-page">
      <div className="auth-art">
        <div className="auth-art-inner">
          <Logo />
          <div className="art-copy">
            <h1>
              Get things done.
              <br />
              <em>Live lighter.</em>
            </h1>
            <p>Find trusted local workers for all the jobs on your list.</p>
          </div>
          <div className="art-note">
            <ShieldCheck size={18}/> Background-checked professionals
          </div>
        </div>
      </div>
      <section className="auth-form">
        <div className="auth-form-inner">
          <div className="mobile-logo">
            <Logo />
          </div>
          <h2>{signup ? "Start with mendly" : "Good to see you"}</h2>
          <p className="muted">
            {signup
            ? "Book trusted help in just a few taps."
            : "Log in to continue to your dashboard."}
          </p>
          <form onSubmit={submit}>
            {signup && (<label>
                Full name
                <input required placeholder="Maya Thompson"/>
              </label>)}
            <label>
              Email address
              <input required type="email" placeholder="you@example.com"/>
            </label>
            <label>
              Password
              <input required type="password" placeholder="••••••••" minLength={6}/>
            </label>
            {signup && (<label>
                Confirm password
                <input required type="password" placeholder="••••••••" minLength={6}/>
              </label>)}
            {error && <p className="error">{error}</p>}
            <button className="primary wide" disabled={loading}>
              {loading ? "Please wait…" : signup ? "Create account" : "Log in"}{" "}
              
            </button>
          </form>
          {!signup && <button className="text-button">Forgot password?</button>}
          <div className="divider">
            <span>or</span>
          </div>
          <button className="google-button" onClick={() => setError("Google sign-in is not connected in this demo.")}>
            Continue with Google
          </button>
          <p className="switch-auth">
            {signup ? "Already have an account?" : "New to mendly?"}{" "}
            <button onClick={() => setSignup(!signup)}>
              {signup ? "Log in" : "Create account"}
            </button>
          </p>
          <p className="demo-label">
            <KeyRound size={13}/> Demo authentication · connect a backend to
            enable real accounts
          </p>
          <IconCredit />
        </div>
      </section>
    </main>);
}
