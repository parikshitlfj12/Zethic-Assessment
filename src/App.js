import "./index.css";
import Header from "./components/Header/Header";
import Discover from "./components/Discover/Discover";
import Footer from "./components/Footer/Footer"
 
export default function App() {
  return (
    <div className="App">
      <Header />
      <Discover />
      <Footer />
    </div>
  );
}
