
const Footer=()=>{
    return(
        <footer className='bg-dark p-5 '>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-4">
                        <h1 className='text-warning'>Contact us:</h1>
                        <p> <i className="bi bi-telephone text-warning"></i> <span className='text-white p-3'>+91 99886 78765</span>
                        </p>
                        <p className='text-warning bg-dark'><i className="bi bi-envelope-fill"><span className='text-white p-3'>kunal@abovecloud.in</span></i></p>
                        <p className='text-white p-1'><i></i><span>Address line 1</span></p>
                        <p className='text-white p-1'>Address line 2</p>
                        <p className='text-white p-1'>Address line 3</p>
                    </div>
                    <div className="col-md-4">
                         <h1 className="text-warning">Our newsletter:</h1>
                         <p className='text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat iste aliquid aliquam accusantium reiciendis at quia in, sapiente consequatur omnis!</p>
                         <input type="text" className='form-control rounded-pill' />
                         <button className='contact send'>Send!</button>
                         
                    </div>
                    <div className="col-md-4">
                       <h1 className='text-warning'>Stay updated:</h1> 
                       <p className='text-white fs-3 p-3'>Facebook</p>
                       <p className='text-white fs-3 p-3'>Instagram</p>
                       <p className='text-white fs-3 p-3'>Linkedin</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;