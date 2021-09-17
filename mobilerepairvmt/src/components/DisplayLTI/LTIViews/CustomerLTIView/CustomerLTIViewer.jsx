import React,{useEffect } from "react";

const DisplayLTI = ({ CustomerLti, getLti }) => {
  useEffect(()=>{
    getLti()
  }, [])
  return (
    <React.Fragment>
      <h1>My LTI's</h1>

      <table responsive className="table table-striped">
        <thead>
          <tr></tr>
          <tr>
            <th>Type Of Vehicle</th>
            <th>Vehicle Year</th>
            <th>Vehicle Make</th>
            <th>Vehicle Model</th>
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
            <th>Remarks</th>
          </tr>
          <tr></tr>
        </thead>
        <tbody>
          {CustomerLti.map((lti) => {
            return (
              <tr key={lti.CustomerLtiId}>
                <td>{lti.typeOfVehicle}</td>
                <td>{lti.vehicleYear}</td>
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
              </tr>
            );
          })}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default DisplayLTI;
