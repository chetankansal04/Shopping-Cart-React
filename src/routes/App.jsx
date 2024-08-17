import "../assets/css/index.css";
import Header from "../assets/components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../assets/components/Footer";
import { Outlet } from "react-router";
import FetchItems from "../assets/components/FetchItems";
import LoadingSpinner from "../assets/components/LoadingSpinner";
import { useSelector } from "react-redux";

function App() {

  const fetchStatus = useSelector((store) => store.fetchStatus);

  return (
    <>
      <Header></Header>
      <FetchItems></FetchItems>
      {fetchStatus.currentlyFetching ? <LoadingSpinner/> : <Outlet/>}
      <Footer></Footer>
    </>
  );
}

export default App;
