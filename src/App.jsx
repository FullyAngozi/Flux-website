import Featured from "./scenes/Featured";
import Hero from "./scenes/Hero";
import MainNavbar from "./scenes/Navbar";

function App() {
  return (
    <>
      <div className=" bg-purple h-screen">
        <div className=" container p-6 mx-auto">
          <MainNavbar />
          <Hero />
          <Featured />
        </div>
      </div>
    </>
  );
}

export default App;
