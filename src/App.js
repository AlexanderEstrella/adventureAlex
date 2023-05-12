import "./App.css";
import Header from "./Components/header";
import Home from "./Components/home";
import Adventures from "./Components/adventures";
import Frontdetails from "./Components/frontdetails";
import Footer from "./Components/footer";
import "@fortawesome/fontawesome-svg-core/styles.css";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Frontdetails />
      <Adventures />
      <Footer />
    </div>
  );
}

export default App;
