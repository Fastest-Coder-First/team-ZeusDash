import React from 'react'
import { useState } from 'react';



function Features() {
    const [features] = useState([
        {
            img: 'images/1.svg',
            title: 'Multiple devices',
            text: 'Safely synchronize across devices with Bank standard security.'
        },
        {
            img: 'images/2.svg',
            title: 'Recurring transaction',
            text: 'Get notified of recurring bills and transactions before due date.'
        },
        {
            img: 'images/3.svg',
            title: 'Travel mode',
            text: 'All currencies supported with up-to-date exchange rate.'
        },
        {
            img: 'images/4.svg',
            title: 'Saving plan',
            text: 'Keep track on savings process to meet your financial goals.'
        },
        {
            img: 'images/5.svg',
            title: 'Debt and loan',
            text: 'Manage your debts, loans and payment process in one place.'
        },
        {
            img: 'images/6.svg',
            title: 'Scan receipt',
            text: 'Take pictures of your receipts to auto-process and organize them.'
        },
      ])
  return (
    <>
    <div>
        <section className="features-section">
            <div className="features-container">
                <h1 className='features-heading' style={{color:"white"}}>Why choose FinFolio+ ?</h1>
                <div className="features">
                    {features.map((feature,i) => (
                    <div key={i} className="feature">
                        <img className='img-logo' src={feature.img} alt="" />
                        <h3 className='features-title'>{feature.title}</h3>
                        <p className='features-text'>{feature.text}</p>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    </div>
  )


    </>
  )
}

export default Features