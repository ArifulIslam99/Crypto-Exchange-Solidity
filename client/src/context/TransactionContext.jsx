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

  console.log({
    provider,
    signer,
    transactionContract,
  });
};

export const TransactionsProvider = ({ children }) => {
  const [connectedAccount, setConnectedAccount] = useState();

  const checkIfWalletIsConnected = async () => {
    try {
        if (!ethereum) return alert("Metamask is not connected!");
    const accounts = await ethereum.request({ method: "eth_accounts" });

    if (accounts.length) {
        setConnectedAccount(accounts[0]);
    }
    else{
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

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);
  return (
    <TransactionContext.Provider value={{ connectWallet, connectedAccount }}>
      {children}
    </TransactionContext.Provider>
  );
};
