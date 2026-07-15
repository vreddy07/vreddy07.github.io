import { certifications } from '../data.js'
import SectionHead from './SectionHead.jsx'

export default function Certifications() {
  return (
    <section id="certs">
      <div className="wrap">
        <SectionHead index="05" title="Certifications" />
        <div className="cert-grid">
          {certifications.map(({ badge, title, issuer }) => (
            <div className="cert" key={badge}>
              <span className="badge">{badge}</span>
              <div>
                <h3>{title}</h3>
                <p>{issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
