
import React, { Component } from "react";

export default class Login extends Component {
    onSubmitHandler = (e) => {
        e.preventDefault();
       this.props.history.push('./Home')
      }
    
    render() {
        return (
            <form>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block" onClick={this.onSubmitHandler}>Submit</button>
                

                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
            
        );
    }
}