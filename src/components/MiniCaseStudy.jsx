export default function MiniCaseStudy({ industry, problem, result, metric }) {
  return (
    <div className="mini-case">
      <span className="mini-case__tag">{industry}</span>
      <div className="mini-case__metric">{metric}</div>
      <p className="mini-case__problem">{problem}</p>
      <p className="mini-case__result">{result}</p>
    </div>
  )
}
