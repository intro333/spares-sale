import { combineReducers } from 'redux';
import { List, Map, OrderedMap } from 'immutable';

import chooseModel from './components/Maincontent/ChooseModel/reducers';


export default combineReducers({
    chooseModel,

});
