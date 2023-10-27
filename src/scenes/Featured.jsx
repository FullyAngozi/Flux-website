
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";

const imageSources = [logo1, logo2, logo3, logo4];

const Featured = () => {
  return (
    <section>
      <h1 className="text-white text-center font-outfit font-bold text-3xl mb-3">
        Featured On
      </h1>
      <div className="flex flex-col items-center p-4 bg-[#3B3487] rounded-md shadow-md sm:flex-row sm:items-center sm:justify-between sm:p-6 ">
        {imageSources.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Image ${index + 1}`}
            className="mb-5 mt-3 w-40 sm:w-30"
          />
        ))}
      </div>
    </section>
  );
};

export default Featured;
