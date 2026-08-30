import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="demo-landing-page">
      <header className="demo-landing-header" aria-label="Demo banking header">
        <div className="demo-landing-brand" aria-label="Zudda Demo Banking">
          <img src="/sbg.png" alt="" />
          <span>Zudda Demo</span>
        </div>
        <span className="demo-contact">Contact us</span>
      </header>

      <section className="demo-landing-split" aria-label="Demo banking landing page">
        <div className="demo-landing-image-panel">
          <img src="/login-landing-pc.jpg" alt="" />
          <div className="demo-image-copy">
            <p>Welcome to</p>
            <h1>Zudda Demo Online Banking</h1>
          </div>
          <p className="demo-watermark">Fictional demo interface</p>
        </div>

        <div className="demo-landing-actions">
          <div className="demo-action-center">
            <h2>Sign in to online banking</h2>
            <p className="demo-register-copy">
              If you don't have an online profile, please register
            </p>

            <div className="demo-action-buttons">
              <Link className="demo-signin-button" href="/">
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

          <p className="demo-legal">
            Zudda Demo Banking is a fictional demonstration interface. It is not
            connected to any real financial institution, banking service, or
            external authentication provider.
          </p>
        </div>
      </section>
    </main>
  );
}
