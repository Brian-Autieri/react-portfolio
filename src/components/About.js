import './style.css';
import BrianImage from '../assets/images/self-portrait.JPG';

export default function About() {
  return (
    <>
      <h4 className="about">Meet The Developer</h4>
      <img src={BrianImage} alt="Brian Autieri" className='aboutImage' />
      <p className="paragraph">
        Welcome to my portfolio! I'm a passionate web developer based in Venice
        Beach, California. Currently, I'm pursuing my web development education
        through the prestigious Coding Boot Camp at UCLA Extension. Originally
        from Florida, I fulfilled a lifelong dream to move to California when I
        accepted a sales position at Tesla in Santa Monica. However, my journey
        didn't stop there.
      </p>
      <p className="paragraph">
        During my time in Venice, I explored various avenues and discovered my
        passion for holistic well-being. I delved into the world of high-end
        luxury spas, where I worked as a Certified Massage Therapist.
        Additionally, I expanded my knowledge of the body by becoming a
        Registered Yoga Teacher, promoting physical and mental harmony. I even
        obtained my California Real Estate License, further broadening my skill
        set.
      </p>
      <p className="paragraph">
        My academic background revolves around business studies, which equipped
        me with a strong foundation. Now, I'm thrilled to embark on an exciting
        new chapter in web development. As I immerse myself in this field, I'm
        eager to create innovative digital experiences and contribute to the
        ever-evolving online landscape.
      </p>

      <p className="paragraph">
        When I'm not working on school projects, you can find me skateboarding
        along the Venice Beach boardwalk, going on adventures with my girlfriend
        or eating a nutrious (and delicious) meal at Erewhon. Alternatively, you
        can also find me playing video games on my Nintendo Switch.
      </p>
    </>
  );
}
