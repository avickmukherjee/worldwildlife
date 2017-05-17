//Imoporting from Constants
import {GET_ALL_ANIMALS,RESET_ANIMALS} from '../Constants/';

export const defaultState = {
  animals: []
};

export default function (state = defaultState, action) {

    switch (action.type) {
        case GET_ALL_ANIMALS:        
        	return [...state,{       
		        animals: action.animals
		      }]          
            break;
          case RESET_ANIMALS:
           return defaultState;
           break; 
      		return state;     
    }
    return state;
}
