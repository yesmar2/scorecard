import React, { Component } from "react";
import "./Scorecard.css";

class Scorecard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { scorecardVisibility, setScorecardVisibility } = this.props;
        return (
            <div className={`scorecard ${scorecardVisibility}`}>
                <button className=" close-icon" onClick={() => this.props.setScorecardVisibility("closed")}>
                    <i className="material-icons">close</i>
                </button>
                {/* <table cellPadding="0" cellSpacing="0">
                    <thead>
                        <tr>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                            <td>8</td>
                            <td>9</td>
                            <td>T</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div ref={this.refCallback} style={{ opacity: 0 }}>
                                    1
                                </div>
                            </td>
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                            <td />
                        </tr>
                    </tbody>
                </table> */}
            </div>
        );
    }
}

export default Scorecard;
