import { profile } from '../data.js'
import SeqMotif from './SeqMotif.jsx'

// Renders "before {accent} after" with the braced part in teal
function Headline({ text }) {
  const match = text.match(/^(.*)\{(.*)\}(.*)$/s)
  if (!match) return <h1>{text}</h1>
  const [, before, accent, after] = match
  return (
    <h1>
      {before}<span className="accent">{accent}</span>{after}
    </h1>
  )
}

export default function Hero() {
  return (
    <header>
      <div className="wrap">
        <p className="eyebrow">{profile.eyebrow}</p>
        <Headline text={profile.headline} />
        <p className="lede">{profile.lede}</p>
        <div className="hero-links">
          <a className="btn primary" href="#projects">View projects</a>
          <a className="btn" href="#contact">Get in touch</a>
        </div>
        <SeqMotif className="hero-seq" suffix="enterprise software, one release at a time" />
      </div>
    </header>
  )
}
