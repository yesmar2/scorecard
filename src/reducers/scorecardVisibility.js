const scorecardVisibility = (state = "closed", action) => {
    switch (action.type) {
        case "SET_SCORECARD_VISIBILITY":
            return action.visibility;
        default:
            return state;
    }
};

export default scorecardVisibility;
