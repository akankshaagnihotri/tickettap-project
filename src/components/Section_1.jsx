import { Link } from "react-router-dom";

function Section_1(){
    return (
   <>
    <section className="section_1">
         <div>
          <button>50L+downloads4.5 rated on Google Play</button>
          <div>
          <h1>Financial</h1>
          <h1>freedom begins</h1>
          <h1>here</h1>
          </div>
          <h3>All the tools you need to male wise & effective investment decisions</h3>
        <Link to="/login">  <button>Login</button></Link>
         </div>
         <img className="section-1-img" src="https://assets.tickertape.in/images/landing-page/heroPhoneBg_Compressed.webp" width="500px"></img>
    </section>
   </>
    );
}
export default Section_1;