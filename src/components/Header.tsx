
import Image from "next/image";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Image
              src="/Image/image3.png"
              alt="tour"
              width="113"
              height="36"
              className="hImage"
            />
          </div>
          <div className="col-md-6 d-flex  justify-content-end">

            <button className='contact '>
             Contact us
            </button>
            <div className="wrapper">
              <div className="card h-4 w-5 border-1 play">
              </div>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};
export default Header;
