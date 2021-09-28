import React from "react";
class addform extends React.Component {
   
    onSubmitHand = (e) => {
        e.preventDefault();
       this.props.history.push('./Home')
      }

    render() { 
      
        return <div>
            <form>
            <div className="form-group">
                   
                    <label>Name</label>
                    <input type="name" className="form-control" placeholder="Name" />
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                    <label>Age</label>
                    <input type="number" className="form-control" placeholder="Age" />
                    <label>Mobile</label>
                    <input type="number" className="form-control" placeholder="Mobile" />
                    <label>Address line 1</label>
                    <input type="name" className="form-control" placeholder="Address line 1" />
                    <label>Address line 2</label>
                    <input type="name" className="form-control" placeholder="Address line 2" />
                    <label>city</label>
                    <input type="name" className="form-control" placeholder="City" />
                    <label>State</label>
                    <input type="name" className="form-control" placeholder="State" />
                    <label>postal code</label>
                    <input type="number" className="form-control" placeholder="Postal code" />
                    <button onClick={this.onSubmitHand} type="submit" className="btn btn-primary btn-block">Submit</button>
                    
                </div>
            </form>
        </div>
    }
}
 
export default addform;