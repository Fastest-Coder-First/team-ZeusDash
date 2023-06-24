import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import personalFinanceTrackerABI from "./ABI/personalFinanceTrackerABI.json"
import { Modal } from 'react-bootstrap';
import Web3 from 'web3';
import 'bootstrap/dist/css/bootstrap.min.css';

const contractAddress = "0x1eC129C10701FE2245F8f4fb60f5192161DeCac8";


function SignIn() {
    const navigate = useNavigate();
    const [web3, setWeb3] = useState(null);
    const [accounts, setAccounts] = useState([]);
    const [contract, setContract] = useState(null);
    const [username, setUsername] = useState('');
    const [personalId, setPersonalId] = useState('');
    const [walletId, setWalletId] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [showLoginModal,setShowLoginModal] =useState(false);

    const handleShowLoginModal = () => {
        setShowLoginModal(false);
       };
 
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
               const contract = new web3.eth.Contract(personalFinanceTrackerABI, contractAddress);
               setContract(contract);
     
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
 
     const handleLogin = async (event) => {
         event.preventDefault();
         if(personalId!=""){
             const obj = await contract.methods.getUserById(personalId).call();
         const requestDetails = Object.values(obj)
         console.log((personalId==requestDetails[0]),(username==requestDetails[2]),(accounts[0]==requestDetails[5]));
             
             
             if((personalId==requestDetails[0])&&(username==requestDetails[2])&&(accounts[0]==requestDetails[5])){
             try {
               setIsLoading(true);
               const message = 'Login authentication: ' + Date.now();
               console.log(accounts[0])
               const signature = await web3.eth.personal.sign(message, accounts[0],'');
               console.log(message);
                            //setShowLoginModal(true);
 
               
               //alert("Your signature is: ",signature)
             } catch (error) {
               // Handle error
               console.log(error);
             } finally {
               setIsLoading(false);
             }
           }
           else{
             console.log("Login unsucessful");
           }}
         
         
       };
  return (
    <>
    <div className='wrapper'>
            <div className='form-boxlogin' style={{height:"500px"}}>
            <form onSubmit={handleLogin}>
      <h2>Login</h2>

      <div className="input-box">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="Enter Your Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div className="input-box">
        <label htmlFor="personalId">Personal ID</label>
        <input
          type="text"
          placeholder="Enter your Personal ID"
          onChange={(e) => setPersonalId(e.target.value)}
        />
      </div>

      {/* <div className="input-box">
        <label htmlFor="walletId">Metamask Wallet ID</label>
        <input
          type="text"
          placeholder="Enter your Metamask Wallet ID"
          value={accounts[0]}
          onChange={(e) => setWalletId(e.target.value)}
        />
      </div> */}

      <div className="checkbox" style={{ marginTop: "20px" }}>
        <span className="details"></span>
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me">Remember Me</label>
      </div>

      <div className="button">
        <input type="submit" value={isLoading?"Loading":"Login"} style={{ width: "300px" }} />
      </div>

      <div className="signup-link" style={{ paddingTop: "15px" }}>
        <strong>Not a member? </strong>
        <a onClick={() => navigate("/signup")}>SignUp Now</a>
      </div>
    </form>
    <Modal show={showLoginModal} onHide={handleShowLoginModal} size="lg" centered>
  <Modal.Header>
  <h4 style={{fontWeight:"700"}}>Alert</h4>
  </Modal.Header>

        <Modal.Body style={{textAlign:"center"}}>
          <div style={{alignSelf:"center", textAlign:"center"}}>
          <h4 style={{alignSelf:"center"}}>Success!</h4>
          </div>
          
          <div style={{display:"flex", flexDirection:"row", alignSelf:"center", textAlign:"center"}}>
            <p>Hey there, <b>{username}</b>! You have successfully logged in. Please click close to continue to your dashboard</p>
            
            
            </div>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={handleShowLoginModal} style={{backgroundColor:"#14C38E"}}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
            </div>
        </div>


    </>
  )
}

export default SignIn