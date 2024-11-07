import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <main className="card-wrapper">
      <Card
        src="/blog-card/images/illustration-article.svg"
        alt="Patterned Background"
        tag="Learning"
        published="Published 21 Dec 2023"
        title="HTML & CSS foundations"
        text="These languages are the backbone of every website, defining structure, content, and presentation."
        avatar="/blog-card/images/image-avatar.webp"
        name="Greg Hooper"
      />
    </main>
  );
}

export default App;
