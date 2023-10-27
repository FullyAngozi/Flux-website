import logo1 from "../assets/logo1.png"
import logo2 from "../assets/logo2.png"
import logo3 from "../assets/logo3.png"
import logo4 from "../assets/logo4.png"
const Featured = () => {
  return (
    <section className=" ">
      <h2 className=" text-white text-center font-outfit font-bold text-xl mb-3">Featured On</h2>
      <div className=" block p-7 bg-[#3B3487] w-full md:flex mx-aut0 md:items-center md:justify-between ">
        <img src={logo2} alt=""  className=" md:w-40  " />
        <img src={logo1} alt="" className=" md:w-40 " />
        <img src={logo3} alt="" className=" md:w-30 " />
        <img src={logo4} alt="" className=" md:w-40 " />
      </div>
    </section>
  );
};

export default Featured;
