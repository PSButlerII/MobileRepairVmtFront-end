import React from "react";
import { useState } from "react";
import { Redirect } from "react-router";
import useForm from "../UseForm/useFormRating";



const Login = (props) => {
  const { values, handleChange, handleSubmit } = useForm(loginUser);
  const [willRedirect, setWillRedirect] = useState(false);
  function loginUser() {
    props.getUser(values);
    console.log(values);
    setWillRedirect(true);
  }
  if (willRedirect === false) {
    return (
      <React.Fragment>
        <form onSubmit={handleSubmit} className="col-md-2">
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

          <div className="form-floating">
            <input
              name="typeOfVehicle"
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="John123456"
              onChange={handleChange}
              values={values.typeOfVehicle}
            />
            <label for="floatingInput">TypeOfuser</label>
          </div>
          <div className="form-floating">
            <input
              name="vehicleYear"
              type="text"
              className="form-control"
              id="floatingvehicleYear"
              placeholder="vehicleYear"
              onChange={handleChange}
              values={values.vehicleYear}
            />
            <label for="floatingvehicleYear">vehicleYear</label>
          </div>
          <div className="form-floating">
            <input
              name="vehicleMake"
              type=""
              className="form-control"
              id="floatingvehicleMake"
              placeholder="vehicleMake"
              onChange={handleChange}
              values={values.vehicleMake}
            />
            <label for="floatingvehicleMake">vehicleMake</label>
          </div>
          <div className="form-floating">
            <input
              name="vehicleModel"
              type=""
              className="form-control"
              id="floatingvehicleModel"
              placeholder="vehicleModel"
              onChange={handleChange}
              values={values.vehicleModel}
            />
            <label for="floatingvehicleModel">vehicleModel</label>
          </div>
          <div className="form-floating">
            <input
              name="vehicleMileage"
              type="number"
              className="form-control"
              id="floatingvehicleMileage"
              placeholder="0"
              onChange={handleChange}
              values={values.vehicleMileage}
            />
            <label for="floatingvehicleMileage">vehicleMileage</label>
          </div>
          <div className="form-floating">
            <input
              name="vinNumber"
              type="number"
              className="form-control"
              id="floatingvinNumber"
              placeholder="0"
              onChange={handleChange}
              values={values.vinNumber}
            />
            <label for="floatingvinNumber">vinNumber</label>
          </div>
          <div className="form-floating">
            <input
              name="engine"
              type=""
              className="form-control"
              id="floatingengine"
              placeholder="engine"
              onChange={handleChange}
              values={values.engine}
            />
            <label for="floatingengine">engine</label>
          </div>
          <div className="form-floating">
            <input
              name="clutch"
              type=""
              className="form-control"
              id="floatingclutch"
              placeholder="clutch"
              onChange={handleChange}
              values={values.clutch}
            />
            <label for="floatingclutch">clutch</label>
          </div>
          <div className="form-floating">
            <input
              name="carburetor"
              type=""
              className="form-control"
              id="floatingcarburetor"
              placeholder="carburetor"
              onChange={handleChange}
              values={values.carburetor}
            />
            <label for="floatingcarburetor">carburetor</label>
          </div>
          <div className="form-floating">
            <input
              name="fuelPump"
              type=""
              className="form-control"
              id="floatingfuelPump"
              placeholder="fuelPump"
              onChange={handleChange}
              values={values.fuelPump}
            />
            <label for="floatingfuelPump">fuelPump</label>
          </div>
          <div className="form-floating">
            <input
              name="dieselMultiFuel"
              type=""
              className="form-control"
              id="floatingdieselMultiFuel"
              placeholder=""
              onChange={handleChange}
              values={values.dieselMultiFuel}
            />
            <label for="floatingdieselMultiFuel">dieselMultiFuel</label>
          </div>
          <div className="form-floating">
            <input
              name=""
              type=""
              className="form-control"
              id="floatingPassword"
              placeholder=""
              onChange={handleChange}
              values={values.}
            />
            <label for="floatingPassword">blank</label>
          </div>
          <div className="form-floating">
            <input
              name=""
              type=""
              className="form-control"
              id="floatingPassword"
              placeholder=""
              onChange={handleChange}
              values={values.}
            />
            <label for="floatingPassword">blank</label>
          </div>
          <div className="form-floating">
            <input
              name=""
              type=""
              className="form-control"
              id="floatingPassword"
              placeholder=""
              onChange={handleChange}
              values={values.}
            />
            <label for="floatingPassword">blank</label>
          </div>
          <div className="form-floating">
            <input
              name=""
              type=""
              className="form-control"
              id="floatingPassword"
              placeholder=""
              onChange={handleChange}
              values={values.}
            />
            <label for="floatingPassword">blank</label>
          </div>
          <div className="form-floating">
            <input
              name=""
              type=""
              className="form-control"
              id="floatingPassword"
              placeholder=""
              onChange={handleChange}
              values={values.}
            />
            <label for="floatingPassword">blank</label>
          </div>
          <div className="form-floating">
            <input
              name=""
              type=""
              className="form-control"
              id="floatingPassword"
              placeholder=""
              onChange={handleChange}
              values={values.}
            />
            <label for="floatingPassword">blank</label>
          </div>
          <div className="form-floating">
            <input
              name=""
              type=""
              className="form-control"
              id="floatingPassword"
              placeholder=""
              onChange={handleChange}
              values={values.}
            />
            <label for="floatingPassword">blank</label>
          </div>
          <div className="form-floating">
            <input
              name=""
              type=""
              className="form-control"
              id="floatingPassword"
              placeholder=""
              onChange={handleChange}
              values={values.}
            />
            <label for="floatingPassword">blank</label>
          </div>
          <div className="form-floating">
            <input
              name=""
              type=""
              className="form-control"
              id="floatingPassword"
              placeholder=""
              onChange={handleChange}
              values={values.}
            />
            <label for="floatingPassword">blank</label>
          </div>
          <div className="form-floating">
            <input
              name=""
              type=""
              className="form-control"
              id="floatingPassword"
              placeholder=""
              onChange={handleChange}
              values={values.}
            />
            <label for="floatingPassword">blank</label>
          </div>
          <div className="form-floating">
            <input
              name=""
              type=""
              className="form-control"
              id="floatingPassword"
              placeholder=""
              onChange={handleChange}
              values={values.}
            />
            <label for="floatingPassword">blank</label>
          </div>
          <div className="form-floating">
            <input
              name=""
              type=""
              className="form-control"
              id="floatingPassword"
              placeholder=""
              onChange={handleChange}
              values={values.}
            />
            <label for="floatingPassword">blank</label>
          </div>
          <div className="form-floating">
            <input
              name=""
              type=""
              className="form-control"
              id="floatingPassword"
              placeholder=""
              onChange={handleChange}
              values={values.}
            />
            <label for="floatingPassword">blank</label>
          </div>
          <div className="form-floating">
            <input
              name=""
              type=""
              className="form-control"
              id="floatingPassword"
              placeholder=""
              onChange={handleChange}
              values={values.}
            />
            <label for="floatingPassword">blank</label>
          </div>
          <div className="form-floating">
            <input
              name=""
              type=""
              className="form-control"
              id="floatingPassword"
              placeholder=""
              onChange={handleChange}
              values={values.}
            />
            <label for="floatingPassword">blank</label>
          </div>
          <div className="form-floating">
            <input
              name=""
              type=""
              className="form-control"
              id="floatingPassword"
              placeholder=""
              onChange={handleChange}
              values={values.}
            />
            <label for="floatingPassword">blank</label>
          </div>
          <div className="form-floating">
            <input
              name=""
              type=""
              className="form-control"
              id="floatingPassword"
              placeholder=""
              onChange={handleChange}
              values={values.}
            />
            <label for="floatingPassword">blank</label>
          </div>
          <div className="form-floating">
            <input
              name=""
              type=""
              className="form-control"
              id="floatingPassword"
              placeholder=""
              onChange={handleChange}
              values={values.}
            />
            <label for="floatingPassword">blank</label>
          </div>
          <div className="form-floating">
            <input
              name=""
              type=""
              className="form-control"
              id="floatingPassword"
              placeholder=""
              onChange={handleChange}
              values={values.}
            />
            <label for="floatingPassword">blank</label>
          </div>
          <div className="form-floating">
            <input
              name=""
              type=""
              className="form-control"
              id="floatingPassword"
              placeholder=""
              onChange={handleChange}
              values={values.}
            />
            <label for="floatingPassword">blank</label>
          </div>
          <div className="form-floating">
            <input
              name=""
              type=""
              className="form-control"
              id="floatingPassword"
              placeholder=""
              onChange={handleChange}
              values={values.}
            />
            <label for="floatingPassword">blank</label>
          </div>
          <div className="form-floating">
            <input
              name=""
              type=""
              className="form-control"
              id="floatingPassword"
              placeholder=""
              onChange={handleChange}
              values={values.}
            />
            <label for="floatingPassword">blank</label>
          </div>
          <div className="form-floating">
            <input
              name=""
              type=""
              className="form-control"
              id="floatingPassword"
              placeholder=""
              onChange={handleChange}
              values={values.}
            />
            <label for="floatingPassword">blank</label>
          </div>
          <div className="form-floating">
            <input
              name=""
              type=""
              className="form-control"
              id="floatingPassword"
              placeholder=""
              onChange={handleChange}
              values={values.}
            />
            <label for="floatingPassword">blank</label>
          </div>
          <div className="form-floating">
            <input
              name=""
              type=""
              className="form-control"
              id="floatingPassword"
              placeholder=""
              onChange={handleChange}
              values={values.}
            />
            <label for="floatingPassword">blank</label>
          </div>
          <div className="form-floating">
            <input
              name=""
              type=""
              className="form-control"
              id="floatingPassword"
              placeholder=""
              onChange={handleChange}
              values={values.}
            />
            <label for="floatingPassword">blank</label>
          </div>
          <div className="form-floating">
            <input
              name=""
              type=""
              className="form-control"
              id="floatingPassword"
              placeholder=""
              onChange={handleChange}
              values={values.}
            />
            <label for="floatingPassword">blank</label>
          </div>
          <div className="form-floating">
            <input
              name=""
              type=""
              className="form-control"
              id="floatingPassword"
              placeholder=""
              onChange={handleChange}
              values={values.}
            />
            <label for="floatingPassword">blank</label>
          </div>
          <div className="form-floating">
            <input
              name=""
              type=""
              className="form-control"
              id="floatingPassword"
              placeholder=""
              onChange={handleChange}
              values={values.}
            />
            <label for="floatingPassword">blank</label>
          </div>
          <div className="form-floating">
            <input
              name=""
              type=""
              className="form-control"
              id="floatingPassword"
              placeholder=""
              onChange={handleChange}
              values={values.}
            />
            <label for="floatingPassword">blank</label>
          </div>
          <div className="form-floating">
            <input
              name=""
              type=""
              className="form-control"
              id="floatingPassword"
              placeholder=""
              onChange={handleChange}
              values={values.}
            />
            <label for="floatingPassword">blank</label>
          </div>
          <div className="form-floating">
            <input
              name=""
              type=""
              className="form-control"
              id="floatingPassword"
              placeholder=""
              onChange={handleChange}
              values={values.}
            />
            <label for="floatingPassword">blank</label>
          </div>
          <div className="form-floating">
            <input
              name=""
              type=""
              className="form-control"
              id="floatingPassword"
              placeholder=""
              onChange={handleChange}
              values={values.}
            />
            <label for="floatingPassword">blank</label>
          </div>
          <div className="form-floating">
            <input
              name=""
              type=""
              className="form-control"
              id="floatingPassword"
              placeholder=""
              onChange={handleChange}
              values={values.}
            />
            <label for="floatingPassword">blank</label>
          </div>
          <div className="form-floating">
            <input
              name=""
              type=""
              className="form-control"
              id="floatingPassword"
              placeholder=""
              onChange={handleChange}
              values={values.}
            />
            <label for="floatingPassword">blank</label>
          </div>
          <div className="form-floating">
            <input
              name=""
              type=""
              className="form-control"
              id="floatingPassword"
              placeholder=""
              onChange={handleChange}
              values={values.}
            />
            <label for="floatingPassword">blank</label>
          </div>
          <div className="form-floating">
            <input
              name=""
              type=""
              className="form-control"
              id="floatingPassword"
              placeholder=""
              onChange={handleChange}
              values={values.}
            />
            <label for="floatingPassword">blank</label>
          </div>
          <div className="form-floating">
            <input
              name=""
              type=""
              className="form-control"
              id="floatingPassword"
              placeholder=""
              onChange={handleChange}
              values={values.}
            />
            <label for="floatingPassword">blank</label>
          </div>
          <div className="form-floating">
            <input
              name=""
              type=""
              className="form-control"
              id="floatingPassword"
              placeholder=""
              onChange={handleChange}
              values={values.}
            />
            <label for="floatingPassword">blank</label>
          </div>
          <div className="form-floating">
            <input
              name=""
              type=""
              className="form-control"
              id="floatingPassword"
              placeholder=""
              onChange={handleChange}
              values={values.}
            />
            <label for="floatingPassword">blank</label>
          </div>
          <div className="form-floating">
            <input
              name=""
              type=""
              className="form-control"
              id="floatingPassword"
              placeholder=""
              onChange={handleChange}
              values={values.}
            />
            <label for="floatingPassword">blank</label>
          </div>
          
          <button className="w-10 btn btn-lg btn-primary" type="submit">
            Sign in
          </button>
          <p className="mt-5 mb-3 text-muted">© 2021</p>
        </form>
      </React.Fragment>
    );
  } else {
    return <Redirect to="/" />;
  }
};

export default Login;

<form>
  <div class="form-group">
    
  </div>
<div class="form-group">
    <label for="exampleFormControlTextarea1">Example textarea</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
</form>






[
    {
        "ltiId": ,
        "typeOfVehicle": "Scooters and cars",
        "vehicleYear": null,
        "vehicleMake": null,
        "vehicleModel": null,
        "vehicleMileage": 0,
        "vinNumber": 0,
        "engine": null,
        "clutch": null,
        "carburetor": null,
        "fuelPump": null,
        "dieselMultiFuel": null,
        "turbocharger": null,
        "exhaustSystem": null,
        "coolingSystem": null,
        "battery": null,
        "distributor": null,
        "alternator": null,
        "lights": null,
        "regulator": null,
        "wiring": null,
        "transmission": null,
        "transferCase": null,
        "driveShaft": null,
        "frontAxle": null,
        "parkingBrake": null,
        "serviceBrake": null,
        "airSystem": null,
        "tires": null,
        "tracks": null,
        "wheels": null,
        "steeringGear": null,
        "hydraulicSystem": null,
        "frame": null,
        "towingConnection": null,
        "shockAbsorbers": null,
        "springs": null,
        "fender": null,
        "hood": null,
        "body": null,
        "cabin": null,
        "vehicleFloor": null,
        "glass": null,
        "interiorTrim": null,
        "seatsAndUpholster": null,
        "vehicleAccessories": null,
        "instrumentCluster": null,
        "dateOfInspection": null,
        "mechanicName": null,
        "remarks": null,
        "user": 0,
        "owner": null