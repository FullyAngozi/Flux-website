import smile from "../assets/smile.png";
import smile2 from "../assets/smile2.png";
import smile3 from "../assets/smile3.png";
const Testimonial = () => {
  return (
    <div className=" flex text-white font-roboto">
      <div>
        <img src={smile} alt="" />
        <h3>olivia cole</h3>
        <p>
          Your NFT marketplace app has completely revolutionized the way I
          collect digital art. The ease of browsing, bidding, and owning unique
          digital creations is remarkable.
        </p>
      </div>
      <div>
        <img src={smile2} alt="" />
        <h3>Evan White</h3>
        <p>
          The user interface is intuitive, and it connects me with artists and
          collectors like never before. Plus, the built-in wallet and security
          features give me peace of mind. I highly recommend this app to anyone
          looking to dive into the world of NFTs
        </p>
      </div>
      <div>
        <img src={smile3} alt="" />
        <h3>Jessica Page</h3>
        <p>
          As someone concerned about the environmental impact of blockchain
          technology, I appreciate your app's commitment to eco-friendly
          practices. The awareness you've raised about blockchain networks with
          low energy consumption is commendable.
        </p>
      </div>
    </div>
  );
};

export default Testimonial;
