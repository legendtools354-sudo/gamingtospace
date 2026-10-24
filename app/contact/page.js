'use client';
import { useState } from 'react';

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  function onSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const subject = encodeURIComponent(`GamingToSpace contact: ${data.get('subject')}`);
    const body = encodeURIComponent(`Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`);
    window.location.href = `mailto:contact@gamingtospace.com?subject=${subject}&body=${body}`;
    setSent(true);
  }
  return (
    <section className="card article">
      <h1>Contact Us</h1>
      <p>Have a game to suggest, a correction, or a removal request? Send us a message using the form below. The form opens your email app addressed to contact@gamingtospace.com — no message is stored on this website itself.</p>
      {sent && <p style={{ background: '#dcfce7', padding: 10, borderRadius: 8 }}>Your email app should now be open. Please press Send there to deliver your message.</p>}
      <form className="contact" onSubmit={onSubmit}>
        <label>Your name<input name="name" required placeholder="Your name" /></label>
        <label>Your email<input name="email" type="email" required placeholder="you@example.com" /></label>
        <label>Subject<input name="subject" required placeholder="Game suggestion / correction / removal" /></label>
        <label>Message<textarea name="message" rows={6} required placeholder="Game name, Play Store link, and your message…" /></label>
        <button className="btn" type="submit">Send Message</button>
      </form>
      <p style={{ fontSize: 14 }}>You can also email us directly at <a href="mailto:contact@gamingtospace.com" style={{ color: '#2563eb' }}>contact@gamingtospace.com</a>.</p>
    </section>
  );
}
