import "./Features.css";
import FutureCard from "./FutureCard";
import img1 from "../img/artificial-intelligence-svgrepo-com 1.svg";
import img2 from "../img/Group.svg";
import img3 from "../img/Vector-feat.svg";
import img4 from "../img/direct-customer-svgrepo-com 1.svg";
import img5 from "../img/Vector-feat-man.svg";
function Features() {
  const cards = [
    {
      id: 0,
      img: img1,
      title: "MakeAI-assisted Content Choices",
      desc: "Access and Order from an extensive catalogue in any language and on your budget’s terms. If unsure, our AI guides you to the best.",
    },
    {
      id: 1,
      img: img2,
      title: "Upload and Maintain your Brand Identity",
      desc: "Add your preferences and brand assets to ensure the contents is consistent with your brand identity. No brand asset? We can make for you!",
    },
    {
      id: 2,
      img: img3,
      title: "Be informed as we create",
      desc: "Your details are translated and sent to the AI, FP, or both (per your choice) as you relax and receive continuous updates.",
    },
    {
      id: 3,
      img: img4,
      title: "Receive and Review",
      desc: "The finished content is delivered and you can make corrections that we will effect to satisfy your requirements.",
    },
    {
      id: 4,
      img: img5,
      title: "Publish and Monitor your contents’ progress",
      desc: "The finished content is delivered and you can make corrections that we will effect to satisfy your requirements.",
    },
  ];
  return (
    <div class="features">
      <div class="features-up">
        <p class="features-up-video-title">EXPLAINER VIDEO</p>
        <div class="features-up-video">
          <iframe
            width="737"
            height="415"
            src="https://www.youtube.com/embed/u1wprFtkMLg"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div class="features-down">
        {cards.map((item) => (
          <FutureCard
            img={item.img}
            title={item.title}
            desc={item.desc}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Features;
