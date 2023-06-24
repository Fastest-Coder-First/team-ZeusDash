import React from 'react'

function Reviews() {
  return (
    <>
    <div class="customer-reviews">
    <img src="./images/customer.svg" alt="Customer 1" style={{transform:"scale(0.2)",marginTop:"600px"}}/>
  <h2 style={{marginTop:"-30vh"}}>Customer Reviews</h2>
  
  <div class="review-card">
    
    <div class="review-content">
      <h3 style={{fontWeight:"bold"}}>John Doe</h3>
      <p>"Finfolio has revolutionized how I manage my finances. It's user-friendly, insightful, and has helped me stay on top of my financial goals. Highly recommended!"</p>
    </div>
  </div>

  <div class="review-card">
    <div class="review-content">
      <h3 style={{fontWeight:"bold"}}>Jane Smith</h3>
      <p>"I've tried several finance trackers, but Finfolio stands out with its intuitive interface and comprehensive features. It has truly made a positive impact on my financial journey."</p>
    </div>
  </div>

  <div class="review-card">
    
    <div class="review-content">
      <h3 style={{fontWeight:"bold"}}>Jonathan Moore</h3>
      <p>"Finfolio has completely transformed the way I manage my finances. It's intuitive, user-friendly, and provides in-depth insights into my spending habits. I highly recommend it to anyone looking to take control of their financial journey!"</p>
    </div>
  </div>
</div>

    </>
  )
}

export default Reviews