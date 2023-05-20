import Navbar from "../Components/Navbar";
import Adventures from "../Components/adventures";
import Frontdetails from "../Components/frontdetails";
import Footer from "../Components/footer";
import Landing from "../Components/landing";
import "@fortawesome/fontawesome-svg-core/styles.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Landing />
      <Frontdetails />
      <Adventures />
    </div>
  );
};

export default Home;
