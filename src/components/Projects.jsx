import { projects } from '../data.js'
import SectionHead from './SectionHead.jsx'

export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <SectionHead index="03" title="Projects" />
        <div className="proj-grid">
          {projects.map(({ title, description, stack, link, linkText }) => (
            <article className="proj" key={title}>
              <h3>{title}</h3>
              <p>{description}</p>
              <span className="stack">{stack}</span>
              {link
                ? <a href={link} target="_blank" rel="noopener noreferrer">{linkText}</a>
                : <span>{linkText}</span>}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
