import { about } from '../data.js'
import SectionHead from './SectionHead.jsx'

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <SectionHead index="01" title="About" />
        <div className="about-grid">
          <div>
            {about.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <dl className="fact-card">
            {about.facts.map(({ label, value }) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
