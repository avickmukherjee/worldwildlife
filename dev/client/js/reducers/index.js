import {combineReducers} from 'redux';
import AnimalReducer from './AnimalReducer';
import BirdReducer from './BirdReducer';
import ReptileReducer from './ReptileReducer';
import CommonReducer from './CommonReducer';




const allReducers = combineReducers({    
    animals : AnimalReducer,
    birds: BirdReducer,
    reptiles: ReptileReducer,
    speciesData: CommonReducer
});

export default allReducers;
