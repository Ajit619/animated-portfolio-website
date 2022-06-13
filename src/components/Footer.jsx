import React,{useContext} from "react";
import "../css/footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill='#fff'
            fill-opacity="1"
            d="M0,64L34.3,69.3C68.6,75,137,85,206,112C274.3,139,343,181,411,192C480,203,549,181,617,160C685.7,139,754,117,823,101.3C891.4,85,960,75,1029,106.7C1097.1,139,1166,213,1234,213.3C1302.9,213,1371,139,1406,101.3L1440,64L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
          ></path>
        </svg>
        <div className="container footer-inner">
            <div className="row d-flex justify-content-center">
            <div className="col-md-6">
                <h1 className="mb-3">ABOUT ME</h1>
                    <h6>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ratione dolore blanditiis, nisi explicabo veritatis rerum exercitationem ea eum quasi ullam? Aspernatur illum culpa corrupti laudantium vitae dolor, eligendi laboriosam adipisicing elit. Quas ratione dolore blanditiis, nisi explicabo veritatis?
                    </h6>
                  
                </div>
              
            </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
