import React, { useState } from "react";
import { ethers } from "ethers";

const Wallet = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState("");
  const [userBalance, setUserBalance] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const connectWallet = () => {
    if (window.ethereum) {
      setIsLoading(true);
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          accountChanged(result[0]);
        })
        .catch((error) => {
          setIsLoading(false);
          setErrorMessage("Failed to connect: " + error.message);
        });
    } else {
      setErrorMessage("Install MetaMask please");
    }
  };

  const accountChanged = (accountAddress) => {
    setDefaultAccount(accountAddress);
    getUserBalance(accountAddress);
  };

  const getUserBalance = (accountAddress) => {
    window.ethereum
      .request({ method: "eth_getBalance", params: [String(accountAddress), "latest"] })
      .then((balance) => {
        setUserBalance(ethers.utils.formatEther(balance));
        setIsLoading(false); // Clear loading indicator
      });
  };

  async function sendTransaction(e) {
    e.preventDefault();
    const toAddress = e.target.to_address.value;

    if (!window.ethereum || !defaultAccount) {
      setErrorMessage("Connect your wallet first.");
      return;
    }
    const params = {
      to: toAddress,
      value: ethers.utils.parseEther("0.001"), // 0.001 ETH, you can adjust this as needed
    };

    try {
      const result = await window.ethereum.request({
        method: "eth_sendTransaction",
        params,
      });

      console.log("Transaction sent with hash:", result);

      // You can add additional logic here, like showing a success message or updating the UI.
    } catch (error) {
      console.error("Transaction failed:", error);
      setErrorMessage("Transaction failed: " + error.message);
    }
  }

  async function productPicker(e) {
    e.preventDefault();
    let sales_value;

    if (e.target.product_form.value === "product1") {
      sales_value = ethers.utils.parseEther("0.001"); // Adjust the value for product1
    } else if (e.target.product_form.value === "product2") {
      sales_value = ethers.utils.parseEther("0.002"); // Adjust the value for product2
    } else if (e.target.product_form.value === "product3") {
      sales_value = ethers.utils.parseEther("0.003"); // Adjust the value for product3
    } else {
      setErrorMessage("Invalid product selection.");
      return;
    }

    const params = {
      to: "YOUR_RECEIVING_ADDRESS_HERE", // Replace with the actual receiving address
      value: sales_value,
    };

    try {
      const result = await window.ethereum.request({
        method: "eth_sendTransaction",
        params,
      });

      console.log("Transaction sent with hash:", result);

      // You can add additional logic here, like showing a success message or updating the UI.
    } catch (error) {
      console.error("Transaction failed:", error);
      setErrorMessage("Transaction failed: " + error.message);
    }
  }

  return (
    <div>
      <center>
        <h1>MetaMask Wallet Connection</h1>
        <button onClick={connectWallet} disabled={isLoading}>
          {isLoading ? "Connecting..." : "Connect Wallet"}
        </button>
        <h3>Address: {defaultAccount}</h3>
        <h3>Balance: {userBalance} ETH</h3>

        <form onSubmit={sendTransaction}>
          <h3>Enter Transaction Address: </h3>
          <input type="text" name="to_address" placeholder="Address" />
          <input type="submit" value="Submit" />
        </form>

        <hr></hr>

        <form onSubmit={productPicker}>
          <label>Pick Your Product: </label>
          <select name="product_form">
            <option value="product1">Product 1</option>
            <option value="product2">Product 2</option>
            <option value="product3">Product 3</option>
          </select>
          <input type="submit" value="Submit" />
        </form>

        {errorMessage && <p>Error: {errorMessage}</p>}
      </center>
    </div>
  );
};

export default Wallet;
