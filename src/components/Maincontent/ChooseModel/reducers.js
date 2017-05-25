import { Map, List } from 'immutable';

// Just ease ESLint rule
const map = Map;
const list = List;

const defaultState = map({
    selectState: {
        status: false,
        // visibility: 'hidden',
        // opacity: 0
    }

});

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'CHOOSE_MODEL_SET_VISIBILITY':
            return Object.assign({}, state, {selectState: {
                status: action.status,
                // visibility: action.visibility,
                // opacity: action.opacity
                }
            });

        default:
            return state;
    }
};
