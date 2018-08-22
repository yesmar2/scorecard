import { connect } from "react-redux";
import Scorecard from "../Scorecard";

const mapStateToProps = state => ({
    scorecardVisibility: state.scorecardVisibility
});

export default connect(mapStateToProps)(Scorecard);
