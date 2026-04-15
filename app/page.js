import CateringForm from './CateringForm'

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="hero">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="https://pub-ee840c00113243588bd244f0c5876d88.r2.dev/hero.webm" type="video/webm" />
          <source src="https://pub-ee840c00113243588bd244f0c5876d88.r2.dev/hero.mp4" type="video/mp4" />
        </video>

        <div className="hero-overlay" />

        <div className="hero-content">
          <h1 className="hero-name">Fuoco</h1>
          <div className="hero-line" />
          <p className="hero-desc">
            Wood-fired Neapolitan pizza, made simply and served from our truck.
          </p>
          <nav className="hero-nav">
            <a href="#menu">Menu</a>
            <a href="#about">About</a>
            <a href="#find">Find Us</a>
          </nav>
          <a href="https://instagram.com/fuocopizzatruck" className="hero-cta" target="_blank" rel="noopener noreferrer">
            Follow for tonight's location →
          </a>
        </div>
      </section>

      <div className="rule" />

      {/* ── MENU ── */}
      <div className="wrap" id="menu">
        <div className="section-label">Menu</div>
        <h2 className="section-heading">What we make</h2>
        <p className="section-text">
          Caputo 00 flour, 72-hour cold ferment, hand-crushed San Marzano DOP
          tomatoes, fior di latte. Fired at 900°F for about 90 seconds.
        </p>

        <ul className="menu-list">
          <li className="menu-item">
            <div className="menu-row">
              <span className="menu-name">Margherita</span>
              <span className="menu-dots" />
              <span className="menu-price">14</span>
            </div>
            <div className="menu-desc">San Marzano, fior di latte, basil, olive oil</div>
          </li>
          <li className="menu-item">
            <div className="menu-row">
              <span className="menu-name">Marinara<span className="menu-tag">Vegan</span></span>
              <span className="menu-dots" />
              <span className="menu-price">12</span>
            </div>
            <div className="menu-desc">San Marzano, garlic, oregano, olive oil — no cheese</div>
          </li>
          <li className="menu-item">
            <div className="menu-row">
              <span className="menu-name">Diavola</span>
              <span className="menu-dots" />
              <span className="menu-price">16</span>
            </div>
            <div className="menu-desc">Soppressata, San Marzano, fior di latte, Calabrian chili oil</div>
          </li>
          <li className="menu-item">
            <div className="menu-row">
              <span className="menu-name">Bianca</span>
              <span className="menu-dots" />
              <span className="menu-price">16</span>
            </div>
            <div className="menu-desc">Fior di latte, ricotta, pecorino, garlic, black pepper</div>
          </li>
          <li className="menu-item">
            <div className="menu-row">
              <span className="menu-name">Prosciutto e Rucola</span>
              <span className="menu-dots" />
              <span className="menu-price">18</span>
            </div>
            <div className="menu-desc">Prosciutto di Parma, arugula, parmigiano, lemon oil — finished cold</div>
          </li>
          <li className="menu-item">
            <div className="menu-row">
              <span className="menu-name">Funghi</span>
              <span className="menu-dots" />
              <span className="menu-price">16</span>
            </div>
            <div className="menu-desc">Mixed mushrooms, fontina, thyme, truffle oil</div>
          </li>
        </ul>
      </div>

      <div className="rule" />

      {/* ── ABOUT ── */}
      <div className="wrap" id="about">
        <div className="section-label">About</div>
        <h2 className="section-heading">One oven, one truck</h2>

        <div className="about-split">
          <div className="about-text">
            <p className="section-text">
              We built a wood-fired oven, bolted it to a truck, and started making
              pizza. We use good flour, real tomatoes, and proper fermentation. Nothing
              fancy — just the right ingredients handled with care.
            </p>
            <p className="section-text">
              Every pie is stretched by hand, topped simply, and fired fast.
              That is the whole operation.
            </p>
            <blockquote className="about-quote">
              "We wanted to make the kind of pizza you'd eat standing up in Naples —
              blistered, a little charred, gone in four bites."
              <cite>— Marco, founder</cite>
            </blockquote>
          </div>
          <div
            className="about-photo"
            style={{backgroundImage: "url('https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=800&q=80')"}}
          />
        </div>

        <div className="about-grid">
          <div className="about-stat">
            <div className="about-stat-num">900°</div>
            <div className="about-stat-label">Oven temp</div>
          </div>
          <div className="about-stat">
            <div className="about-stat-num">72h</div>
            <div className="about-stat-label">Cold ferment</div>
          </div>
          <div className="about-stat">
            <div className="about-stat-num">~90s</div>
            <div className="about-stat-label">Per pie</div>
          </div>
        </div>
      </div>

      <div className="rule" />

      {/* ── SCHEDULE ── */}
      <div className="wrap" id="find">
        <div className="section-label">Schedule</div>
        <h2 className="section-heading">Where to find us</h2>
        <p className="section-text">
          We rotate spots around the city. Follow along on Instagram
          for real-time updates and pop-ups.
        </p>
        <ul className="sched-list">
          <li className="sched-item">
            <span className="sched-day">Saturday</span>
            <span className="sched-loc">
              Farmers Market
              <a className="sched-directions" href="https://maps.google.com/?q=Farmers+Market" target="_blank" rel="noopener noreferrer">Get directions ↗</a>
            </span>
            <span className="sched-time">9am – 2pm</span>
          </li>
          <li className="sched-item">
            <span className="sched-day">Wednesday</span>
            <span className="sched-loc">
              Brewery Row
              <a className="sched-directions" href="https://maps.google.com/?q=Brewery+Row" target="_blank" rel="noopener noreferrer">Get directions ↗</a>
            </span>
            <span className="sched-time">5pm – 9pm</span>
          </li>
          <li className="sched-item">
            <span className="sched-day">Friday</span>
            <span className="sched-loc">
              Waterfront Park
              <a className="sched-directions" href="https://maps.google.com/?q=Waterfront+Park" target="_blank" rel="noopener noreferrer">Get directions ↗</a>
            </span>
            <span className="sched-time">5pm – 10pm</span>
          </li>
        </ul>

        {/* ── CATERING ── */}
        <div className="catering-box" id="catering">
          <h3>Private events</h3>
          <p>We bring the truck and the oven to weddings, parties, and corporate events. Tell us a bit about your event and we'll get back to you within 24 hours.</p>
          <CateringForm />
        </div>
      </div>

      <div className="rule" />

      {/* ── FOOTER ── */}
      <footer>
        <div className="footer-name">Fuoco</div>
        <div className="footer-tagline">Wood-fired Neapolitan · Est. 2023</div>
        <div className="footer-links">
          <a href="https://instagram.com/fuocopizzatruck" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://tiktok.com/@fuocopizzatruck" target="_blank" rel="noopener noreferrer">TikTok</a>
          <a href="mailto:hello@fuocopizza.com">Email</a>
        </div>
        <div className="footer-copy">© {new Date().getFullYear()} Fuoco Pizza Truck. All rights reserved.</div>
      </footer>
    </>
  )
}
