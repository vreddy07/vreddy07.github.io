import { experience } from '../data.js'
import SectionHead from './SectionHead.jsx'

export default function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <SectionHead index="04" title="Experience" />
        <div className="timeline">
          {experience.map(({ when, role, org, summary }) => (
            <div className="t-item" key={when + role}>
              <p className="t-when">{when}</p>
              <h3>{role}</h3>
              <p className="t-org">{org}</p>
              <p>{summary}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
