import { profile } from '../data.js'
import SeqMotif from './SeqMotif.jsx'

export default function Footer() {
  return (
    <footer id="contact">
      <div className="wrap">
        <h2>Contact</h2>
        <p className="lede">
          Open to senior full stack and AI platform engineering roles.
          The fastest way to reach me is email or LinkedIn.
        </p>
        <div className="foot-links">
          <a className="btn primary" href={`mailto:${profile.email}`}>Email me</a>
          <a className="btn" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className="btn" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
        <SeqMotif className="foot-seq" words={['idea', 'code', 'deploy']} />
        <p className="colophon">© {new Date().getFullYear()} {profile.name} · Built with React + Vite, hosted on GitHub Pages</p>
      </div>
    </footer>
  )
}
