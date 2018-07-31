import React, { Component } from "react";
import "./Scorecard.css";

class Scorecard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="scorecard">
                <table cellPadding="0" cellSpacing="0">
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
                            <td>5</td>
                            <td>4</td>
                            <td>5</td>
                            <td>6</td>
                            <td>6</td>
                            <td>4</td>
                            <td />
                            <td />
                            <td />
                            <td>30</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
export default Scorecard;
