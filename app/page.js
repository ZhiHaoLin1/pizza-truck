export default function Home() {
  const ticker = '🍕 WOOD-FIRED GOODNESS • 900°F OVEN • 72HR COLD FERMENT • REAL SAN MARZANO DOP • FIND US ON THE STREET • CATERING AVAILABLE • '

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-pizza">🍕</div>
        <h1 className="hero-title">
          <span className="pop">Fuoco</span> Pizza
        </h1>
        <p className="hero-subtitle">
          Wood-fired Neapolitan pies from our truck to your hands 🔥
        </p>
        <div className="hero-cta">
          <a href="#menu" className="btn btn-primary">See the Menu</a>
          <a href="#find" className="btn btn-outline">Find the Truck</a>
        </div>
      </section>

      {/* TICKER */}
      <div className="ticker-wrap">
        <div className="ticker">
          {[...Array(4)].map((_, i) => (
            <span key={i}>{ticker}</span>
          ))}
        </div>
      </div>

      {/* MENU */}
      <section id="menu">
        <span className="section-eyebrow">Our Pies</span>
        <h2 className="section-title">The Menu</h2>
        <p className="section-desc">
          Caputo 00 flour, 72-hour cold ferment, hand-crushed San Marzano tomatoes.
          Every pie hits 900°F and lands in your hands in 90 seconds.
        </p>

        <div className="menu-grid">
          <div className="menu-card">
            <div className="menu-card-top">
              <h3>Margherita</h3>
              <span className="price-badge">$14</span>
            </div>
            <p>San Marzano, fior di latte, fresh basil, EVOO. The one that started it all.</p>
            <span className="tag tag-classic">Classic</span>
          </div>

          <div className="menu-card">
            <div className="menu-card-top">
              <h3>Diavola</h3>
              <span className="price-badge">$16</span>
            </div>
            <p>Spicy soppressata, San Marzano, fior di latte, Calabrian chili oil.</p>
            <span className="tag tag-spicy">🌶 Spicy</span>
          </div>

          <div className="menu-card">
            <div className="menu-card-top">
              <h3>Bianca</h3>
              <span className="price-badge">$16</span>
            </div>
            <p>Fior di latte, ricotta, pecorino, garlic, black pepper, EVOO. No tomato, all soul.</p>
            <span className="tag tag-fav">⭐ Fan Fav</span>
          </div>

          <div className="menu-card">
            <div className="menu-card-top">
              <h3>Marinara</h3>
              <span className="price-badge">$12</span>
            </div>
            <p>San Marzano, garlic, oregano, EVOO. No cheese. The OG Neapolitan.</p>
            <span className="tag tag-vegan">Vegan</span>
          </div>

          <div className="menu-card">
            <div className="menu-card-top">
              <h3>Prosciutto e Rucola</h3>
              <span className="price-badge">$18</span>
            </div>
            <p>Prosciutto di Parma, wild arugula, shaved parm, lemon oil. Topped after the oven.</p>
          </div>

          <div className="menu-card">
            <div className="menu-card-top">
              <h3>Funghi</h3>
              <span className="price-badge">$16</span>
            </div>
            <p>Mixed mushrooms, fontina, thyme, truffle oil. Earthy and deeply savory.</p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <span className="section-eyebrow">Our Story</span>
        <div className="about-layout">
          <div className="about-visual">🚚🔥</div>
          <div className="about-content">
            <h2>One truck. One oven. One obsession.</h2>
            <p>
              Fuoco started with a custom wood-fired oven bolted to a truck and
              a stubborn belief that the best pizza doesn't need a dining room.
              We source the good stuff, ferment the dough for three days, and
              fire every pie at 900 degrees.
            </p>
            <p>
              No shortcuts. No frozen anything. Just fire, flour, water, salt, and time.
            </p>
            <div className="stats-row">
              <div className="stat">
                <div className="stat-val">900°</div>
                <div className="stat-lbl">Oven Temp</div>
              </div>
              <div className="stat">
                <div className="stat-val">72h</div>
                <div className="stat-lbl">Ferment</div>
              </div>
              <div className="stat">
                <div className="stat-val">90s</div>
                <div className="stat-lbl">Per Pie</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SCHEDULE */}
      <section id="find">
        <span className="section-eyebrow">Find Us</span>
        <h2 className="section-title">Where We Roll</h2>
        <p className="section-desc">
          We post up at different spots around town. Follow us on
          Instagram for real-time locations and surprise pop-ups.
        </p>
        <div className="schedule-grid">
          <div className="sched-card">
            <div className="sched-emoji">🌿</div>
            <h3>Saturday</h3>
            <div className="loc">Farmers Market</div>
            <div className="time">9am – 2pm</div>
          </div>
          <div className="sched-card">
            <div className="sched-emoji">🍺</div>
            <h3>Wednesday</h3>
            <div className="loc">Brewery Row</div>
            <div className="time">5pm – 9pm</div>
          </div>
          <div className="sched-card">
            <div className="sched-emoji">🌅</div>
            <h3>Friday</h3>
            <div className="loc">Waterfront Park</div>
            <div className="time">5pm – 10pm</div>
          </div>
          <div className="sched-card">
            <div className="sched-emoji">🎉</div>
            <h3>Events</h3>
            <div className="loc">Weddings & Parties</div>
            <div className="time">Book via DM</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="cta-banner">
        <h2>Book the Truck for Your Next Event 🎉</h2>
        <p>Weddings, corporate events, birthday parties — we bring the fire to you.</p>
        <a href="mailto:hello@fuocopizza.com" className="btn-white">Get in Touch</a>
      </div>

      {/* FOOTER */}
      <footer>
        <div className="footer-brand">Fuoco 🍕</div>
        <div className="footer-links">
          <a href="#">Instagram</a>
          <a href="#">TikTok</a>
          <a href="mailto:hello@fuocopizza.com">Email</a>
        </div>
        <div>© {new Date().getFullYear()} Fuoco Pizza Truck</div>
      </footer>
    </>
  )
}
