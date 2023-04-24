import Image from "next/image";


const Feedback=()=>{
    return(
        <>
        <div className="main">
            <h4 className='feedbackHeading'>Get Feedback</h4>
              <div className="feedbackContainer1">
                <div className="feedImage1">
                  <Image src="/Image/Tick.png" alt="" width="50" height="50"/>
                  <h3 className= "feedtext">Correct answer</h3>
                  <p className="feedparatext">Instant confirmation of <br /> answers on completion.</p>
                </div>
              </div>
              <div className="feedbackContainer2 feedbackbg">
                 <div className="feedImage2">
                  <Image src="/Image/mult.png" alt=" " width="50" height="50"/>
                  <h3 className="feedtext">Mistakes</h3>
                  <p className="feedparatext ">Instant feedback to enable <br /> error correction.</p>
                 </div>
              </div>
              <div className="feedbackContainer3">
                <div className="feedImage3">
                  <Image src="/Image/thumb.png" alt="" width="50" height="50"/>
                  <h3 className="feedtext">Chapter end feedback</h3>
                  <p className="feedparatext ">Time and performance based feedback at each step.</p>
                </div>
              </div>
              <div className="feedbackBackground">
                <Image src='/Image/Vector 164.png' alt='' width='610' height='400'/>
              </div>
              <div className="androidLarge">
              <Image src='/Image/Android Large.png' alt='' width='200' height='254'/>
              </div>
              <div className="chapterend">
              <Image src='/Image/chapter end.png' alt='' width='200' height='449'/>
              </div>
        </div>
        </>
    )
}
export default Feedback;