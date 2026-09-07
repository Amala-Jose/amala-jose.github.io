import { cases } from "../data/index.js";
import "./CaseStudies.css";

function CaseStudy({ study }) {
  return (
    <article className="case">
      <h3 className="case__title">{study.title}</h3>
      <p className="case__context">{study.context}</p>

      <dl className="case__parts">
        {study.parts.map((part) => (
          <div className="case__part" key={part.term}>
            <dt>{part.term}</dt>
            <dd>
              {part.outcome ? <span className="case__outcome">{part.outcome}</span> : null}
              {part.body}
            </dd>
          </div>
        ))}
      </dl>
    </article>
  );
}

export function CaseStudies() {
  return (
    <section aria-labelledby="work-heading">
      <div className="wrap section-pad">
        <h2 id="work-heading">Two decisions worth explaining</h2>
        <div className="cases">
          {cases.map((study) => (
            <CaseStudy study={study} key={study.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
