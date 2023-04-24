import Image from "next/image";
const Student=()=>{
    return(
        <>
            <div className="main1 ">
                <div  className="stdhead"><h1>What students are saying:</h1></div>
                
                <div className="student">
                <div className="std1">
                    <Image src="/Image/leftStudent.jpeg" alt='' width='246' height="128"/>
                </div>
                <div className="std2">
                    <Image src="/Image/centerStudent.jpeg" alt='' width='442' height="216"/>
                </div>
                <div className="std3">
                    <Image src="/Image/rightStudent.jpeg" alt='' width='248' height="128"/>
                </div>
                <div className="spinner">
                <Image src="/Image/spinner.jpeg" alt="" height='30' width='200'/>
                </div>
                
                </div>
               
            </div>
        </>
    )
}
export default Student;




