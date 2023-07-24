import "./style.css";
import BrianImage from "../assets/images/self-portrait.JPG";

export default function About() {
  return (
    <>
      <h4 className="about">Meet The Developer</h4>
      <img src={BrianImage} alt="Brian Autieri" className="aboutImage" />
      <p className="paragraph">
        Brian is a web developer based in Venice Beach, California and is
        currently pursuing coding education at UCLA Extension. Originally from
        Florida, Brian fulfilled a lifelong dream to move to Southern California when he
        accepted a sales position at Tesla in Santa Monica.
      </p>
      <p className="paragraph">
        Since being a resident of Venice for the past six years, Brian has also
        worked at high-end, luxury spas, became a yoga instructor and obtained
        his California Real Estate License. He's never been afraid to dive into
        new challenges and that is especially true for software development.
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
        When Brian isn't working on school projects, you can find him
        skateboarding along the Venice Beach boardwalk, going on adventures with
        his girlfriend or eating a nutrious (and delicious) meal at Erewhon.
        Alternatively, you can also find him playing video games on his Nintendo
        Switch.
      </p>
    </>
  );
}
