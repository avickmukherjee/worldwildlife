//axios - Promise based HTTP client for the browser and node.js
import request from 'axios';

//Imoporting from Constants
import {GET_ALL_ANIMALS,GET_ALL_BIRDS,GET_ALL_REPTILES ,GET_SPECIES_DETAILS_BY_ID,RESET_SPECIES_DETAIL,RESET_REPTILES,RESET_BIRDS,RESET_ANIMALS} from '../Constants/';
import axios from 'axios';


//Action  Get All Animals Called
export const getAllAnimals = () => {
	return function(dispatch) {
		    axios.get(`http://worldwildlife.appexwebsolutions.com/backend/Animals/getAllAnimals.json`)
		    .then(response => {
		      dispatch({
		        type: GET_ALL_ANIMALS,
		        animals: response.data.animals
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
		        birds: response.data.animals
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
		        reptiles: response.data.animals
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
