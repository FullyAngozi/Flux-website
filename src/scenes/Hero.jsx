import heroImage from "../assets/Hero-image.png";

const Hero = () => {
  return (
    <section className=" text-white ">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold font-outfit tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Discover and Collect Rare NFTs
          </h1>
          <p className="max-w-2xl mb-6 font-light font-roboto text-white lg:mb-8 md:text-lg lg:text-xl">
            The most secure marketplace for buying and selling unique crypto
            assets.
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white bg-btnColor  rounded-full bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            BUY NFTs
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border-btnColor border-2 rounded-full hover:bg-btnColor focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Sell NFTs
          </a>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src={heroImage} alt="Banner" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
