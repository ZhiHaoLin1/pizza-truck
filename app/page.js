export default function Home() {
  return (
    <>
      <section className="hero">
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
      </section>

      <div className="rule" />

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

      <div className="wrap" id="about">
        <div className="section-label">About</div>
        <h2 className="section-heading">One oven, one truck</h2>
        <p className="section-text">
          We built a wood-fired oven, bolted it to a truck, and started making
          pizza. We use good flour, real tomatoes, and proper fermentation. Nothing
          fancy — just the right ingredients handled with care.
        </p>
        <p className="section-text">
          Every pie is stretched by hand, topped simply, and fired fast.
          That is the whole operation.
        </p>
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
            <span className="sched-loc">Farmers Market</span>
            <span className="sched-time">9am – 2pm</span>
          </li>
          <li className="sched-item">
            <span className="sched-day">Wednesday</span>
            <span className="sched-loc">Brewery Row</span>
            <span className="sched-time">5pm – 9pm</span>
          </li>
          <li className="sched-item">
            <span className="sched-day">Friday</span>
            <span className="sched-loc">Waterfront Park</span>
            <span className="sched-time">5pm – 10pm</span>
          </li>
        </ul>

        <div className="catering-box">
          <h3>Private events</h3>
          <p>We bring the truck and the oven to weddings, parties, and corporate events.</p>
          <a href="mailto:hello@fuocopizza.com" className="catering-link">Get in touch</a>
        </div>
      </div>

      <div className="rule" />

      <footer>
        <div className="footer-name">Fuoco</div>
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
