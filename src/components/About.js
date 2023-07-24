import "./style.css";
import BrianImage from "../assets/images/self-portrait.JPG";

export default function About() {
  return (
    <>
      <h4 className="about">Meet The Developer</h4>
      <img src={BrianImage} alt="Brian Autieri" className="aboutImage" />
      <p className="paragraph">
        In progress
      </p>
      <p className="paragraph">
        Brian was working at a luxury, Tulum-inspired wellness center on the
        world famous Abbot Kinney Boulevard where he found himself ready to
        discover his new passion. It was here where he would find and begin this
        new journey.
      </p>
      <p className="paragraph">
        <em>The Universe doesn’t speak to you loudly, but with a whisper.</em>
      </p>
      <p className="paragraph">
        Brian was going about another seemingly ordinary day at work but little
        did he know his life was about to change. A conversation started with
        someone who had similar interests - he loved Southern California,
        skateboarding and he was even from Florida, too. Very casually he said,
        “I’m a Web Developer and maybe it could be something you check out.”
        Fast forward 3 months, Brian began his studies at the UCLA Extension
        Coding Boot Camp … and the rest, as they say, is history.
      </p>

      <p className="paragraph3">
        Brian Autieri pulls from his love for adventure, luxury, craftsmanship
        and attention to detail into each project he builds. This Journey and
        every step along the way helped to create these projects you now see, an
        expression of the Brian’s lifestyle and creativity that is always
        evolving.
      </p>
    </>
  );
}
