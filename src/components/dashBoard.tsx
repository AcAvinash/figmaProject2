import Image from 'next/image';

const DashBoard=()=>{
    return(
        <>
        <div className="main">
            <div className="dashBoardVector"><Image src="/Image/Vector 166.png" alt='' height='450' width='550'/>
            </div>
            <div className='firstImage'>
            <Image src="/Image/Group 26.png" alt='' height='150' width='150'/>
            </div>
            <div className='secondImage'>
            <Image src="/Image/Android.png" alt='' height='450' width='200'/>
            </div>
            <div className='thirdImage'>
            <Image src="/Image/Group 184.png" alt='' height='150' width='150'/>
            </div>
            <h4 className='dashHeading'>Monitor Progress</h4>
            <div className='dashBoardcard1'>
                <div className="dashboardInnercard">
                  <Image src="/Image/flag.png" alt="" width="50" height="50"/>
                  <div className="dashboardtext">
                     <h3>Bookmarks</h3>
                     <p className="dashboardparatext">Save tricky or important <br /> sums for quick and easy <br /> access when needed.</p>
                  </div>
                  
                </div>
            </div>
            
            <div className='dashBoardcard2'>
              <div className="dashboardInnercard2">
                <Image src="/Image/dumble.png" alt="" width="50" height="50"/>
              </div>
              <div className="dashboardtext">
                     <h3 className="dash1">Progress</h3>
                     <p className="dashboardparatext dash2">Analyse the time you’ve <br /> spent on academics and <br /> sections that need work</p>
                  </div>
            </div>
        </div>
            
        </>
    )
}
export default DashBoard;