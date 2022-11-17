import "./App.css";
import {
  AboutUs,
  Footer,
  Gallery,
  Love,
  MenuCards,
  Purchases,
  ToitIntro,
} from "./layouts";

function App() {
  return (
    <div>
      <ToitIntro />
      <MenuCards />
      <AboutUs />
      <Love />
      <Purchases />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
