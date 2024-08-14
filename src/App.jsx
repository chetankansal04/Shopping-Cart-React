import "./App.css";
import Header from "./assets/components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "./assets/components/banner";
import Deals from "./assets/components/Deals";
import Categories from "./assets/components/Categories";
import Footer from "./assets/components/Footer";

function App() {
  return (
    <>
      <header>
        <Header></Header>
      </header>
      <main>
        <Banner/>
        <Deals/>
        <Categories></Categories>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
}

export default App;
