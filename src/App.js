import "./index.css";
import Header from "./components/Header/Header";
import Discover from "./components/Discover/Discover";
import Footer from "./components/Footer/Footer";
import TrendingProjects from "./components/TrendingProjects/TrendingProjects";
import SponsorsSection from "./components/SponsorsSection/SponsorsSection";
import ExploreCollection from "./components/ExploreCollection/ExploreCollection";
import ProjectAmmenities from "./components/ProjectAmmenities/ProjectAmmenities";
import FeatureProjects from "./components/FeatureProjects/FeatureProjects";
import ProjectHighlights from "./components/ProjectHighlights/ProjectHighlights";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Discover />
      <TrendingProjects />
      <SponsorsSection />
      <ExploreCollection />
      <ProjectAmmenities />
      <FeatureProjects />
      <ProjectHighlights />
      <Footer />
    </div>
  );
}
