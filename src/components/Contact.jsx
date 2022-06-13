import React from 'react'
import '../css/contact.css';
import * as bs from "react-icons/bs";

const Contact = () => {
  return (
    <>
        <div className="container">
        <div className="contact">
        <div className="heading mb-4">
            <span>Get in Touch</span>
        </div>
        <div className="col-md-6 col-10">
            <div className="form-group">
                <input type="text" className='form-control' placeholder='Name..' />
                </div>
                <div className="form-group">
                <input type="text" className='form-control' placeholder='Email..' />
                </div>
                <div className="form-group">
                <input type="text" className='form-control' placeholder='Contact..' />
                </div>
                <div className="form-group">
                <textarea type="text" rows={7} className='form-control' placeholder='Message..'>
                    </textarea>
                    <button data-aos='flip-left' className="button mt-5 shadow-lg f-btn justify-content-center">Message<bs.BsArrowRight style={{marginLeft: '10px'}} /></button>

                    </div>
                    </div>

        </div>
        </div>
    </>
  )
}

export default Contact