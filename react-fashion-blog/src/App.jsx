import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Copyright from "./components/Copyright";
import brooklyn from "./assets/blog-image-1.jpg";
import vogue from "./assets/blog-image-2.jpg";
import Continue from "./components/Continue";

function App() {
  return (
    <>
      <Header subtitle="Better-Dressed People" title="Sartre's List" />
      <Main
        date="11/11/20"
        description="On the Street in Brooklyn"
        src={brooklyn}
        article="Cray ipsum Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Vel enim consectetur numquam obcaecati, autem rem
        incidunt ducimus quisquam, perferendis reprehenderit cumque? Omnis natus
        porro quod praesentium ab cumque voluptatem modi dicta impedit ea facilis
        velit culpa, aliquam libero, voluptas dignissimos molestias quo officia
        voluptates laborum maxime excepturi nesciunt commodi magnam. Quia odit
        iure sequi porro placeat veniam. Eligendi expedita iure soluta blanditiis
        ex numquam rerum nemo, nihil velit harum praesentium perferendis"
      
      />
      <Continue continue="Continues..." />
      
      <Main
        date="11/12/20"
        description="Vintage in Vogue"
        src={vogue}
        article="Sray ipsum Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Vel enim consectetur numquam obcaecati, autem rem
        incidunt ducimus quisquam, perferendis reprehenderit cumque? Omnis natus
        porro quod praesentium ab cumque voluptatem modi dicta impedit ea facilis
        velit culpa, aliquam libero, voluptas dignissimos molestias quo officia
        voluptates laborum maxime excepturi nesciunt commodi magnam. Quia odit
        iure sequi porro placeat veniam. Eligendi expedita iure soluta blanditiis
        ex numquam rerum nemo, nihil velit harum praesentium perferendis"

      />
      <Continue continue="Continues" />
      

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
      />
      <Copyright copyright="&copy; 2013 Valet Industries Inc." />
    </>
  );
}

export default App;
