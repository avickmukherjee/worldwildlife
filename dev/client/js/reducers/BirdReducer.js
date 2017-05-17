//Imoporting from Constants
import {GET_ALL_BIRDS,RESET_BIRDS} from '../Constants/';

export const defaultState = {
  birds: []
};

export default function (state = defaultState, action) {

    switch (action.type) {
        case GET_ALL_BIRDS:        
        	return [...state,{       
		        birds: action.birds
		      }]          
            break; 
          case RESET_BIRDS:
           return defaultState;
           break; 
      		return state;     
    }
    return state;
}
