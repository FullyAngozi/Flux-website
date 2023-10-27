import { Navbar } from "flowbite-react";

const MainNavbar = () => {
  return (
    <>
      <Navbar className=" bg-purple">
        <Navbar.Brand>
          <h1 className="mr-3 h-6 sm:h-9 font-outfit font-bold text-white ">
            Krypto
          </h1>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className=" text-white">
          <Navbar.Link className=" text-white" href="#">
            About
          </Navbar.Link>
          <Navbar.Link className=" text-white" href="#">
            Services
          </Navbar.Link>
          <Navbar.Link className=" text-white" href="#">
            Contact
          </Navbar.Link>
          <Navbar.Link className=" text-white" href="#">
            Buy NFT
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default MainNavbar;
