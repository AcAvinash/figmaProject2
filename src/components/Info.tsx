import Image from "next/image";

const Info = () => {
  return (
    <>
    
        <div className="main1">
        <div className="">
          <h3 style={{ color: "darkblue" }} className="text-center">
       
            <Image src="/Image/inv.png" alt="" width="50" height="50" />
            Just like having a teacher help you solve every sum
          </h3>
        </div>
        <div className="container">
        <Image src="/Image/Practise.png" alt='' height='345' width='1200'/>
      </div>
       </div>
             
       
      
    </>
  );
};
export default Info;