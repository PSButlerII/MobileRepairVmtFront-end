import React from 'react';
import useForm from '../UseForm/useForm';
import './reviewForm.css'



const ReviewForm = (props) => {
const {handleChange, handleSubmit,values}= useForm(); 

    const review = {
      userid: props.users.id,
      serviceId: props.services.ShopServiceIdId,
      userreview: props.userreview,
      rating: parseInt(props.rating),
    };
    console.log(review);
    

  
    return (
      <div className="center">
        <form className="form-inline" onSubmit={handleSubmit}>
          <h2>Add Review</h2>
          <br />
          <div className="form-group">
            <input
              type="text"
              name="userreview"
              placeholder="Review this item"
              onChange={handleChange}
              value={values.userreview}
            />

            <select
              className="custom-select custom-select-lg"
              value={values.rating}
              type="text"
              name="rating"
              onChange={handleChange}
            >
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
      </div>
    );
  }

 
export default ReviewForm;