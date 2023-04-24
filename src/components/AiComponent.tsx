import Image from "next/image";
const AiComponent=()=>{
    return(
        <>
            <div className="main Ai">
                <div className="AiContainer">
                    <div className="AiInnerContainer">
                        <Image src="/Image/AiImage.png" alt="" width="200" height="200"/>
                    </div>
                </div>
                <div className="AitextContainer">
                    <h3>AI For You</h3>
                </div>
                <div className="AiInnerText">
                    <p>Our proprietary technology and sturdy integrations ensure <br/> that we detect and understand each step, and provide hints <br/> and guidance that is relevant to your present needs.</p>
                    <p>Our proprietary technology and sturdy integrations ensure <br/> that we detect and understand each step, and provide hints <br/> and guidance that is relevant to your present needs.</p>
                </div>
                </div>
        </>
    )
}
export default AiComponent;