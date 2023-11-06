import smile from "../assets/smile.png";
import smile2 from "../assets/smile2.png";
import smile3 from "../assets/smile3.png";

const Testimonial = () => {
  return (
    <div className="">
      <div className=" text-center text-[#AAD9D9]">
        <span className=" font-outfit font-semibold text-2xl mt-5  ">Testimonials</span>
        <h1 className=" font-outfit font-bold text-4xl my-5">Read what others have to say</h1>
      </div>
      <div className="flex flex-col text-white font-roboto space-x-4 justify-between items-center gap-3 sm:flex-row">
        <div className="w-full max-w-sm bg-customcolor rounded-lg shadow-2xl p-4">
          <div className="flex flex-col items-center pb-10 text-center">
            <img src={smile} alt="Olivia image" className="w-40 rounded-full  " />
            <h5 className="mb-1 text-xl font-medium text-white font-outfit dark:text-white">
              Olivia Cole
            </h5>
            <div className="space-x-3 md:mt-6 font-roboto">
              <p className="lg:text-2xl">
                The user interface is intuitive, and it connects me with artists
                and collectors like never before. Plus, the built-in wallet and
                security features give me peace of mind. I highly recommend this
                app to anyone looking to dive into the world of NFTs.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full max-w-sm bg-customcolor rounded-lg shadow-2xl p-4">
          <div className="flex flex-col items-center pb-10 text-center">
            <img src={smile2} alt="Evan image" className="w-40" />
            <h5 className="mb-1 text-xl font-medium text-white font-outfit dark:text-white">
              Evan White
            </h5>
            <div className="space-x-3 md:mt-6 font-roboto">
              <p className="lg:text-2xl">
                The user interface is intuitive, and it connects me with artists
                and collectors like never before. Plus, the built-in wallet and
                security features give me peace of mind. I highly recommend this
                app to anyone looking to dive into the world of NFTs.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full max-w-sm bg-customcolor rounded-lg shadow-2xl p-4">
          <div className="flex flex-col items-center pb-10 text-center">
            <img src={smile3} alt="Bonnie image" className="w-40" />
            <h5 className="mb-1 text-xl font-medium text-white font-outfit dark:text-white">
              Bonnie Green
            </h5>
            <div className="space-x-3 md:mt-6 font-roboto">
              <p className="lg:text-2xl">
                As someone concerned about the environmental impact of blockchain
                technology, I appreciate your app&apos;s commitment to
                eco-friendly practices. The awareness you&apos;ve raised about
                blockchain networks with low energy consumption is commendable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
