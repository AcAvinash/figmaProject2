import Image from "next/image";

const Pricing=()=>{
return(
    <>
    <div className="main Price">
    <div className="pricing">
        <Image src="/Image/priceImg.png" alt="" height="150" width='150'/>
        <h1 className="pricingText">Pricing:</h1>
        <br/>
        <div><h3 className="feedparatext ">Get the first 5 questions free, and then pay:</h3></div>
        <div className='priceImg'>
       <div className="priceCard1"><Image src='/Image/priceCard1.png'alt='' height='300' width='250' /> </div> 
        <div className="priceCard2"><Image src='/Image/priceCard2.jpeg'alt='' height='350' width='250'/> </div>
        <div className="priceCard3"><Image src='/Image/priceCard3.png'alt='' height='300' width='250'/> </div>
        
        </div>
       <h2 className="pricetext">&nbsp;&nbsp;&nbsp;Want to try it out without choosing a plan? Take the Free Demo now!</h2>
    </div>
    </div>
    
    </>
)
}
export default Pricing;