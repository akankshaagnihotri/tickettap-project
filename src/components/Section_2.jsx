import { Link } from "react-router-dom";

function Section_2() {
  return (
    <>
      <section className="section-2">
        <div>
          <h3>WHAT IS TICKERTAPE?</h3>
          <h1>Start your investing journey</h1>
        </div>
        <div>

          <div>
            <img src="https://assets.tickertape.in/images/landing-page/analyse-desktop.svg" width="70rem" height="70rem"></img>
            <h2>Analyse</h2>
            <p>Screen,compare & evaluate your investments</p>
           
            <Link to="home/analysis"> <button>  <i class="fa-solid fa-arrow-down"></i>   </button></Link>
         
          </div>
          <div>
            <img src="https://assets.tickertape.in/images/landing-page/invest-desktop.svg" width="70rem" height="70rem"></img>
            <h2>Invest</h2>
            <p>Invest & track your portfolio with crisp insights</p>
            
            <Link to="home/invest"> <button> <i class="fa-solid fa-arrow-down"></i> </button>
            </Link>
           
          </div>
          <div>
            <img src="https://assets.tickertape.in/images/landing-page/learn-desktop.svg" width="70rem" height="70rem"></img>
            <h2>Learn</h2>
            <p>Grow & learn with a supportive community</p>
           
            <Link to="home/learn">  <button> <i class="fa-solid fa-arrow-down"></i></button></Link>
           
          </div>
        </div>
      </section>
    </>
  );
}
export default Section_2;
