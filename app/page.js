export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-badge">Wood-Fired &middot; Street-Side</div>
        <h1 className="hero-title">
          <em>Fuoco</em>
        </h1>
        <p className="hero-subtitle">Neapolitan pizza, born from flame.</p>
        <div className="hero-cta">
          <a href="#menu" className="btn btn-primary">See the Menu</a>
          <a href="#find" className="btn btn-outline">Find the Truck</a>
        </div>
        <div className="scroll-hint">
          <span>Scroll</span>
          <div className="scroll-line" />
        </div>
      </section>

      <div className="divider"><div className="divider-line" /></div>

      {/* ── MENU ── */}
      <section id="menu">
        <div className="section-label">Il Menu</div>
        <h2 className="section-title">Simple ingredients,<br />extraordinary pies.</h2>
        <p className="section-desc">
          San Marzano tomatoes, fior di latte, Caputo 00 flour, 72-hour cold ferment.
          Every pie hits 900°F and comes out in 90 seconds.
        </p>

        <div className="menu-grid">
          <div className="menu-card">
            <div className="menu-card-header">
              <h3>Margherita</h3>
              <span className="price">$14</span>
            </div>
            <p>San Marzano tomato, fior di latte, fresh basil, extra virgin olive oil. The standard by which all pizza is measured.</p>
            <span className="tag">Classic</span>
          </div>

          <div className="menu-card">
            <div className="menu-card-header">
              <h3>Diavola</h3>
              <span className="price">$16</span>
            </div>
            <p>Spicy soppressata, San Marzano tomato, fior di latte, Calabrian chili oil. Brings the heat.</p>
            <span className="tag">Spicy</span>
          </div>

          <div className="menu-card">
            <div className="menu-card-header">
              <h3>Bianca</h3>
              <span className="price">$16</span>
            </div>
            <p>Fior di latte, ricotta, pecorino romano, garlic, black pepper, EVOO. No tomato, all elegance.</p>
          </div>

          <div className="menu-card">
            <div className="menu-card-header">
              <h3>Marinara</h3>
              <span className="price">$12</span>
            </div>
            <p>San Marzano tomato, garlic, oregano, EVOO. No cheese. The oldest and purest Neapolitan pie.</p>
            <span className="tag">Vegan</span>
          </div>

          <div className="menu-card">
            <div className="menu-card-header">
              <h3>Prosciutto e Rucola</h3>
              <span className="price">$18</span>
            </div>
            <p>Fior di latte, prosciutto di Parma, wild arugula, shaved parmigiano, lemon oil. Finished after the oven.</p>
          </div>

          <div className="menu-card">
            <div className="menu-card-header">
              <h3>Funghi</h3>
              <span className="price">$16</span>
            </div>
            <p>Mixed mushrooms, fontina, thyme, truffle oil, fior di latte. Earthy and deeply savory.</p>
          </div>
        </div>
      </section>

      <div className="divider"><div className="divider-line" /></div>

      {/* ── ABOUT ── */}
      <section id="about">
        <div className="section-label">La Storia</div>
        <div className="about-layout">
          <div className="about-image" />
          <div className="about-text">
            <h2 className="section-title">Fire first.<br />Everything else follows.</h2>
            <p>
              Fuoco started with a custom-built wood-fired oven mounted on a
              1972 Citroën and an obsession with doing one thing right. We
              source Caputo 00 flour, hand-crush San Marzano DOP tomatoes,
              and cold-ferment our dough for 72 hours.
            </p>
            <p>
              Every pie is stretched by hand, topped with restraint, and fired
              at 900°F for 60–90 seconds. No conveyor belts, no compromises.
              Just fire, flour, water, salt, and time.
            </p>
            <div className="about-stats">
              <div>
                <div className="stat-num">900°</div>
                <div className="stat-label">Oven temp</div>
              </div>
              <div>
                <div className="stat-num">72h</div>
                <div className="stat-label">Cold ferment</div>
              </div>
              <div>
                <div className="stat-num">90s</div>
                <div className="stat-label">Per pie</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider"><div className="divider-line" /></div>

      {/* ── FIND US ── */}
      <section id="find">
        <div className="section-label">Trovarci</div>
        <h2 className="section-title">Find the truck.</h2>
        <p className="section-desc">
          We post up at rotating spots around the city. Follow us on Instagram
          for real-time locations and surprise pop-ups.
        </p>

        <div className="find-grid">
          <div className="find-card">
            <h3>📍 Saturday</h3>
            <p><span className="day">Downtown Farmers Market</span><br />9am – 2pm</p>
          </div>
          <div className="find-card">
            <h3>📍 Wednesday</h3>
            <p><span className="day">Brewery Row</span><br />5pm – 9pm</p>
          </div>
          <div className="find-card">
            <h3>📍 Friday</h3>
            <p><span className="day">Waterfront Park</span><br />5pm – 10pm</p>
          </div>
          <div className="find-card">
            <h3>📍 Private Events</h3>
            <p><span className="day">Weddings, parties, corporate</span><br />Book via DM or email</p>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer>
        <div className="footer-brand">Fuoco</div>
        <div className="footer-tagline">Born from flame.</div>
        <div className="social-links">
          <a href="#">Instagram</a>
          <a href="#">TikTok</a>
          <a href="mailto:hello@fuocopizza.com">Email</a>
        </div>
        <div className="footer-copy">© {new Date().getFullYear()} Fuoco Pizza Truck. All rights reserved.</div>
      </footer>
    </>
  )
}
