import React, { Component } from 'react';
import './reviewForm.css'



class ReviewForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            userid:"", 
            merchid: 2,
            userreview: '',
            rating: ''
        }          
          this.handleChange= this.handleChange.bind(this);
          this.handleSubmit= this.handleSubmit.bind(this);
    }



    // need to add logic to pass merchid into form along with user input
     

    handleSubmit = (event) => {
        event.preventDefault();
        
        const review = {
            userid: this.state.userid,
            merchid: this.state.merchid,
            userreview: this.state.userreview,            
            rating: parseInt(this.state.rating)
        }
        
        console.log(review)
        this.addReview(review);
    }


    render() { 
        return (
             
        <div className="center">
 
        <form className="form-inline" onSubmit={this.handleSubmit}>
        <h2>Add Review</h2>
        <br />
        <div className="form-group">
        
        <input
          type="text"
          name="userreview"
          placeholder="Review this item"
          onChange={this.handleChange}
          value={this.state.userreview}
        />
             
                <select className="custom-select custom-select-lg" value={this.state.rating} type="text" name="rating" onChange={this.handleChange}>
                    <option>Star Rating</option>
                    <option value="1">1-Unsatisfactory</option>
                    <option value="2">2-Poor</option>
                    <option value="3">3-Acceptable</option>
                    <option value="4">4-Above Average</option>
                    <option value="5">5-Excellent</option>
                </select>
            </div> 

        <button type="submit"> Submit </button>
      </form>
</div> );
    }
}
 
export default ReviewForm;