import { connect } from "react-redux";
import setScorecardVisibility from "../actions/setScorecardVisibility";
import Scorecard from "../components/Scorecard";

const mapStateToProps = state => ({
    scorecardVisibility: state.scorecardVisibility
});

const mapDispatchToProps = dispatch => ({
    setScorecardVisibility: visibility => dispatch(setScorecardVisibility(visibility))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Scorecard);
