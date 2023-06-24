import React from 'react'

function MainHome() {
  return (
    <>
    <div className="container-mainhome">
        <h2 style={{paddingTop:"20px",fontSize:"40px",marginTop:"20px"}}>"Your <strong>Personal Finance Companion</strong><br/> for a Prosperous Tomorrow!"</h2>
        <div className="container-mainhome-right">
            <div className="image-mainhome">
                <p style={{color:"white",marginTop:"20px"}}>Welcome to Finfolio, your personal finance tracker for empowering your journey to financial success.<br/> Take control of your finances, track income, expenses, and investments. Achieve financial freedom with Finfolio today!</p>
                <img style={{marginLeft:"1000px",marginTop:"-180px"}}src='https://plus.unsplash.com/premium_photo-1683980578016-a1f980719ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80'></img>
            </div>
        
            
            </div>
            <div className='container-mainhome-bottom'>
                <p>Are You Ready To Level Up Financially? </p>
            </div>
            <div className="JoinBtn">
                <button className="btn btn-primary" style={{marginTop:"-760px",fontSize:"20px"}}>Join Now</button>
            </div>

            <img src='./images/piechart.jpeg' style={{marginTop:"-380px",marginLeft:"190px",transform:"scale(0.8)"}}></img>
    </div>
    
    
    
    </>
  )
}

export default MainHome