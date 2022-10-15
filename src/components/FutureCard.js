import "./FutureCard.css";

function FutureCard({ img, title, desc }) {
  return (
    <div class="futurecard">
      <div className="futurecard-img">
        <img src={img}></img>
      </div>
      <div className="futurecard-title">
        <p>{title}</p>
      </div>
      <div className="futurecard-desc">
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default FutureCard;
