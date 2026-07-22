import { useState } from 'react'
import { experience } from '../data.js'
import SectionHead from './SectionHead.jsx'

export default function Experience() {
  const [expanded, setExpanded] = useState(null)

  const toggleExpanded = (index) => {
    setExpanded(expanded === index ? null : index)
  }

  return (
    <section id="experience">
      <div className="wrap">
        <SectionHead index="04" title="Experience" />
        <div className="exp-tiles">
          {experience.map((exp, index) => (
            <div
              key={index}
              className={`exp-tile ${expanded === index ? 'expanded' : ''}`}
              onClick={() => toggleExpanded(index)}
            >
              <div className="exp-tile-header">
                <div className="exp-tile-title">
                  <h3>{exp.role}</h3>
                  <p className="exp-org">{exp.org}</p>
                </div>
                <div className="exp-tile-meta">
                  <p className="exp-when">{exp.when}</p>
                  <span className="expand-icon">{expanded === index ? '−' : '+'}</span>
                </div>
              </div>

              {expanded === index && (
                <div className="exp-tile-details">
                  <p className="exp-location">{exp.location}</p>
                  <p className="exp-stack">{exp.stack}</p>
                  <ul className="exp-highlights">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
