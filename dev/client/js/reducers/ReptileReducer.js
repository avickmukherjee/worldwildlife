//Imoporting from Constants
import {GET_ALL_REPTILES,RESET_REPTILES,LIKE_INCREMENT_REPTILE} from '../Constants/';

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
           case LIKE_INCREMENT_REPTILE:
           for (var i = 0; i < action.prevStateVal[0]['reptiles'].length; i++) {
              if( action.index==i){
                action.prevStateVal[0]['reptiles'][i]['like_count']=action.like_count;
              }
            }
            var reptilesArray = action.prevStateVal[0]['reptiles'];
           return [ {reptiles : reptilesArray}];
           break;
           default:
      		return state;
    }
}
