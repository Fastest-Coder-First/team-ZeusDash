import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import Web3 from 'web3';
// import "../stylesheets/style.css";
import personalFinanceTrackerABI from "./ABI/personalFinanceTrackerABI.json";
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

const contractAddress = "0xB5AE5d8E33D3C6291E40053C4089e1fbc3749155";


function SignUp() {
    const navigate = useNavigate();
    const [web3, setWeb3] = useState(null);
    const [accounts, setAccounts] = useState([]);
    const [contract, setContract] = useState(null);
    const [fullName, setFullName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [walletAddress, setWalletAddress] = useState('');
    const [loadSignUpSuccessModal, setLoadSignUpSuccessModal] = useState(false);
    const [loadSignUpFailureModal, setLoadSignUpFailureModal] = useState(false);
    const [userCount, setUserCount] =useState(0);


  const handleSignUp = (e) => {
    e.preventDefault();
    const temp = `${username}@finfolio.plus`;
    contract.methods.addUser(fullName, temp, email, phoneNumber, accounts[0])
.send({ from: accounts[0]})
  .on('receipt', (receipt) => {
    setLoadSignUpSuccessModal(true);
  })
  .on('error', (error) => {
    setLoadSignUpFailureModal(true);
  });
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
              const temp =await contract.methods.getUserCount().call();
              setUserCount(temp);
    
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

      const handleCloseSignUpSuccessModal = () => {
        setLoadSignUpSuccessModal(false);
      };

      const handleCloseSignUpFailureModal = () => {
        setLoadSignUpFailureModal(false);
      };
    
      const handleUsernameChange = (e) => {
        const enteredUsername = e.target.value;
        if (!enteredUsername.includes('@') && enteredUsername !== '') {
          setUsername(enteredUsername);
        }
        else if(enteredUsername.includes('@')){
            alert("Usernames cannot contain the symbol @")
        }
        else if(enteredUsername !== ''){
            alert("Username can't be left empty.")
        }
      };

  return (
    <>
     <div className='wrapper'style={{marginTop:"9vh"}}>
            <div className='form-boxlogin' style={{height:'600px'}}>
            <form onSubmit={handleSignUp}>
      <h2>SignUp</h2>
      <div className="input-box">
        <label htmlFor="fullname" style={{ color: 'black' }}>Full Name</label>
        <input
          type="text"
          name="fullname"
          placeholder="Enter your Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      </div>
      <div className="input-box">
        <label htmlFor="username" style={{ color: 'black' }}>Username</label>
        <div style={{display:'flex',flexDirection:'row'}}>
        <input
          type="text"
          name="username"
          placeholder="Enter your Username"
          value={username}
          onChange={handleUsernameChange}
          style={{width:"13vw"}}
        />
        <input type="text"
          name="addition"
          value={"@finfolio.plus"}
          readOnly
          style={{marginLeft:'-1.5vw',border:'1px solid black'}}
        />
        </div>
        
      </div>
      <div className="input-box">
        <label htmlFor="email" style={{ color: 'black' }}>Email ID</label>
        <input
          type="text"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-box">
        <label htmlFor="phonenumber" style={{ color: 'black' }}>Phone Number</label>
        <input
          type="text"
          name="phonenumber"
          placeholder="Enter your contact"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
      <div className="input-box">
        <label htmlFor="walletaddress" style={{ color: 'black' }}>Metamask Wallet ID</label>
        <input
          type="text"
          name="walletaddress"
          placeholder="Enter your Metamask Wallet ID"
          value={accounts[0]}
          onChange={(e) => setWalletAddress(e.target.value)} readOnly
        />
      </div>
      <div className="button" id="button" style={{ marginTop: "20px" }}>
        <input type="submit" name="signup" value="SignUp" style={{ width: "300px" }} />
      </div>
      <div className="login-link" style={{ paddingTop: '20px' }}>
        <strong> Already a member? </strong>
        <a href="/signin" onClick={() => navigate("/signin")}>Login Now</a>
      </div>
    </form>

    <Modal show={loadSignUpSuccessModal} onHide={handleCloseSignUpSuccessModal} size="lg" centered>
  <Modal.Header>
  <h4 style={{fontWeight:"700"}}>Alert</h4>
  </Modal.Header>

        <Modal.Body style={{textAlign:"center"}}>
          <div style={{alignSelf:"center", textAlign:"center"}}>
          <h4 style={{alignSelf:"center"}}>Success!</h4>
          </div>
          
          <div style={{display:"flex", flexDirection:"row", alignSelf:"center", textAlign:"center"}}>
            Hey there, {fullName}! You have successfully registered yourself on FinFolio+. <br></br><b>Your FinFolio+ ID is: {userCount}</b>
            
            </div>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={handleCloseSignUpSuccessModal} style={{backgroundColor:"#14C38E"}}>
            Close
          </button>
        </Modal.Footer>
      </Modal>

      <Modal show={loadSignUpFailureModal} onHide={handleCloseSignUpFailureModal} size="lg" centered>
  <Modal.Header>
  <h4 style={{fontWeight:"700"}}>Alert</h4>
  </Modal.Header>

        <Modal.Body style={{textAlign:"center"}}>
          <div style={{alignSelf:"center", textAlign:"center"}}>
          <h4 style={{alignSelf:"center"}}>Error in Registration!</h4>
          </div>
          
          <div style={{display:"flex", flexDirection:"row", alignSelf:"center", textAlign:"center"}}>
            Hey there, {fullName}! We were unable to process your request to join FinFolio+. Please try again later.            
            </div>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={handleCloseSignUpFailureModal} style={{backgroundColor:"#14C38E"}}>
            Close
          </button>
        </Modal.Footer>
      </Modal>


            </div>
        </div>

    </>
  )
}

export default SignUp