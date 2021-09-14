import React from "react";
import { useState } from "react";
import { Redirect } from "react-router";
import useForm from "../UseForm/useForm.jsx";



const Lti = (props) => {
  const { values, handleChange, handleSubmit } = useForm(addLti);
  const [willRedirect, setWillRedirect] = useState(false);
  function addLti() {
    props.createCustomerLti(values);
    console.log(values);
    setWillRedirect(true);
  }
  if (willRedirect === false) {
    return (
      <React.Fragment>
        <div className="container ">
          <div>
            <div className="block">
              <div>
                <form onSubmit={handleSubmit}>
                  <h1 className="h3 mb-3 fw-normal col-md-3 center">
                    Please fill in
                  </h1>
                  <div className="col-md-5 accordion-body center">
                    <div className="top-left">
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
                        <label for="floatingInput">Type Of Vehicle</label>
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
                        <label for="floatingvehicleYear">Vehicle Year</label>
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
                        <label for="floatingvehicleMake">Vehicle Make</label>
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
                        <label for="floatingvehicleMileage">
                          vehicleMileage
                        </label>
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
                        <label for="floatingdieselMultiFuel">
                          dieselMultiFuel
                        </label>
                      </div>
                      <div className="form-floating">
                        <input
                          name="turbocharger"
                          type="text"
                          className="form-control"
                          id="floatingturbocharger"
                          placeholder="turbocharger"
                          onChange={handleChange}
                          values={values.turbocharger}
                        />
                        <label for="floatingturbocharger">turbocharger</label>
                      </div>
                      <div className="form-floating">
                        <input
                          name="exhaustSystem"
                          type=""
                          className="form-control"
                          id="floatingexhaustSystem"
                          placeholder="exhaustSystem"
                          onChange={handleChange}
                          values={values.exhaustSystem}
                        />
                        <label for="floatingexhaustSystem">exhaustSystem</label>
                      </div>
                      <div className="form-floating">
                        <input
                          name="coolingSystem"
                          type=""
                          className="form-control"
                          id="floatingcoolingSystem"
                          placeholder=""
                          onChange={handleChange}
                          values={values.coolingSystem}
                        />
                        <label for="floatingcoolingSystemd">
                          coolingSystem
                        </label>
                      </div>

                      <div className="form-floating">
                        <input
                          name="battery"
                          type=""
                          className="form-control"
                          id="floatingbattery"
                          placeholder="battery"
                          onChange={handleChange}
                          values={values.battery}
                        />
                        <label for="floatingbattery">battery</label>
                      </div>
                      <div className="form-floating">
                        <input
                          name="distributor"
                          type=""
                          className="form-control"
                          id="floatingdistributor"
                          placeholder="distributor"
                          onChange={handleChange}
                          values={values.distributor}
                        />
                        <label for="floatingdistributor">distributor</label>
                      </div>
                    </div>
                    <div className="top-center">
                      <br></br>
                      <div className="form-floating">
                        <input
                          name="alternator"
                          type=""
                          className="form-control"
                          id="floatingalternator"
                          placeholder="alternator"
                          onChange={handleChange}
                          values={values.alternator}
                        />
                        <label for="floatingalternator">alternator</label>
                      </div>
                      <div className="form-floating">
                        <input
                          name="lights"
                          type=""
                          className="form-control"
                          id="floatinglights"
                          placeholder="lights"
                          onChange={handleChange}
                          values={values.lights}
                        />
                        <label for="floatinglights">lights</label>
                      </div>
                      <div className="form-floating">
                        <input
                          name="regulator"
                          type=""
                          className="form-control"
                          id="floatingregulator"
                          placeholder="regulator"
                          onChange={handleChange}
                          values={values.regulator}
                        />
                        <label for="floatingregulator">regulator</label>
                      </div>
                      <div className="form-floating">
                        <input
                          name="wiring"
                          type=""
                          className="form-control"
                          id="floatingwiring"
                          placeholder="wiring"
                          onChange={handleChange}
                          values={values.wiring}
                        />
                        <label for="floatingwiring">wiring</label>
                      </div>
                      <div className="form-floating">
                        <inputtransmission
                          name=""
                          type=""
                          className="form-control"
                          id="floatingtransmission"
                          placeholder="transmission"
                          onChange={handleChange}
                          values={values.transmission}
                        />
                        <label for="floatingtransmission">transmission</label>
                      </div>
                      <div className="form-floating">
                        <input
                          name="transferCase"
                          type=""
                          className="form-control"
                          id="floatingtransferCase"
                          placeholder="transferCase"
                          onChange={handleChange}
                          values={values.transferCase}
                        />
                        <label for="floatingtransferCase">transferCase</label>
                      </div>
                      <div className="form-floating">
                        <input
                          name="driveShaft"
                          type=""
                          className="form-control"
                          id="floatingdriveShaft"
                          placeholder="driveShaft"
                          onChange={handleChange}
                          values={values.driveShaft}
                        />
                        <label for="floatingdriveShaft">driveShaft</label>
                      </div>
                      <div className="form-floating">
                        <input
                          name="frontAxle"
                          type=""
                          className="form-control"
                          id="floatingfrontAxle"
                          placeholder="frontAxle"
                          onChange={handleChange}
                          values={values.frontAxle}
                        />
                        <label for="floatingfrontAxle">frontAxle</label>
                      </div>
                      <div className="form-floating">
                        <input
                          name="parkingBrake"
                          type=""
                          className="form-control"
                          id="floatingparkingBrake"
                          placeholder="parkingBrake"
                          onChange={handleChange}
                          values={values.parkingBrake}
                        />
                        <label for="floatingparkingBrake">parkingBrake</label>
                      </div>
                      <div className="form-floating">
                        <input
                          name="serviceBrake"
                          type=""
                          className="form-control"
                          id="floatingserviceBrake"
                          placeholder="serviceBrake"
                          onChange={handleChange}
                          values={values.serviceBrake}
                        />
                        <label for="floatingserviceBrake">serviceBrake</label>
                      </div>

                      <div className="form-floating">
                        <input
                          name="airSystem"
                          type=""
                          className="form-control"
                          id="floatingairSystem"
                          placeholder="airSystem"
                          onChange={handleChange}
                          values={values.airSystem}
                        />
                        <label for="floatingairSystem">airSystem</label>
                      </div>
                      <div className="form-floating">
                        <input
                          name="tires"
                          type=""
                          className="form-control"
                          id="floatingtires"
                          placeholder="tires"
                          onChange={handleChange}
                          values={values.tires}
                        />
                        <label for="floatingtires">tires</label>
                      </div>
                      <div className="form-floating">
                        <input
                          name="wheels"
                          type=""
                          className="form-control"
                          id="floatingwheels"
                          placeholder="wheels"
                          onChange={handleChange}
                          values={values.wheels}
                        />
                        <label for="floatingwheels">wheels</label>
                      </div>
                      <div className="form-floating">
                        <input
                          name="steeringGear"
                          type=""
                          className="form-control"
                          id="floatingsteeringGear"
                          placeholder="steeringGear"
                          onChange={handleChange}
                          values={values.steeringGear}
                        />
                        <label for="floatingsteeringGear">steeringGear</label>
                      </div>
                      <div className="form-floating">
                        <input
                          name="hydraulicSystem"
                          type=""
                          className="form-control"
                          id="floatinghydraulicSystem"
                          placeholder="hydraulicSystem"
                          onChange={handleChange}
                          values={values.hydraulicSystem}
                        />
                        <label for="floatinghydraulicSystem">
                          hydraulicSystem
                        </label>
                      </div>
                      <div className="form-floating">
                        <input
                          name="frame"
                          type=""
                          className="form-control"
                          id="floatingframe"
                          placeholder="frame"
                          onChange={handleChange}
                          values={values.frame}
                        />
                        <label for="floatingframe">frame</label>
                      </div>
                    </div>
                    <div className="top-right">
                      <br></br>
                      <div className="form-floating">
                        <input
                          name="towingConnection"
                          type=""
                          className="form-control"
                          id="floatingtowingConnection"
                          placeholder="towingConnection"
                          onChange={handleChange}
                          values={values.towingConnection}
                        />
                        <label for="floatingtowingConnectiond">
                          towingConnection
                        </label>
                      </div>
                      <div className="form-floating">
                        <input
                          name="shockAbsorbers"
                          type=""
                          className="form-control"
                          id="floatingshockAbsorbers"
                          placeholder="shockAbsorbers"
                          onChange={handleChange}
                          values={values.shockAbsorbers}
                        />
                        <label for="floatingshockAbsorbers">
                          shockAbsorbers
                        </label>
                      </div>
                      <div className="form-floating">
                        <input
                          name="springs"
                          type=""
                          className="form-control"
                          id="floatingsprings"
                          placeholder="springs"
                          onChange={handleChange}
                          values={values.springs}
                        />
                        <label for="floatingsprings">springs</label>
                      </div>
                      <div className="form-floating">
                        <input
                          name="fender"
                          type=""
                          className="form-control"
                          id="floatingfender"
                          placeholder="fender"
                          onChange={handleChange}
                          values={values.fender}
                        />
                        <label for="floatingfender">fender</label>
                      </div>
                      <div className="form-floating">
                        <input
                          name="hood"
                          type=""
                          className="form-control"
                          id="floatinghood"
                          placeholder="hood"
                          onChange={handleChange}
                          values={values.hood}
                        />
                        <label for="floatinghood">hood</label>
                      </div>
                      <div className="form-floating">
                        <input
                          name="body"
                          type=""
                          className="form-control"
                          id="floatingbody"
                          placeholder="body"
                          onChange={handleChange}
                          values={values.body}
                        />
                        <label for="floatingbody">body</label>
                      </div>
                      <div className="form-floating">
                        <input
                          name="cabin"
                          type=""
                          className="form-control"
                          id="floatingcabin"
                          placeholder="cabin"
                          onChange={handleChange}
                          values={values.cabin}
                        />
                        <label for="floatingcabin">cabin</label>
                      </div>
                      <div className="form-floating">
                        <input
                          name="vehicleFloor"
                          type=""
                          className="form-control"
                          id="floatingvehicleFloor"
                          placeholder="vehicleFloor"
                          onChange={handleChange}
                          values={values.vehicleFloor}
                        />
                        <label for="floatingvehicleFloor">vehicleFloor</label>
                      </div>
                      <div className="form-floating">
                        <input
                          name="glass"
                          type=""
                          className="form-control"
                          id="floatingglass"
                          placeholder="glass"
                          onChange={handleChange}
                          values={values.glass}
                        />
                        <label for="floatingglass">glass</label>
                      </div>
                      <div className="form-floating">
                        <input
                          name="interiorTrim"
                          type=""
                          className="form-control"
                          id="floatinginteriorTrim"
                          placeholder="interiorTrim"
                          onChange={handleChange}
                          values={values.interiorTrim}
                        />
                        <label for="floatinginteriorTrim">interiorTrim</label>
                      </div>
                      <div className="form-floating">
                        <input
                          name="seatsAndUpholster"
                          type=""
                          className="form-control"
                          id="floatingseatsAndUpholster"
                          placeholder="seatsAndUpholster"
                          onChange={handleChange}
                          values={values.seatsAndUpholster}
                        />
                        <label for="floatingseatsAndUpholster">
                          seatsAndUpholster
                        </label>
                      </div>
                      <div className="form-floating">
                        <input
                          name="vehicleAccessories"
                          type=""
                          className="form-control"
                          id="floatingvehicleAccessories"
                          placeholder=""
                          onChange={handleChange}
                          values={values.vehicleAccessories}
                        />
                        <label for="floatingvehicleAccessories">
                          vehicleAccessories
                        </label>
                      </div>
                      <div className="form-floating">
                        <input
                          name="instrumentCluster"
                          type=""
                          className="form-control"
                          id="floatinginstrumentCluster"
                          placeholder="instrumentCluster"
                          onChange={handleChange}
                          values={values.instrumentCluster}
                        />
                        <label for="floatinginstrumentCluster">
                          instrumentCluster
                        </label>
                      </div>
                      <div className="form-floating">
                        <input
                          name="dateOfInspection"
                          type="date"
                          className="form-control"
                          id="floatingdateOfInspection"
                          placeholder="dateOfInspection"
                          onChange={handleChange}
                          values={values.dateOfInspection}
                        />
                        <label for="floatingdateOfInspection">
                          dateOfInspection
                        </label>
                      </div>
                      <div className="form-floating">
                        <input
                          name="mechanicName"
                          type=""
                          className="form-control"
                          id="floatingmechanicName"
                          placeholder="mechanicName"
                          onChange={handleChange}
                          values={values.mechanicName}
                        />
                        <label for="floatingmechanicName">mechanicName</label>
                      </div>
                      <div className="form-floating">
                        <input
                          name="remarks"
                          type=""
                          className="form-control"
                          id="floatingremarks"
                          placeholder="remarks"
                          onChange={handleChange}
                          values={values.remarks}
                        />
                        <label for="floatingremarks">remarks</label>
                      </div>

                      <button
                        className="w-10 btn btn-lg btn-primary"
                        type="submit"
                      >
                        Sumbit
                      </button>
                      <p className="mt-5 mb-3 text-muted">© 2021</p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  } else {
    return <Redirect to="/" />;
  }
};

export default Lti;
