import { sectionMarginScroll } from "../lib/utils";

export default function Home() {
  return (
    <div className="text-left">
      <section id="" className={sectionMarginScroll}>
        <h1> Hello, Next.js! </h1>
      </section>
      <div className="h-296"></div>
      <section id="about" className={sectionMarginScroll}>
        <h1> About, Next.js! </h1>
      </section>
      <div className="h-296"></div>
      <section id="education" className={sectionMarginScroll}>
        <h1> Education, Next.js! </h1>
      </section>
      <div className="h-296"></div>
      <section id="experience" className={sectionMarginScroll}>
        <h1> Experience, Next.js! </h1>
      </section>
      <div className="h-296"></div>
      <section id="projects" className={sectionMarginScroll}><h1> Projects, Next.js! </h1></section>
      <div className="h-296"></div>
      <section id="contact" className={sectionMarginScroll}><h1> Contact, Next.js! </h1></section>
    </div>
  );
}
