import React from 'react';

const Contact = () => {
    return(
        <div className="container mt-4">
            <div className="col-lg">
                <form>
                    <div className="form-group">
                        <label for="name">Name</label>
                        <input className="form-control" 
                            type="text"
                            placeholder="Enter your Name" >    
                        </input>
                    </div>
                    <div className="form-group">
                        <label for="lastName">
                            Last Name
                        </label>
                        <input className="form-control" 
                                type="text"
                                placeholder="Enter your Last Name">
                        </input>
                    </div>
                    <div className="form-group">
                        <label for="email">Email</label>
                        <input className="form-control"
                                type="text"
                                placeholder="Enter your email">        
                        </input>
                    </div>
                    <div className="form-group">
                        <label for="message">Message</label>
                        <textarea className="form-control"
                                type="text"
                                placeholder="Enter message">
                        </textarea>
                    </div>
                    <div className="text-center">
                        <button className="btn btn-success">Submit</button>
                    </div>
                </form>
            </div>
            <div className="col-lg">

            </div>
            
        </div>
    );
}

export default Contact;