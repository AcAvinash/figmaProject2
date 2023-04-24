import ReactPlayer from 'react-player';
import React,{useState} from 'react';
// const PracticeMath = () => {
//   return (

//     <>
      // <div className="container">
      //   <div className="row">
      //     <div className="col-md-6">
      //       <h1
      //         className="heading-text mt-5"
      //       >
      //         Practicing Math was never this easy
      //       </h1>
      //       <p className="headingPara">
      //         Solve NCERT math sums in a notebook like <br /> fashion. Get step-by-step
      //         feedback instantly, <br /> track your progress, and much more.{" "}
      //       </p>
      //       <button className="contact math">
      //         Get started
      //       </button>
      //     </div>
//           <div className="col-md-6">
//             <div
//               className="videoContainer">
                
//             </div> 
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// export default PracticeMath;
const PracticeMath = () => {

const videoUrls = [
  'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  'https://www.youtube.com/watch?v=2ZIpFytCSVc',
  'https://www.youtube.com/watch?v=RL_6zJfSNPY',
];

const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

const handlePlaylistButtonClick = () => {
  const nextVideoIndex = (currentVideoIndex + 1) % videoUrls.length;
  setCurrentVideoIndex(nextVideoIndex);
};

return (
  <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1
              className="heading-text mt-5"
            >
              Practicing Math was never this easy
            </h1>
            <p className="headingPara">
              Solve NCERT math sums in a notebook like <br /> fashion. Get step-by-step
              feedback instantly, <br /> track your progress, and much more.{" "}
            </p>
            <button className="contact math">
              Get started
            </button>
          </div>
        <div className="col-md-6">
          {/* Video player and playlist button */}
          <div className="videoContainer">
            <ReactPlayer url={videoUrls[currentVideoIndex]} />
          </div>
          <button onClick={handlePlaylistButtonClick}>Next video</button>
        </div>
      </div>
    </div>
  </>
);
}
export default PracticeMath;
