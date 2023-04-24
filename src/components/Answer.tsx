import Image from 'next/image';

const Answer=()=>{
    return(
        <>
           <div className="anscontainer mt-3">
              <div className=" ansInnerContainer">
                  <Image src="/Image/Group244.png" alt="" width="370" height="350"/>
              </div>
               <div className="anssideContainer">
                <Image src="/Image/pen.png" alt="" height="50" width='50'/>
                <h6 className="anstext">Write answers</h6>
                   <p className="ansp1">Write out steps on your screen just as you’d solve sums in your notebook.</p>
               </div>
                <div className="anssideContainer1">
                 <Image src="/Image/keyboard.png" alt="" height="30" width='30' className='keyboard'/>
                    <h6 className="anstext1">Type out</h6>
                    <p className="ansp1">Small device? Use our on screen keyboards instead.</p>
                </div>
               <div className="anssideBigcontainer">
                   <Image src="/Image/bulb.png" alt="" height="40" width='40' className='bulb'/>
                   <h6 className="anstext1">Hints</h6>
                   <p className="ansp2">Get a more methodical experience of solving maths through contextual and on demand conversational hints to guide students in the right direction when stuck, while simultaneously keeping the onus of solving correctly on them.</p>
               </div>
           </div>
        </>
    )
}
export default Answer;