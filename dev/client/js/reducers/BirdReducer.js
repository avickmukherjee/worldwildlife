//Imoporting from Constants
import {GET_ALL_BIRDS,RESET_BIRDS,LIKE_INCREMENT_BIRD} from '../Constants/';

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
           case LIKE_INCREMENT_BIRD:

           for (var i = 0; i < action.prevStateVal[0]['birds'].length; i++) {
              if( action.index==i){
                console.log("I am from Bird",action.like_count);
                action.prevStateVal[0]['birds'][i]['like_count']=action.like_count;
              }
            }
            var birdsArray = action.prevStateVal[0]['birds'];
           return [ {birds : birdsArray}];
           break;
           default:
      		return state;
    }
}
