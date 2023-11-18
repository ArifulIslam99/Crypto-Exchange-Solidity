import React, {useContext} from "react";
import {TransactionContext} from '../../context/TransactionContext'
import dummyData from '../../utils/dummyData'

const Transactions = () => {
// eslint-disable-next-line react/prop-types
const TransactionCard = ({addressTo, addressFrom, amount, timestamp, message}) =>{
return (<div className="bg-[#181918]
 m-4 flex flex1 flex-col p-3 rounded-md hover:shadow-2xl
 2xl:min-w-[450px]
 2xl:max-w-[500px]
 sm:min-w-[250px]
 sm:max-w-[300px]
 min-w-full
 ">
<div className="flex flex-col items-center justify-center mx-auto w-full mt-3">
<div className="bg-black p-3 px-5 w-max rounded-xl items-center justify-center shadow-2xl">
          <p className="text-[#37c7da] font-bold">{timestamp}</p>
        </div>
    <div className=" w-full mb-6 p-2">
    <div  className="p-3 px-5 my-2 w-max rounded-xl  shadow-2xl  white-glassmorphism">
    <p className="text-white text-base">Amount: {amount} Eth</p>
    </div>
        <div  className="p-3 px-5 my-2 w-max rounded-xl  shadow-2xl  white-glassmorphism">
        <a href={`https://sepolia.etherscan.io/address/${addressFrom}`} target="_blank" rel="noreferrer">
        <p className="text-white text-base">From: {addressFrom.slice(0,10) + '...' + addressFrom.slice(addressFrom.length - 5)} </p>
        </a>

        </div>
        <div  className="p-3 px-5 my-2 w-max rounded-xl  shadow-2xl  white-glassmorphism">
        <a href={`https://sepolia.etherscan.io/address/${addressTo}`} target="_blank" rel="noreferrer">
        <p className="text-white text-base">To: { addressTo.slice(0,10) + '...' + addressFrom.slice(addressTo.length - 5)} </p>
        </a>
        </div>
        

    
      
  {message && (
    <div className="bg-black p-3 px-5 my-2 w-max rounded-3xl  shadow-2xl">
        <br />
        <p className="text-white text-base ">Message: {message} Eth</p>
    </div>
  )}


    </div>
</div>
</div>)
}

    const {connectedAccount} = useContext(TransactionContext);
    return (
        <div className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions">
      <div className="flex flex-col md:p-12 py-12 px-4">
        {connectedAccount ? (
          <h3 className="text-white text-3xl text-center my-2">
            Latest Transactions
          </h3>
        ) : (
          <h3 className="text-white text-3xl text-center my-2">
            Connect your account to see the latest transactions
          </h3>
        )}

        <div className="flex flex-wrap justify-center items-center mt-10">
          {dummyData.reverse().map((transaction, i) => (
            <TransactionCard key={i} {...transaction}/>
          ))}
        </div>
      </div>
    </div>
    );
};

export default Transactions;