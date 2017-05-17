import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import SinlgeSpecies  from '../common/SinlgeSpecies';
import { PropTypes } from 'react'

const AnimalGrid = (props) => {

    const animalObjects = props.animalObj;   
    return(
		<div>       
            {      
              animalObjects.map((animal, index) => (
                <div key={index}>
                  <SinlgeSpecies  speciesDetail={animal} />
                </div>
              ))
            }        
        </div>
	   )
}

const mapStateToProps = () => ({});
const mapDispatchToProps = ({ });
export default connect(mapStateToProps, mapDispatchToProps)(AnimalGrid);