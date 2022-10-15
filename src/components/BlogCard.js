import "./BlogCard.css";
function BlogCard({ img, titel, desc }) {
  return (
    <div className="blogcard">
      <div className="blogcard-img">
        <img src={img}></img>
      </div>
      <div className="blogcard-title">
        <p>{titel}</p>
      </div>
      <div className="blogcard-desc">
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default BlogCard;
