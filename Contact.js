import React from "react";

const Contact = () =>{
    return(
        <div className="py-3 bg-warning">
            <div className="container">
                <h4 >Contact Us </h4>
            </div>
            <div>
                <div className="py-5 bg-light border-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col md-8">
                                <h4>Contact Information</h4>
                                <div className="divider">
                                    <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                        </p>
                                        <div className="card card-body">
                                        </div>
                                        <div className="row">
                                        <div className="col md-6">
                                            <label>Full Name</label>
                                            <input type="" name="" className="form-control"></input>
                                        </div>
                                        </div>
                                        <div className="row">
                                        <div className="col md-6">
                                            <label>Email Id</label>
                                            <input type="" name="" className="form-control"></input>
                                        </div>
                                        </div>
                                        <div className="row">
                                        <div className="col md-6">
                                            <label>Phone No.</label>
                                            <input type="" name="" className="form-control"></input>
                                        </div>
                                        </div>
                                        <div className="row">
                                        <div className="col md-12">
                                            <label>Message</label>
                                            <textarea row="3" className="form-control"></textarea>
                                            </div>

                                            <div className="col md-12"></div>
                                            <button type="" className="btn btn-primary px-5 py-2 mt-3">Submit</button>
                                        
                                        </div>
                                <div className="col md-4">
                                <div className="card card-body shawdow">
                                <p>
                                    Email @: contact@gmail.com
                                    Call us @: +91 9988776655
                                    Website : www.demo.com
                                </p>
                                </div>
                                </div>

                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default Contact;