import './Section.css';
import Card from "../Card/Card";

const cardData = [
  {
    title: "Introduction to React",
    image: "https://miro.medium.com/v2/resize:fit:1400/1*MF5V_dkybUTcfzwHFh0VSw.jpeg",
  },
  {
    title: "React Components",
    image: "https://cdn.sanity.io/images/tlr8oxjg/production/2df8638e709b31e67768e848c1b38b83bad4df41-1456x816.png?w=3840&q=80&fit=clip&auto=format",
  },
  {
    title: "State and Props",
    image: "https://ik.imagekit.io/ably/ghost/prod/2023/11/best-react-component-libraries.png?tr=w-1728,q-50",
  },
  {
    title: "React Lifecycle",
    image: "https://bs-uploads.toptal.io/blackfish-uploads/components/seo/5992700/og_image/optimized/1005_Design-Patterns-in-React_Cover-9181bdf0d728b73804e11b6344434b0c.png",
  },
];

function Section1() {
  return (
    <section id="section1">
      <h1 id="section-title">React Concepts</h1>
      <div id="card-container">
        {cardData.map((card, index) => (
          <Card key={index} title={card.title} image={card.image} />
        ))}
      </div>
    </section>
  );
}

export default Section1;
