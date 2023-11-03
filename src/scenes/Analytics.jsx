import Aimage from "../assets/analyatics-image.png";
const Analytics = () => {
  return (
    <div className="h-full text-white">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="flex flex-col lg:flex-row">
          <div className="mr-auto">
            <img src={Aimage} alt="" className="hidden max-w-full md:inline-block " />
          </div>
          <div className="mr-auto lg:ml-8">
            <h1 className=" text-2xl font-outfit font-bold">Analytics</h1>
            <h2 className="max-w-2xl mb-4 text-4xl font-extrabold font-outfit tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              built-in analytics to track your nfts
            </h2>
            <p className="max-w-2xl mb-6 font-light font-roboto text-white lg:mb-8 md:text-lg lg:text-xl">
              Use our built-in analytics dashboard to pull valuable insights and monitor the value of your Krypto portfolio over time.
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white bg-btnColor rounded-full bg-primary-700 hover:bg-white hover:text-purple focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              view our pricing
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
