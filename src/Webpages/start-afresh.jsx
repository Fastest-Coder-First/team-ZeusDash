import React, { useState, useEffect } from "react";
import Web3 from "web3";
import TransactionManagerContract from "../ABI/TransactionManager.json";
import Navbar from "../javascripts/Navbar";

const App = () => {
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [transactionId, setTransactionId] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [transactions, setTransactions] = useState([]);

  const contractAddress = "0xB5AE5d8E33D3C6291E40053C4089e1fbc3749155";

  useEffect(() => {
    const initialize = async () => {
      // Check if web3 is injected by the browser (Mist/MetaMask)
      if (typeof window.ethereum !== 'undefined') {
        try {
          // Request account access
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          const web3 = new Web3(window.ethereum);
          setWeb3(web3);

          // Get the user's accounts
          const accounts = await web3.eth.getAccounts();
          setAccounts(accounts);

          // Get the contract instance
          const contract = new web3.eth.Contract(TransactionManagerContract, contractAddress);
          setContract(contract);

          // Fetch existing transactions
          const transactionCount = await contract.methods.getTransactionCount().call();
          const fetchedTransactions = [];

          for (let i = 1; i <= transactionCount; i++) {
            const transaction = await contract.methods.transactions(i).call();
            fetchedTransactions.push(transaction);
          }

          setTransactions(fetchedTransactions);

        } catch (error) {
          console.error('Error initializing Web3:', error);
          alert('An error occurred while initializing Web3. Please make sure you have MetaMask installed and try again.');
        }
      } else {
        console.log('Please install MetaMask!');
      }
    };

    initialize();
  }, []);

  const handleAddTransaction = async () => {
    try {
      await contract.methods.addTransaction(description, amount).send({ from: accounts[0] });
      console.log("Transaction added successfully!");
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateTransaction = async () => {
    try {
      await contract.methods.updateTransaction(Number(transactionId), description, amount).send({ from: accounts[0] });
      console.log("Transaction updated successfully!");
    } catch (error) {
      console.error(error);
    }
  };

  const handleRemoveTransaction = async () => {
    try {
      if (!transactionId) {
        console.error("Transaction ID is required.");
        return;
      }
      await contract.methods.removeTransaction(Number(transactionId)).send({ from: accounts[0] });
      console.log("Transaction removed successfully!");
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Navbar></Navbar>

      <h2 style={{ color:"#FFF",marginTop:"3vh"}}>Transaction Manager</h2>

      <div style={{ marginTop: "2rem", marginBottom: "2rem", width: "80%", backgroundColor: "#fff", borderRadius: "8px", padding: "1rem" }}>
        <h2 style={{ color:"#FFF", marginBottom: "0.5rem" }}>Transactions</h2>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ padding: "0.5rem 1rem", borderBottom: "1px solid #333" }}>ID</th>
              <th style={{ padding: "0.5rem 1rem", borderBottom: "1px solid #333" }}>Description</th>
              <th style={{ padding: "0.5rem 1rem", borderBottom: "1px solid #333" }}>Amount</th>
              <th style={{ padding: "0.5rem 1rem", borderBottom: "1px solid #333" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td style={{ padding: "0.5rem 1rem", borderBottom: "1px solid #ccc" }}>{transaction.id}</td>
                <td style={{ padding: "0.5rem 1rem", borderBottom: "1px solid #ccc" }}>{transaction.description}</td>
                <td style={{ padding: "0.5rem 1rem", borderBottom: "1px solid #ccc" }}>{transaction.amount}</td>
                <td style={{ padding: "0.5rem 1rem", borderBottom: "1px solid #ccc" }}>
                  <button style={{ marginRight: "0.5rem", backgroundColor: "#007bff", color: "#fff", border: "none", cursor: "pointer", padding: "0.5rem 1rem" }} onClick={() => handleUpdateTransaction(transaction.id)}>Update</button>
                  <button style={{ backgroundColor: "#dc3545", color: "#fff", border: "none", cursor: "pointer", padding: "0.5rem 1rem" }} onClick={() => handleRemoveTransaction("0")}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div style={{ marginTop: "1rem" }}>
        <h3 style={{ marginBottom: "0.5rem", color: "#FFF" }}>Add Transaction</h3>
        <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} style={{ marginRight: "0.5rem" }} />
        <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} style={{ marginRight: "0.5rem" }} />
        <button style={{ backgroundColor: "#28a745", color: "#fff", border: "none", cursor: "pointer", padding: "0.5rem 1rem" }} onClick={handleAddTransaction}>Add</button>
      </div>
    </div>
  );
};

export default App;
