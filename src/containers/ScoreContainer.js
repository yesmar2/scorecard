import { connect } from "react-redux";
import enterScore from "../actions/enterScore";
import Score from "../components/Score";

const mapDispatchToProps = dispatch => ({
    enterScore: (hole, score) => dispatch(enterScore(hole, score))
});

export default connect(
    null,
    mapDispatchToProps
)(Score);
