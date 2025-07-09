"use client"

import { useState, useEffect } from "react"
import "./App.css"

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "programs", "facilities", "contact"]
      const scrollPosition = window.scrollY + 100

      sections.forEach((section) => {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo">
            <h2>Bumblebee Preschool</h2>
            <span>Vellore</span>
          </div>
          <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
            <ul>
              <li>
                <a
                  href="#home"
                  className={activeSection === "home" ? "active" : ""}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection("home")
                  }}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className={activeSection === "about" ? "active" : ""}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection("about")
                  }}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#programs"
                  className={activeSection === "programs" ? "active" : ""}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection("programs")
                  }}
                >
                  Programs
                </a>
              </li>
              <li>
                <a
                  href="#facilities"
                  className={activeSection === "facilities" ? "active" : ""}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection("facilities")
                  }}
                >
                  Facilities
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className={activeSection === "contact" ? "active" : ""}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection("contact")
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Welcome to Bumblebee Preschool</h1>
          <p>Where Little Minds Grow and Play!</p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => scrollToSection("about")}>
              Learn More
            </button>
            <button className="btn btn-secondary" onClick={() => scrollToSection("contact")}>
              Admissions
            </button>
          </div>
        </div>
        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop&crop=center"
            alt="Happy children playing at preschool"
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2>About Our School</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                Bumblebee Preschool has been nurturing young minds in Vellore for over a decade. We provide a safe,
                loving, and stimulating environment where children aged 2-6 can learn, play, and grow together.
              </p>
              <p>
                Our caring teachers and child-friendly facilities create a magical world where every day is an adventure
                filled with discovery, creativity, and joy.
              </p>
              <div className="stats">
                <div className="stat">
                  <h3>200+</h3>
                  <p>Happy Kids</p>
                </div>
                <div className="stat">
                  <h3>25+</h3>
                  <p>Caring Teachers</p>
                </div>
                <div className="stat">
                  <h3>10+</h3>
                  <p>Years of Fun Learning</p>
                </div>
              </div>
            </div>
            <div className="about-image">
              <img
                src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400&h=300&fit=crop&crop=center"
                alt="Children learning in classroom"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="programs">
        <div className="container">
          <h2>Our Programs</h2>
          <div className="programs-grid">
            <div className="program-card">
              <div className="program-icon">🌟</div>
              <h3>Toddler Program (2-3 years)</h3>
              <p>Gentle introduction to learning through play, sensory activities, and social interaction.</p>
            </div>
            <div className="program-card">
              <div className="program-icon">🎨</div>
              <h3>Creative Arts</h3>
              <p>Painting, drawing, crafts, and music to spark imagination and creativity.</p>
            </div>
            <div className="program-card">
              <div className="program-icon">📖</div>
              <h3>Story Time & Reading</h3>
              <p>Building language skills through interactive storytelling and early literacy.</p>
            </div>
            <div className="program-card">
              <div className="program-icon">🏃</div>
              <h3>Physical Play</h3>
              <p>Outdoor activities, games, and movement to develop motor skills and coordination.</p>
            </div>
            <div className="program-card">
              <div className="program-icon">🧩</div>
              <h3>Learning Through Play</h3>
              <p>Educational games, puzzles, and activities that make learning fun and engaging.</p>
            </div>
            <div className="program-card">
              <div className="program-icon">🎭</div>
              <h3>Drama & Music</h3>
              <p>Role-playing, singing, and musical activities to build confidence and expression.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section id="facilities" className="facilities">
        <div className="container">
          <h2>Our Facilities</h2>
          <div className="facilities-grid">
            <div className="facility-item">
              <img
                src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=200&fit=crop&crop=center"
                alt="Colorful children's books and reading materials"
              />
              <h3>📚 Story Corner</h3>
              <p>
                Cozy reading nook with hundreds of age-appropriate books, comfortable seating, and interactive
                storytelling sessions
              </p>
            </div>
            <div className="facility-item">
              <img
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop&crop=center"
                alt="Colorful paints and painting supplies for children"
              />
              <h3>🎨 Creative Studio</h3>
              <p>
                Art supplies, musical instruments, building blocks, and hands-on learning materials for creative
                exploration
              </p>
            </div>
            <div className="facility-item">
              <img
                src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=300&h=200&fit=crop&crop=center"
                alt="Bright colorful playground slide for kids"
              />
              <h3>🏃 Outdoor Playground</h3>
              <p>
                Safe, age-appropriate play equipment including slides, swings, climbing structures, and open space for
                running
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>Contact Us</h2>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <h3>📍 Address</h3>
                <p>
                  123 Education Street
                  <br />
                  Vellore, Tamil Nadu 632001
                </p>
              </div>
              <div className="contact-item">
                <h3>📞 Phone</h3>
                <p>+91 98765 43210</p>
              </div>
              <div className="contact-item">
                <h3>✉️ Email</h3>
                <p>info@bumblebee-preschool.edu</p>
              </div>
              <div className="contact-item">
                <h3>🕒 Hours</h3>
                <p>
                  Mon - Fri: 8:00 AM - 5:00 PM
                  <br />
                  Sat: 8:00 AM - 12:00 PM
                </p>
              </div>
            </div>
            <form className="contact-form">
              <h3>Send us a Message</h3>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <input type="text" placeholder="Subject" required />
              <textarea placeholder="Your Message" rows="5" required></textarea>
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Bumblebee Preschool</h3>
              <p>Committed to excellence in education and character development.</p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#programs">Programs</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Follow Us</h4>
              <div className="social-links">
                <a href="https://www.facebook.com/bumblebeevellore/">Facebook</a>
                {/* <a href="#">Twitter</a> */}
                <a href="https://www.instagram.com/bumblebee_vellore/?hl=en">Instagram</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Bumblebee Preschool. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
