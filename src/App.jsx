import Analytics from "./scenes/Analytics";
import CallToAction from "./scenes/CallToAction";
import Featured from "./scenes/Featured";
import GetApp from "./scenes/GetApp";
import Hero from "./scenes/Hero";
import MainNavbar from "./scenes/Navbar";
import Testimonial from "./scenes/Testimonial";
import Footer from "./scenes/Footer";

function App() {
  return (
    <>
      <div className=" bg-purple min-h-screen">
        <div className=" container p-6 mx-auto h-full">
          <MainNavbar />
          <Hero />
          <Featured />
          <Analytics />
          <GetApp />
          <Testimonial />
          <CallToAction />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
