const golfRound = (state = [], action) => {
    switch (action.type) {
        case "ENTER_SCORE":
            console.log(state);
            return [
                ...state,
                {
                    hole: action.hole,
                    score: action.score
                }
            ];
        default:
            return state;
    }
};

export default golfRound;
