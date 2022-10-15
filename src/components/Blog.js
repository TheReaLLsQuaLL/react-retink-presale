import "./Blog.css";
import BlogCard from "./BlogCard";
const blogCard = [
  {
    id: 0,
    img: "https://cdn.logo.com/hotlink-ok/logo-social.png",
    titel: "Logos",
    desc: "Have a unique & creative logo designed to express and represent your brand identity.",
  },
  {
    id: 1,
    img: "https://cdn.thewirecutter.com/wp-content/uploads/2020/04/laptops-lowres-2x1-.jpg?auto=webp&quality=75&crop=2:1&width=1024",
    titel: "Blog Writing",
    desc: "Write SEO enriched blog posts as long or short articles on any topic of your choice.",
  },
  {
    id: 2,
    img: "https://www.lipscomb.edu/sites/default/files/images-news-articles/2022-03/Animation_thumb.jpg",
    titel: "Animated Videos",
    desc: "Bring animated characters to life to keep your viewers engaged and  entertained.",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    titel: "Product Demo",
    desc: "Introduce your product to potential customers in a clear and creative video.",
  },
  {
    id: 4,
    img: "https://www.at-languagesolutions.com/en/wp-content/uploads/2020/11/Copywriting.jpg",
    titel: "Copywriting",
    desc: "Have creative and compelling copies written to boost your product, brand, service or company.",
  },
  {
    id: 5,
    img: "https://cdn.searchenginejournal.com/wp-content/uploads/2021/09/16-reasons-why-social-media-is-important-to-your-company-616d3200e6dc6-sej.png",
    titel: "Social Media Ads",
    desc: "Boost sales and awareness with tailor made ads from experts.",
  },
];

function Blog() {
  return (
    <div class="blog">
      <div class="blog-top">
        <ol class="blog-top-ordered">
          <li class="blog-top-ordered-first">
            <p>Transform your Creation Process</p>
            With a new approach toordering content, you can now stop juggling
            multiple documents and meetings and start publishing content faster
            and on demand
          </li>
          <li class="blog-top-ordered-second">
            <p>Activate your business growth with RetinkContent.</p>
            Save time and maintain your brand identity within your budget range
            or sign up for affordable plans and still access multiple content
            services like:
          </li>
        </ol>
      </div>
      <div class="blog-bot">
        {blogCard.map((item) => (
          <BlogCard
            img={item.img}
            titel={item.titel}
            desc={item.desc}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Blog;
