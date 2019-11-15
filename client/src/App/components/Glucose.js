import React, { Component } from "react";

class Glucose extends Component {
  render() {
    return (

        <div className="container">
            <div className="row">

                {/* ROW */}
                <div className="col-lg-12">
                    <h1>Glucose Calculation</h1>

                    {/* SPACING */}
                    <hr style={{width: "100%", color: "light-grey", height: "1px", backgroundColor: "light-grey", marginTop: "40px", marginBottom: "40px"}}/>

                </div>

                {/* ROW */}
                <div className="col-lg-6">
                    <div className="form-group">
                        {/* Glucose Level */}
                        <label for="glucoseLevel">Glucose Level</label>
                        <input type="number" className="form-control" id="glucoseLevel"/>
                        <small id="" className="form-text text-muted"></small>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form-group">
                        {/* TIME */}
                        <label for="time">When did you collect?</label>
                        <input type="time" className="form-control" id="time"/>
                        <small id="" className="form-text text-muted"></small>
                    </div>
                </div>
                <div class="col-lg-12">
                    {/* SUBMIT BUTTON */}
                    <button type="submit" class="btn btn-primary">submit</button>
                </div>

            </div>
        </div>

    );
  }
}

export default Glucose;
