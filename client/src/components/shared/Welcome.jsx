import React, {useContext} from "react";
import {AiFillPayCircle} from "react-icons/ai"
import {SiEthereum} from "react-icons/si"
// eslint-disable-next-line no-unused-vars
import {BsInfoCircle} from "react-icons/bs"
import Loader from "../shared/Loader";
import { useState } from "react";
import { TransactionContext } from "../../context/TransactionContext";
// eslint-disable-next-line react/prop-types
const Input = ({placeholder, name, type, value, handleChange}) => (
    <input
     placeholder={placeholder}
     type={type}
     step="0.001"
     value={value}
     onChange={(e)=> handleChange(e, name)}
     className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
     />
)

const Welcome = () => {
    const [isLoading, setIsLoading] = useState(false);
    const {connectWallet, connectedAccount, handleChange, formData, sendTransaction} = useContext(TransactionContext);
    
    const handleSubmit = (e) => {
        const { addressTo, amount, message } = formData;
    
        e.preventDefault();
        if (!addressTo || !amount || !message) return;
        sendTransaction();
      };
    return (
        <div className="grid mf:grid-cols-2 sm:grid-cols-1  justify-center items-center w-11/12 mx-auto">
            <div className="flex mf:flex-row items-start justify-between md:p-20 py-4 my-12 px-4">
                <div className="flex flex-1 justify-start flex-col mf:mr-10">
                    <h1 className="text-3xl sm:text-5xl text-white text-gradient py-2">
                        Send Your Digital Wallets <br /> 
                        Around The World <br />
                        With Transaxt!
                    </h1>
                    <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">Send and Exchange Crypto Easier Than Ever</p>
                    { !connectedAccount && <button
                    className="flex md:w-2/5 sm:w-48 flex-row justify-center itemscenter my-5 bg-[#5F615A] p-3 rounded-full cursor-pointer hover:bg-[#4F4D20]"
                    onClick={connectWallet}
                    ><span className="text-bold text-white text-base">Connet Wallet</span></button>}
                </div>
            </div>
            <div className="flex flex-col  items-center justify-start w-11/12 mf:mt-0 my-4 mx-auto">
               
                <div className="p-5 sm:w-96 w-full flex flex-col items-center blue-glassmorphism">
                    
                    <div className="flex flex-row justify-center items-center white-glassmorphism p-2">
                    { connectedAccount? <SiEthereum fontSize={25} color="green"/> : 
                    <SiEthereum fontSize={25} color="red"/>
                    }
               

                    { connectedAccount && <p className="text-white font-light text-sm">
                            {connectedAccount.slice(0,30)}...
                        </p>}
                    </div>
                    <Input placeholder="Reciever Address"
                     name="addressTo" type="text"
                     handleChange={handleChange}
                     />
                     <Input placeholder="Amount in ETH"
                     name="amount" type="number"
                     handleChange={handleChange}
                     />
                     <Input placeholder="Message"
                     name="message" type="text"
                     handleChange={handleChange}
                     />
                     <div className="h-[1px] w-full bg-gray-400 my-2"/>

                     {
                        isLoading ? (<Loader/>) :
                        <button
                        type="button"
                        onClick={handleSubmit}
                        className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4fc] rounded-full cursor-pointer"
                        >Send Now</button>
                     }
                </div>
            </div>
        </div>
    );
};

export default Welcome;