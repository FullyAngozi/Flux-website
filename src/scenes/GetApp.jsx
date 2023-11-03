import phoneImage from "../assets/phone-image.png";

const GetApp = () => {
  return (
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
      <div className="mr-auto place-self-center lg:col-span-7">
        <h1 className="max-w-2xl mb-4 text-2xl font-bold font-outfit tracking-tight leading-none md:text-2xl xl:text-2xl text-white ">
          get our app{" "}
        </h1>
        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold font-outfit tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
          browse nfts from your smartphone
        </h1>
        <p className="max-w-2xl mb-6 font-light font-roboto text-white lg:mb-8 md:text-lg lg:text-xl">
          Our Krypto app is the easiest way to keep track of your assets when
          you’re on the go.
        </p>
        <a
          href="#"
          className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border-btnColor border-2 rounded-full hover:bg-btnColor focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        >
          Download on ios
        </a>
      </div>
      <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
        <img src={phoneImage} alt="Banner" />
      </div>
    </div>
  );
};

export default GetApp;
