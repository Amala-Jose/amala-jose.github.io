import { Actions } from "./Actions.jsx";
import { Eras } from "./Eras.jsx";
import { profile } from "../data/index.js";
import "./Hero.css";

export function Hero() {
  return (
    <div className="wrap hero">
      <h1 className="hero__headline reveal reveal-1">{profile.headline}</h1>

      <p className="hero__intro reveal reveal-2">{profile.intro}</p>

      <div className="hero__actions reveal reveal-3">
        <Actions size="lg" />
      </div>

      <div className="reveal reveal-4">
        <Eras />
      </div>
    </div>
  );
}
