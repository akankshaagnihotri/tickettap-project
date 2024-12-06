import { useContext, useState } from "react";
import Modal from "./Modal";
import { Link } from "react-router-dom";
import { MyStore } from "../store/Store";

function Section_3() {
  const {open,setOpen,data,setData}=useContext(MyStore)
  const arr=[{
    name:"shivam",
    age:23

  }]

  return (

    <>
    <div className="section-3-main">
      <section className="section-3">
        <div className="section-3-first">
          <p>A BETTER WAY TO ANALYSE</p>
          <h1>Focus on what matters</h1>
          <p>
            Discover top stocks & mutual funds with forecast, analyst ratings,
            scorecard & more
          </p>
          <button></button>
        </div>
        <div className="section-3-images">
          <div>
            <img src="https://assets.tickertape.in/images/landing-page/analyseDweb_card1.svg"></img>
          </div>
          <div>
            <img src="https://assets.tickertape.in/images/landing-page/analyseDweb_card2.svg"></img>
          </div>
          <div>
            <img src="https://assets.tickertape.in/images/landing-page/analyseDweb_card3.svg"></img>
          </div>
          <div>
            <img src="https://assets.tickertape.in/images/landing-page/analyseDweb_card4.svg"></img>
          </div>
        </div>
      
      </section>
      <hr></hr>
      <section className="section-3-second">
        <div>
            <h3>SCREEN STOCKS & MUTUAL FUNDS</h3>
            <h1>Find the next best investment</h1>
        </div>
        <div className="section-3-cards">
            <div className="section-3-card" >
                <div>
                <img src="https://www.tickertape.in/images/svg/screener/cash-rich-large-caps.svg" width="65rem"></img>
                <h4>Top Tax Savers</h4>
                </div>
                <p>Funds that help you save tax build wealth at the same time</p>
                <div>
                <button>MUTUAL FUNDS</button>
                <button onClick={()=>{setOpen(true);setData(arr)}}><i class="fa-solid fa-right-long"></i></button>
                </div>
            </div>
            <div className="section-3-card">
            <div >
                <img src="https://www.tickertape.in/images/svg/screener/investing-in-new-me.svg" width="65rem" ></img>
                <h4>Consistent Out-performers</h4>
                </div>
                <p>Funds with long term outperformance & low volatility</p>
                <div>
                <button>MUTUAL FUNDS</button>
                <button onClick={()=>setOpen(true)}><i class="fa-solid fa-right-long"></i></button>
                
                </div>
            </div>
            <div className="section-3-card">
            <div>
                <img src="https://www.tickertape.in/images/svg/screener/fule-for-your-dreams.svg" width="65rem"></img>
                <h4>The Unstoppables</h4>
                </div>
                <p>Stocks which are currently facing a strong price momentum</p>
                <div>
                <button>STOCK</button>
                <button onClick={()=>setOpen(true)}><i class="fa-solid fa-right-long"></i></button>
                </div>
            </div>
            <div className="section-3-card">
            <div>
                <img src="https://www.tickertape.in/images/svg/screener/low-debt-mid-cap.svg" width="65rem"></img>
                <h4>Low debt High-growth</h4>
                </div>
                <p>Midcap Companies which are growing with very low or zero debt</p>
                <div>
                <button>STOCK</button>
                <button onClick={()=>setOpen(true)}><i class="fa-solid fa-right-long"></i></button>
                </div>
            </div>
            <div  className="section-3-card">
            <div>
                <img src="https://www.tickertape.in/images/svg/screener/limited-variability.svg" width="65rem"></img>
                <h4>Cash Rich largecaps</h4>
                </div>
                <p>profitable Largecap companies with growing cash-flows and earnings</p>
                <div>
                <button>STOCK</button>
                <button onClick={()=>setOpen(true)}><i class="fa-solid fa-right-long"></i></button>
                </div>
            </div>
            <div className="section-3-card section-4-card-last">
            <div>
                <h4>Create your first screen</h4>
                <p>Choose from over 200+ filters</p>
                </div>
                <div>
                <p></p>
                <button onClick={()=>setOpen(true)}><i class="fa-solid fa-right-long"></i></button>
                </div>
            </div>

        </div>
        <div className="section-3-cards-second">
          <div>
            <img src="https://www.tickertape.in/images/svg/scan-stocks.svg"  width="20rem"></img>
            <div>
              <h4>Screen stocks & MFs</h4>
              <p>Scan, analyze & pick stocks & mutual funds confidently with 150+ readymade filters</p>
            </div>
          </div>
          <div>
            <img src="https://www.tickertape.in/images/svg/pre-built-screens.svg" width="20rem"></img>
            <div>
              <h4>Pre-built screens</h4>
              <p>Save hours of research by using our readymade screens to find your next investment</p>
            </div>
          </div>
          <div>
            <img src="https://www.tickertape.in/images/svg/pre-built-screens.svg" width="20rem"></img>
            <div>
              <h4>Create screens & filters</h4>
              <p>Create your own goal-based screen or custom filters to screen investments</p>
            </div>
          </div>
        </div>
    </section>
    <hr></hr>
    <section className="section-3-last">
      <div>
        <h4>MARKET MOOD INDEX</h4>
        <h1>Check how‘s the market feeling</h1>
        <p>Investors are in a Greedy mood today. Look if it‘s the right time to enter the market!</p>
     <Link to="home/checkoutmmi">   <button>Check out MMI<i class="fa-solid fa-right-long"></i> </button></Link>
      </div>
      <div >
       <img src="data:image/jpeg;base64,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"></img>
      </div>
    </section>
    {open && <Modal setOpen={setOpen} data={data}/>}
    </div>
    </>
  );
}
export default Section_3;