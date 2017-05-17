//Imoporting from Constants
import {GET_ALL_REPTILES,RESET_REPTILES} from '../Constants/';

export const defaultState = {
  reptiles: []
};

export default function (state = defaultState, action) {

    switch (action.type) {
        case GET_ALL_REPTILES:        
        	return [...state,{       
		        reptiles: action.reptiles
		      }]          
            break; 
             case RESET_REPTILES:
           return defaultState;
           break; 
      		return state;     
    }
    return state;
}
