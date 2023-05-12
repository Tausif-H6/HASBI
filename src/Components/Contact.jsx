import React from 'react'
import "../styles/Contact.scss"

function Contact() {
  return (
    <div class="container">
    <h1>Contact Us</h1>
    <form>
      <input type="text" name="name" placeholder="Your Name"/>
      <input type="email" name="email" placeholder="Your Email"/>
      <textarea name="message" placeholder="Your Message"></textarea>
      <button type="submit">Submit</button>
    </form>
  </div>
  )
}

export default Contact