//axios - Promise based HTTP client for the browser and node.js
import request from 'axios';

//Imoporting from Constants
import {GET_ALL_ANIMALS,GET_ALL_BIRDS,GET_ALL_REPTILES ,LIKE_INCREMENT_REPTILE,LIKE_INCREMENT_BIRD,LIKE_INCREMENT_ANIMAL,GET_SPECIES_DETAILS_BY_ID,RESET_SPECIES_DETAIL,RESET_REPTILES,RESET_BIRDS,RESET_ANIMALS} from '../Constants/';
import axios from 'axios';

//Action  increment like
export const likeIncrement = (index,speciesType,speciesId) => {

	return function(dispatch,getState) {
		var typeAction = '';
		if(speciesType == 'Birds'){
			typeAction = LIKE_INCREMENT_BIRD;
			const { birds } = getState();
			var currentStateVal = birds;
		}else if(speciesType == 'Animals'){
			typeAction = LIKE_INCREMENT_ANIMAL;
			const { animals } = getState();
			var currentStateVal = animals;
		}else if(speciesType == 'Reptiles'){
			typeAction = LIKE_INCREMENT_REPTILE;
			const { reptiles } = getState();
			var currentStateVal = reptiles;
		}
		const postData = {"Animals": {"id": speciesId}};
		console.log("index=>",index)
		axios.post('http://worldwildlife.appexwebsolutions.com/backend/animals/increaseLike.json', postData)
				.then(response => {
					if(response.data.message == 'Saved'){
						dispatch({
						 type: typeAction,
						 prevStateVal : currentStateVal ,
						 like_count: response.data.like_count,
						 id:response.data.id,
						 index: index
					 });
					}
					})
					.catch((error) => {
			      console.log(error);
			    })
		  }
}
//Action  Get All Animals Called
export const getAllAnimals = () => {
	return function(dispatch) {
		    axios.get(`http://worldwildlife.appexwebsolutions.com/backend/Animals/getAllAnimals.json`)
		    .then(response => {
		      dispatch({
		        type: GET_ALL_ANIMALS,
		        animals: response.data
		      });
		    })
		    .catch((error) => {
		      console.log(error);
		    })
		  }
}

//Action Get All Birds Called
export const getAllBirds = () => {
	return function(dispatch) {
		    axios.get(`http://worldwildlife.appexwebsolutions.com/backend/Animals/getAllBirds.json`)
		    .then(response => {
		      dispatch({
		        type: GET_ALL_BIRDS,
		        birds: response.data
		      });
		    })
		    .catch((error) => {
		      console.log(error);
		    })
		  }
}

//Action Get All Reptiles Called
export const getAllReptiles = () => {
	return function(dispatch) {
		    axios.get(`http://worldwildlife.appexwebsolutions.com/backend/Animals/getAllReptiles.json`)
		    .then(response => {
		      dispatch({
		        type: GET_ALL_REPTILES,
		        reptiles: response.data
		      });
		    })
		    .catch((error) => {
		      console.log(error);
		    })
		  }
}

//Action  Get Species By Id called
export const getSpeciesDetailById = (id) => {

	return function(dispatch) {
		    axios.get(`http://worldwildlife.appexwebsolutions.com/backend/Animals/view/`+id+`.json`)
		    .then(response => {
		      dispatch({
		        type: GET_SPECIES_DETAILS_BY_ID,
		        speciesData: response.data.animal
		      });
		    })
		    .catch((error) => {
		      console.log(error);
		    })
		  }
}


//Action  reset species detail

export function resetSpeciesDetail() {
  return dispatch => {
    dispatch({ type: RESET_SPECIES_DETAIL });
  };
}

export function resetBirds() {
  return dispatch => {
    dispatch({ type: RESET_BIRDS });
  };
}

export function resetReptiles() {
  return dispatch => {
    dispatch({ type: RESET_REPTILES });
  };
}
export function resetAnimals() {
  return dispatch => {
    dispatch({ type: RESET_ANIMALS });
  };
}
