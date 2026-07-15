import { profile } from '../data.js'

const links = [
  ['#about', 'About'],
  ['#skills', 'Skills'],
  ['#projects', 'Projects'],
  ['#experience', 'Experience'],
  ['#certs', 'Certifications'],
  ['#contact', 'Contact'],
]

export default function Nav() {
  return (
    <nav>
      <div className="nav-inner">
        <span className="nav-name">{profile.handle}</span>
        <div className="nav-links">
          {links.map(([href, label]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </div>
      </div>
    </nav>
  )
}
