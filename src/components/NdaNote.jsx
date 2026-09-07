import "./NdaNote.css";

/**
 * Stated plainly, before the work rather than after it. A reader who is told
 * about the constraint up front reads the case studies differently from one
 * who works out halfway down that something is missing.
 */
export function NdaNote() {
  return (
    <section className="nda" aria-labelledby="nda-heading">
      <div className="wrap">
        <h2 id="nda-heading" className="nda__heading">
          Before you read the work
        </h2>
        <div className="nda__body">
          <p>
            Almost everything I have built in the last ten years sits behind enterprise healthcare
            NDAs. There are no client screenshots on this site and there won't be.
          </p>
          <p>
            What I can show you is the reasoning: the problem I walked into, the call I made, what
            that call cost, and where it landed. The numbers are the ones I can stand behind and
            explain in a room.
          </p>
        </div>
      </div>
    </section>
  );
}
