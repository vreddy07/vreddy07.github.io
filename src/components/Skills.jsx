import { skillGroups } from '../data.js'
import SectionHead from './SectionHead.jsx'

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <SectionHead index="02" title="Skills & Tech Stack" />
        {skillGroups.map(({ title, skills }) => (
          <div className="skill-group" key={title}>
            <h3>{title}</h3>
            <div className="tags">
              {skills.map(({ name, hi }) => (
                <span key={name} className={hi ? 'tag hi' : 'tag'}>{name}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
