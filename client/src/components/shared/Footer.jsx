import logo from "../../../images/exchange-rate.png";
const Footer = () => {
  return (
    <div className="w-full flex md:justify-center flex-col p-4 gradient-bg-footer">
      <div className="w-full flex sm:flex-row flex-col justify-between my-4">
       <div className="flex flex-[0.5] justify-center items-center">
       <img src={logo} alt="logo" className="w-16" />
       </div>
       <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
            <p className="text-white text-base text-center mx-2">Home</p>
            <p className="text-white text-base text-center mx-2">Exchange</p>
            <p className="text-white text-base text-center mx-2">Wallet</p>
       </div>
      </div>

      <div className="sm:w-[90%] w-11/12 mx-auto h-[0.25px] mt-5 bg-gray-400"/>
        <p className="text-white text-base text-center mt-1">Copyright © NexusLab IT 2023</p>
        <p className="text-white text-base text-center mt-1">All Rights Reserved</p>
    </div>
  );
};

export default Footer;
