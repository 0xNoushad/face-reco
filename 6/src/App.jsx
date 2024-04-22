import React from 'react';
import './App.css'

function App() {
  return (
    <div>
      <header>
        <h1>Noushad</h1>
      </header>
      <nav>
        <a href="#about">About Nietzsche</a>
        <a href="#philosophy">Philosophy</a>
        <a href="#works">Key Works</a>
        <a href="#quotes">Quotes</a>
      </nav>
      <main>
        <AboutSection />
        <PhilosophySection />
        <WorksSection />
        <QuotesSection />
      </main>
      <footer>
        <p>&copy; 2023 Noushad. All rights reserved.</p>
      </footer>
    </div>
  );
}

function AboutSection() {
  return (
    <section id="about">
      <h2>About Nietzsche</h2>
      <p>
        Friedrich Nietzsche (1844–1900) was a German philosopher, cultural critic, poet, and philologist. He is best known for his ideas on existentialism, the will to power, and the concept of the "Übermensch" or the "Superman."
      </p>
    </section>
  );
}

function PhilosophySection() {
  return (
    <section id="philosophy">
      <h2>Philosophy</h2>
      <p>
        Nietzsche's philosophy challenged traditional morality, religion, and metaphysics. He criticized the concept of good and evil as defined by Christianity and explored the idea of perspectivism, where truth is subjective and depends on one's perspective.
      </p>
    </section>
  );
}

function WorksSection() {
  return (
    <section id="works">
      <h2>Key Works</h2>
      <ul>
        <li>Thus Spoke Zarathustra</li>
        <li>Beyond Good and Evil</li>
        <li>Genealogy of Morality</li>
        <li>Ecce Homo</li>
        <li>The Birth of Tragedy</li>
      </ul>
    </section>
  );
}

function QuotesSection() {
  return (
    <section id="quotes">
      <h2>Quotes</h2>
      <blockquote>
        "He who has a why to live can bear almost any how."
        <br />
        - Friedrich Nietzsche
      </blockquote>
      {/* Add more Nietzsche quotes here if needed */}
    </section>
  );
}

export default App;