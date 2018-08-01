const scorePosition = (state = [], action) => {
    switch (action.type) {
        case "SET_SCORE_POSITION":
            console.log(action.scorePosition);
            return [
                ...state,
                {
                    scorePosition: action.scorePosition
                }
            ];
        default:
            return state;
    }
};

export default scorePosition;
