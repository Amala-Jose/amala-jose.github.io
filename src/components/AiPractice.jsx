import { Accordion } from "./Accordion.jsx";
import "./AiPractice.css";

/**
 * PLACEHOLDER PROSE.
 *
 * The shape of this section is right, but the account is not yet Amala's own.
 * Rewrite it in her words with a real example before publishing. It is the
 * section most likely to ring hollow if it stays generic.
 */
export function AiPractice() {
  return (
    <section aria-labelledby="ai-heading">
      <div className="wrap section-pad">
        <h2 id="ai-heading">Where AI actually sits in my week</h2>
        <div className="prose">
          <p>
            Cursor and Claude are in my daily loop, and I would rather describe how than list them as
            skills.
          </p>

          <Accordion summary="How, specifically" className="ai-accordion">
            <p>
              They are good at the mechanical parts: scaffolding a component, writing the first pass of
              tests, propagating a pattern across forty files, reading an unfamiliar module faster than
              I can. That work used to eat afternoons and now it does not.
            </p>
            <p>
              What I do not hand over is the shape of the code. A model will happily give me a well
              written version of the wrong structure, and it is confident either way. The recurring one
              is state, where suggestions tend toward local convenience over something the next person
              can maintain. So I settle the structure first, then use the tooling inside it.
            </p>
            <p>
              The part I am careful about with the engineers I mentor is review. Generated code that
              looks finished gets read less carefully than code someone struggled with, and that is
              where the defects live now.
            </p>
          </Accordion>
        </div>
      </div>
    </section>
  );
}