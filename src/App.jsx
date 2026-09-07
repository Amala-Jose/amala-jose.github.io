import {
  GridLayer,
  Masthead,
  Hero,
  ProofStrip,
  NdaNote,
  CaseStudies,
  Lab,
  AiPractice,
  Arc,
  Skills,
  Contact,
  Footer,
} from "./components/index.js";

import { usePointerGrid } from "./hooks/usePointerGrid.js";
import { useStuck } from "./hooks/useStuck.js";

/**
 * Page composition.
 *
 * The order is deliberate and is the argument the site makes: evidence, then
 * the constraint that shapes it, then reasoning, then open code, then history.
 * A reader who stops after the proof strip has still got the point.
 */
export default function App() {
  const gridEnabled = usePointerGrid();
  const [sentinelRef, isStuck] = useStuck();

  return (
    <>
      <GridLayer enabled={gridEnabled} />

      <a className="skip-link" href="#main">
        Skip to content
      </a>

      {/* Watched by useStuck to tell when the masthead has stuck. */}
      <div ref={sentinelRef} aria-hidden="true" />

      <Masthead isStuck={isStuck} />

      <main id="main">
        <Hero />
        <ProofStrip />
        <NdaNote />
        <CaseStudies />
        <Lab />
        <AiPractice />
        <Arc />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
