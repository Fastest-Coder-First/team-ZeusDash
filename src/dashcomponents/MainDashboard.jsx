import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { BsCurrencyDollar } from "react-icons/bs";
import { useState,useEffect,useRef } from 'react';
import {Chart} from 'chart.js';
import {BiSolidCoinStack} from 'react-icons/bi';
import {AiOutlineInfoCircle} from 'react-icons/ai';
import {BsDot} from 'react-icons/bs';
import expensestable from './expensestable';

const colors = ['blue', 'yellow', 'green'];


function MainDashboard() {

  const [cards] = useState([
    {
        title: 'Your Income',
        text: '$1220,00',
        bottom: 'Your Income Amount'
    },
    {
        title: 'Total Expenses',
        text: '$230,21',
        bottom: 'Your Total Spend'
    },
    {
        title: 'Total Money',
        text: '$5250,00',
        bottom: 'Total money in your wallet'
    },
  ])  






  return (
    <>
    
    <h2 style={{color:"white",marginLeft:"300px",marginTop:"20px",fontFamily:"poppins"}}>FinFolio: Empowering Your Journey to Financial Freedom!</h2>
    <div className='themainstats'>
    
    
    <div className="credit-card">
      <div className="credit-card-front">
        <div className="chip" style={{display:"flex",gap:"90px",fontSize:"20px"}}>
        <div className="card-number">**** **** ****</div>
        <div className="card-type">MetaMask</div>
        </div>
        <div className="accountbalance" style={{fontSize:"40px"}}><BsCurrencyDollar/>6969,000</div>
        <p style={{marginTop:"20px"}}>Card Owner:</p>
        <div className="cardholder-name">Unmani Shinde</div>
      </div>
    </div>

    <div>
        <section className='card-container'>
            <div className="container">
                <div className='heading-text'>
                <h1 className='heading'><BiSolidCoinStack className='logo'/>FinFolio+</h1>
                <p className='para'>You saved as much as $200 this month</p>
                </div>
                <div className="cards">
                    {
                        cards.map((card, i) => (
                    <div key={i} className="card">
                        <h5 className='title'><BsDot style={{fontSize:'90px',marginTop:"-40px"}} className={`dot-icon ${colors[i % colors.length]}`}/>{card.title}<AiOutlineInfoCircle className='info-icon'/></h5>
                        <h3 className='text'>{card.text}</h3>
                        <h6 className='bottom'>{card.bottom}</h6>
                    </div>
                        ))
                    }
                </div>
            </div>
        </section>
    </div>














    <div className="money-analytics" style={{marginLeft:"-200px"}}>
        <div className='money-analytics-header' style={{display:"flex",gap:"250px"}}>
        <h3 style={{marginTop:"20px",marginLeft:"20px"}}>Money Analytics </h3>
        <button className='mybtn' style={{marginTop:"20px"}}>Full Stats</button>
        </div>
        <div className='money-analytics-body' style={{gap:"100px",marginTop:"20px"}}>
            <div style={{color:"#1A7DD9",fontSize:"40px"}}><BsCurrencyDollar/>6969,000</div>
            <div style={{color:"black",marginLeft:"20px"}}> You saved 10% more than the last month</div>
            <img src='./barchart.jpeg' style={{transform:"scale(0.5)",marginTop:"-110px"}}></img>
            
        </div>
        <div className="table-responsive">
        <h1 style={{color:"black"}}>All Transactions</h1>
        <table >
            <thead>
                <tr>
                <th>Metamask Wallet ID</th>
                <th>Amount</th>
                <th>Transaction</th>
                <th>Status</th>
                </tr>
            </thead>
            <tbody>
    <tr>
      <td>0x7a1BdAdE6a524Da1b5b63415b570A2b2D7D</td>
      <td>$100</td>
      <td>Transaction 1</td>
      <td>Successful</td>
    </tr>
    <tr>
      <td>0x3C9fA4529d8f7C9a6c4fE8A3D37dB9945df</td>
      <td>$200</td>
      <td>Transaction 2</td>
      <td>Successful</td>
    </tr>
    <tr>
      <td>0xF8Dc7e7a548f9a3A5ef80cC07d6Fe4Dd68F</td>
      <td>$300</td>
      <td>Transaction 3</td>
      <td>Successful</td>
    </tr>
    <tr>
      <td>0xF8Dc7e7a548f9a345580cC07d6Fe4Dd68F9</td>
      <td>$100</td>
      <td>Transaction 4</td>
      <td>Pending</td>
    </tr>
    <tr>
      <td>0x7a1BdAdE6a524Da1b5b63415b5902b2D7Dc</td>
      <td>$100</td>
      <td>Transaction 5</td>
      <td>Successful</td>
    </tr>
    </tbody>
</table>
        </div>
    </div>

    

    </div>

    
    
    </>
    
  )
}

export default MainDashboard;