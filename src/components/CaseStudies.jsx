import { cases } from "../data/index.js";
import { Accordion } from './Accordion.jsx';
import "./CaseStudies.css";

function CaseStudy({ study, defaultOpen }) {
  return (
    <article className="case">
      <h3 className="case__title">{study.title}</h3>
      <p className="case__context">{study.context}</p>  
      <Accordion summary="Read the reasoning" defaultOpen={defaultOpen} className="case__accordion">
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
      </Accordion>
    </article>
  );
}

export function CaseStudies() {
  return (
    <section id="work" aria-labelledby="work-heading">
      <div className="wrap section-pad">
        <h2 id="work-heading">Two decisions worth explaining</h2>
        <div className="cases">
          {cases.map((study, index) => (
            <CaseStudy study={study} defaultOpen={index === 0} key={study.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
