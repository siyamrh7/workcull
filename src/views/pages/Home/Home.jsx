import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import Header from 'src/reusable/Header'
const Home = () => {
    return (
        <div>
<Header/>



<div className="ads">
    <div className="mid-content">
    <div className="marque">
        <marquee behavior="scroll" direction="right">Now you get 0.20$ bonus when you open a new account .</marquee>
    </div>
</div>

</div>
<div className="banner">
    <div className="mid-content toper">
        <div className="banner-title">
            <h1>Work Cull</h1>
            <p>WorkCull is an online based marketplace that let the business owners to complete their micro tasks by hiring freelancers globally.</p>
            <div className="banner-button">
            <Link className="banner-btn" to="/workcull">Start Now</Link>
        </div>
        </div>
        <div className="topimage">
            <img className="topimg" src="/assets/Interaction.gif"  alt=""/>
        </div>
       
    </div>


    </div>



<div className="content1">
   <div className="mid-content fonts">
    <h2>Simply Small, Brilliantly Big</h2>
    <p>WorkCull is an online based marketplace that let the business owners to complete their micro tasks by hiring freelancers globally. .Businesses who need other people to help them to boost their works come to WorkCull.Here they can hire workers for their easy and quick micro jobs.</p>
   </div>
</div>

<div className="details">
    <div className="mid-content boxes">
        <div className="work box">
          <div className="work-icon"><span><i className="fas fa-tasks"></i></span></div>  
            <h4>WORK</h4>
            <ul>
                <li> <span><i className="fas fa-check"></i></span> Select jobs you like</li>
                <li> <span><i className="fas fa-check"></i></span>  Complete these tasks</li>
                <li> <span><i className="fas fa-check"></i></span> Explore required tasks</li>
                <li> <span><i className="fas fa-check"></i></span> Send required proofs</li>
            </ul>
        </div>
        <div className="job box">
            <div className="job-icon"><span><i className="fas fa-briefcase"></i></span></div>
            <h4>JOB</h4>

            <ul>
                <li> <span><i className="fas fa-check"></i></span> Post your job on your desire</li>
                <li><span><i className="fas fa-check"></i></span> Set requirements & Estimated</li>
                <li> <span><i className="fas fa-check"></i></span>Rate each task</li>
                <li> <span><i className="fas fa-check"></i></span>Reach to Thousand workers</li>
            </ul>

         </div>
        <div className="withdraw box">
          <div className="withdraw-icon"><span><i className="fas fa-coins"></i></span></div>  
            <h4>WITHDRAW/DEPOSIT</h4>
            <ul>
                <li> <span><i className="fas fa-check"></i></span>Select Payment Method</li>
                <li> <span><i className="fas fa-check"></i></span>Set your amount</li>
                <li> <span><i className="fas fa-check"></i></span>Place your order</li>
                <li> <span><i className="fas fa-check"></i></span>Get Payment/Deposit Fund</li>
            </ul>
         </div>
    </div>
</div>

<div className="content2">
    <div className="mid-content mid">
        <div className="content-text">
            <h2>🔸DELIVER  WORK & GET PAID 🔸</h2>
            <p>This is how Simply Small, Brilliantly Big Works!
 They are simple to do and take little time to finish. There are jobs like take a survey, Social Sites promoting, categorize images, Write Essays, help promote content and many others. Get paid immediately after task is reviewed and don't wait a month or more for a pay out.</p>
        </div>
    <div className="">
        <img  className="conimg" src="/assets/deliver.png" alt=""/>
    </div>
    </div>
</div>

<div className="get-help">
    <div className="mid-content help">
    <div className="help-img ">
        <a className="home-job" href="/"><img style={{width:'100%'}} src="/assets/deliver2.gif" alt=""/></a>
    </div>
    <div className="help-content ">
       
        <h2>🔸HIRE  WORKERS TO COMPLETE YOUR WORKS🔸</h2>
        <p>This is where Small works comes to play! We accept jobs that help Business owners promote their business (website, app, social media, micro tasks) or help them do something they can't do by themselves; where they need more Manpower and their skills to achieve their desired goals.
We are helping them out through this Platform!</p>
    </div>
    </div>
</div>

<div className="refer text-center">
    <div className="mid-content refervai">
    
    <div className="refer-content" style={{flex:6}}>
        <h2>🔸EARN MORE BY REFERRING YOUR FRIENDS🔸</h2>
    <p>Post your Referral Link on Social media, websites, blogs, forums, write Workcull review or share it with your friends & tell them to join WorkCull to make money Online.
 You can easily earn commission for each referral.
What are you waiting for then?
 Refer Now!</p>
    </div>
    <div style={{flex:4}} className="referchotu">

    <img style={{width:'100%'}}  src="/assets/ask.gif" alt="" />
    </div>
   </div>
    <div className="refer-button">
        <Link className="refer-btn" to="/workcull"> Start Now</Link>
    </div>
</div>
<div className="refer-img text-center">
    <div className="mid-content" >
        <a className="r-img" style={{margin:'auto',marginBottom:'2rem'}} href="/"><img  src="/assets/refer.png" alt=""/></a>
    </div>
</div>


  
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About US</h6>
            <p className="text-justify">WORK CULL is an online based marketplace that let the business owners to complete their micro tasks by hiring freelancers globally.Businesses who need other people to help them to boost their works come to WorkCull.Here they can hire workers for their easy and quick micro jobs.
Join Us Now!</p>
          </div>
          <div className="col-xs-6 col-md-3">
            <h6>Contact US</h6>
            {/* <ul className="footer-links">
              <li><a href="/">C</a></li>
              <li><a href="/">UI Design</a></li>
              <li><a href="/">PHP</a></li>
              <li><a href="/">Java</a></li>
              <li><a href="/">Android</a></li>
              <li><a href="/">Templates</a></li>
            </ul> */}
                     Contact Us-

WorkCull.com 
(Simply Small, Brilliantly Big)

For any enquiries or suggestions, Mail Us at-  workcullteam@gmail.com

Facebook Support Page- https://www.facebook.com/workcull
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Conditions</h6>
            <ul className="footer-links">
              <li><a href="/">About Us</a></li>
              <li><a href="/">Contact Us</a></li>
              <li><a href="/">Contribute</a></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms & Condition</Link></li>
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2021 All Rights Reserved by 
         <a href="/"> Work Cull</a>.
            </p>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><a className="facebook" href="https://www.facebook.com/workcull"><i className="fab fa-facebook"></i></a></li>
              <li><a href = "mailto: workcullteam@gmail.com"><i class="fas fa-envelope-square"></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>


</div>
      
    )
}

export default Home
