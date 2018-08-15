import { combineReducers } from "redux";
import scorePosition from "./scorePosition";
import golfRound from "./golfRound";

export default combineReducers({
    scorePosition,
    golfRound
});
