import Header from "./components/Header";
import Footer from "./components/Footer";
import Article from "./components/Article";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Header subtitle="Better-Dressed People" title="Sartre's List" />
      <Nav
        nav={
          <ul className="nav">
            <a href="#">
              <li>Women's</li>
            </a>
            <a href="#">
              <li>Men's</li>
            </a>
            <a href="#">
              <li>On the Street</li>
            </a>
            <a href="#">
              <li>The Catwalk</li>
            </a>
            <a href="#">
              <li>AdWatch</li>
            </a>
            <a href="#">
              <li>About</li>
            </a>
          </ul>
        }
      />
      <Article />
      

      <Footer
        footer={
          <ul className="footer list">
            <a href="#">
              <li>Home</li>
            </a>
            <a href="#">
              <li>Women's</li>
            </a>
            <a href="#">
              <li>Men's</li>
            </a>
            <a href="#">
              <li>On the Street</li>
            </a>
            <a href="#">
              <li>The Catwalk</li>
            </a>
            <a href="#">
              <li>AdWatch</li>
            </a>
            <a href="#">
              <li>About</li>
            </a>
            <a href="#">
              <li>Tips</li>
            </a>
          </ul>
        }
        copyright="&copy; 2013 Valet Industries Inc." 
      />
      
    </>
  );
}

export default App;
