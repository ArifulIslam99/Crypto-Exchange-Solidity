import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { contractAbi, contractAddress } from "../utils/constants";

export const TransactionContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(
    contractAddress,
    contractAbi,
    signer
  );

  return transactionContract;
};

// eslint-disable-next-line react/prop-types
export const TransactionsProvider = ({ children }) => {
  const [connectedAccount, setConnectedAccount] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [transactionCount, setTransactionCount] = useState(localStorage.getItem('transactionCount'));


  const [formData, setFormData] = useState({
    addressTo: "",
    amount: "",
    message: "",
  });

  const handleChange = (e, name) => {
    setFormData((prevState) => ({ ...prevState, [name]: e.target.value }));
  };


  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum) return alert("Metamask is not connected!");
      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length) {
        setConnectedAccount(accounts[0]);
      } else {
        console.log("No Accounts Found!");
      }
    } catch (error) {
      console.log(error);
      throw new error("No Ethereum Object!");
    }
  };

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Metamask is not connected!");
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setConnectedAccount(accounts);
    } catch (error) {
      console.log(error);
      throw new error("No Ethereum Object!");
    }
  };

  const sendTransaction = async () => {
    try {
      if (!ethereum) return alert("Metamask is not connected!");
      const { addressTo, amount, message } = formData;
      const transactionContract = getEthereumContract();
      const parsedAmount = ethers.utils.parseEther(amount);
    console.log(transactionContract)
      await ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: connectedAccount,
            to: addressTo,
            gas: "0x5208",
            value: parsedAmount._hex,
          },
        ],
      });

      const transactionhash = await transactionContract.addTOBlockchain(addressTo, parsedAmount, message);
      console.log(transactionhash)
      setIsLoading(true);
      console.log(`Loading --> ${transactionhash.hash}`)
      await transactionhash.wait();
      setIsLoading(false);
      console.log(`Success --> ${transactionhash.hash}`)
      
      const transactionCount = await transactionContract.getTransactionCount();
      setTransactionCount(transactionCount.toNumber());

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <TransactionContext.Provider
      value={{
        connectWallet,
        connectedAccount,
        formData,
        setFormData,
        handleChange,
        sendTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
