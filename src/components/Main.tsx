import Image from 'next/image';

const Main=()=>{
    return(
        <>
           <section className="main mt-3">
                <div >
                    <Image src="/Image/percentage.png" alt="" height="150" width='150'/>
                    <h2 className='percentage'>How its works</h2>
                    <h5 className='mainHeading'>Access sums</h5>
                    <div className="maincard1">
                        <div className='maincardImage'>
                            <Image src="/Image/horizontalbar.png" alt="" height="50" width='50'/></div>
                        <h5 className='maincardImage'>Choose chapters</h5>
                        <p className='maincardImage'>Choose from a variety of sums across chapters and books for NCERT.</p>
                    </div>
                    <div className="maincard2">
                    <div className='maincardImage'>
                            <Image src="/Image/shock.png" alt="" height="50" width='50'/></div>
                        <h5 className='maincardImage'>Quick start</h5>
                        <p className='maincardImage'>Pick up from where you left off the last time.</p>
                    </div>
                    <div className='mainImage'>
                    <Image src="/Image/Group243.png" alt="" height="400" width='400' /></div>
                    
                </div>
            </section> 
          
        </>
    )
}
export default Main;