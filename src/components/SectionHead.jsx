export default function SectionHead({ index, title }) {
  return (
    <div className="sec-head">
      <span className="seq" aria-hidden="true">{index}</span>
      <h2>{title}</h2>
    </div>
  )
}
