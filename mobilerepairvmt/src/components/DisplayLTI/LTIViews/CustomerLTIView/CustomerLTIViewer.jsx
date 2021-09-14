import React from "react";

const DisplayLTI = (props) => {
  const filterServices = props.CustomerLti.filter(
    (CustomerLti) =>
      CustomerLti.typeOfVehicle ||
      CustomerLti.vehicleMake ||
      CustomerLti.vehicleModel ||
      CustomerLti.vehicleMileage ||
      CustomerLti.vinNumber ||
      CustomerLti.engine ||
      CustomerLti.clutch ||
      CustomerLti.carburetor ||
      CustomerLti.fuelPump ||
      CustomerLti.dieselMultiFuel ||
      CustomerLti.turbocharger ||
      CustomerLti.exhaustSystem ||
      CustomerLti.coolingSystem ||
      CustomerLti.battery ||
      CustomerLti.distributor ||
      CustomerLti.alternator ||
      CustomerLti.lights ||
      CustomerLti.regulator ||
      CustomerLti.wiring ||
      CustomerLti.transmission ||
      CustomerLti.transferCase ||
      CustomerLti.driveShaft ||
      CustomerLti.frontAxle ||
      CustomerLti.parkingBrake ||
      CustomerLti.serviceBrake ||
      CustomerLti.airSystem ||
      CustomerLti.tires ||
      CustomerLti.wheels ||
      CustomerLti.steeringGear ||
      CustomerLti.hydraulicSystem ||
      CustomerLti.frame ||
      CustomerLti.towingConnection ||
      CustomerLti.shockAbsorbers ||
      CustomerLti.springs ||
      CustomerLti.fender ||
      CustomerLti.hood ||
      CustomerLti.body ||
      CustomerLti.cabin ||
      CustomerLti.vehicleFloor ||
      CustomerLti.glass ||
      CustomerLti.interiorTrim ||
      CustomerLti.seatsAndUpholster ||
      CustomerLti.vehicleAccessories ||
      CustomerLti.instrumentCluster ||
      CustomerLti.dateOfInspection ||
      CustomerLti.remarks
  );
  console.log(filterServices);
  return (
    <React.Fragment>
      <h1>My LTI's</h1>

      <table responsive className="table table-striped">
        <thead>
          <tr></tr>
          <tr>
            <th>Type Of Vehicle</th>
            <th>Vehicle Make</th>
            <th>Vehicle Mileage</th>
            <th>Vin Number</th>
            <th>Engine</th>
            <th>Clutch</th>
            <th>Carburetor</th>
            <th>Fuel Pump</th>
            <th>Diesel MultiFuel</th>
            <th>Turbocharger</th>
            <th>Exhaust System</th>
            <th>Cooling System</th>
            <th>Battery</th>
            <th>Distributor</th>
            <th>Alternator</th>
            <th>Lights</th>
            <th>Regulator</th>
            <th>Riring</th>
            <th>Transmission</th>
            <th>Transfer Case</th>
            <th>Drive Shaft</th>
            <th>Front Axle</th>
          </tr>
          <tr></tr>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <tr></tr>
          <tr>
            <th>Parking Brake</th>
            <th>Service Brake</th>
            <th>Air System</th>
            <th>Tires</th>
            <th>Wheels</th>
            <th>Steering Gear</th>
            <th>Hydraulic System</th>
            <th>Frame</th>
            <th>Towing Connection</th>
            <th>Shock Absorbers</th>
            <th>Springs</th>
            <th>Fender</th>
            <th>Hood</th>
            <th>Body</th>
            <th>Cabin</th>
            <th>Vehicle Floor</th>
            <th>Glass</th>
            <th>Interior Trim</th>
            <th>Seats And Upholster</th>
            <th>Vehicle Accessories</th>
            <th>Instrument Cluster</th>
            <th>Date Of Inspection</th>
          </tr>
          <tr></tr>
          <br></br>
          <br></br>
          <br></br>
          <tr></tr>
          <tr>
            <th>Remarks</th>
          </tr>
          <tr></tr>
        </thead>
        <tbody>
          {filterServices.map((lti) => {
            return (
              <tr key={lti.Id}>
                <td>{lti.typeOfVehicle}</td>
                <td>{lti.vehicleMake}</td>
                <td>{lti.vehicleModel}</td>
                <td>{lti.vehicleMileage}</td>
                <td>{lti.vinNumber}</td>
                <td>{lti.engine}</td>
                <td>{lti.clutch}</td>
                <td>{lti.carburetor}</td>
                <td>{lti.fuelPump}</td>
                <td>{lti.dieselMultiFuel}</td>
                <td>{lti.turbocharger}</td>
                <td>{lti.exhaustSystem}</td>
                <td>{lti.coolingSystem}</td>
                <td>{lti.battery}</td>
                <td>{lti.distributor}</td>
                <td>{lti.alternator}</td>
                <td>{lti.lights}</td>
                <td>{lti.regulator}</td>
                <td>{lti.wiring}</td>
                <td>{lti.transmission}</td>
                <td>{lti.transferCase}</td>
                <td>{lti.driveShaft}</td>
                <td>{lti.frontAxle}</td>
                <td>{lti.parkingBrake}</td>
                <td>{lti.serviceBrake}</td>
                <td>{lti.airSystem}</td>
                <td>{lti.tires}</td>
                <td>{lti.wheels}</td>
                <td>{lti.steeringGear}</td>
                <td>{lti.hydraulicSystem}</td>
                <td>{lti.frame}</td>
                <td>{lti.towingConnection}</td>
                <td>{lti.shockAbsorbers}</td>
                <td>{lti.springs}</td>
                <td>{lti.fender}</td>
                <td>{lti.hood}</td>
                <td>{lti.body}</td>
                <td>{lti.cabin}</td>
                <td>{lti.vehicleFloor}</td>
                <td>{lti.glass}</td>
                <td>{lti.interiorTrim}</td>
                <td>{lti.seatsAndUpholster}</td>
                <td>{lti.vehicleAccessories}</td>
                <td>{lti.instrumentCluster}</td>
                <td>{lti.dateOfInspection}</td>
                <td>{lti.remarks}</td>

                <td>
                  {/* <button onClick={() => props.addToCart(service)}>
                    Add to Cart
                  </button> */}
                </td>
                <td></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default DisplayLTI;
