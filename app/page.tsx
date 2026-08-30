import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="demo-landing-page">
      <header className="demo-landing-header" aria-label="Demo banking header">
        <div className="demo-landing-brand" aria-label="Zudda Demo Banking">
          <img src="/sbg.png" alt="" />
        </div>
        <span className="demo-contact">
          <span className="demo-contact-icon" aria-hidden="true" />
          Contact Us
        </span>
      </header>

      <section className="demo-landing-split" aria-label="Demo banking landing page">
        <div className="demo-landing-image-panel">
          <img src="/login-landing-pc.jpg" alt="" />
        </div>

        <div className="demo-landing-actions">
          <div className="demo-action-center">
            <h2>Sign in to online banking</h2>
            <p className="demo-register-copy">
              If you don't have an online profile, please register
            </p>

            <div className="demo-action-buttons">
              <Link className="demo-signin-button" href="/login/">
                SIGN IN
              </Link>
              <button className="demo-register-button" type="button">
                REGISTER
              </button>
            </div>

            <p className="demo-terms">
              By signing in, I agree to the <span>T&amp;Cs</span>
              <br />
              Last updated in June 2025
            </p>

            <p className="demo-invitation">
              Received an invitation for online banking?
              <br />
              <span>START HERE</span>
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}
