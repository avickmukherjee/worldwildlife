//Imoporting from Constants
import {GET_SPECIES_DETAILS_BY_ID,RESET_SPECIES_DETAIL} from '../Constants/';

export const defaultState = {
  speciesData: []
};

export default function (state = defaultState, action) {

    switch (action.type) {
        case GET_SPECIES_DETAILS_BY_ID:        
        	return [...state,{       
		        speciesData: action.speciesData
		      }]          
            break; 
        case RESET_SPECIES_DETAIL:
           return defaultState;
           break; 
      		return state;     
    }
    return state;
}
