//Imoporting from Constants
import {GET_ALL_ANIMALS,RESET_ANIMALS,LIKE_INCREMENT_ANIMAL} from '../Constants/';

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
           case LIKE_INCREMENT_ANIMAL:
           for (var i = 0; i < action.prevStateVal[0]['animals'].length; i++) {
              if( action.index==i){
                action.prevStateVal[0]['animals'][i]['like_count']=action.like_count;
              }
            }
          var animalArray = action.prevStateVal[0]['animals'];
           return [ {animals : animalArray}];
         break;
          default:
      		return state;
    }
}
