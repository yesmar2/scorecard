import { combineReducers } from "redux";
import scorecardVisibility from "./scorecardVisibility";
import golfRound from "./golfRound";

export default combineReducers({
    scorecardVisibility,
    golfRound
});
