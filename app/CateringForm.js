'use client'

export default function CateringForm() {
  return (
    <form className="catering-form" onSubmit={(e) => e.preventDefault()}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Your name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="your@email.com" />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="date">Event date</label>
          <input type="date" id="date" />
        </div>
        <div className="form-group">
          <label htmlFor="guests">Guest count</label>
          <input type="number" id="guests" placeholder="50" min="1" />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="message">Tell us about your event</label>
        <textarea id="message" rows="4" placeholder="Location, occasion, any details..." />
      </div>
      <button type="submit" className="form-submit">Send inquiry</button>
    </form>
  )
}
