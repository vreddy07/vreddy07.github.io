// Signature motif — a pipeline strip in mono type
export default function SeqMotif({ words = ['build', 'test', 'ship', 'observe'], suffix, className = '' }) {
  return (
    <p className={`seq ${className}`} aria-hidden="true">
      {words.map((w, i) => (
        <span key={i}>
          {w}
          {i < words.length - 1 && <span className="dim"> → </span>}
        </span>
      ))}
      {suffix && <span className="dim"> — {suffix}</span>}
    </p>
  )
}
