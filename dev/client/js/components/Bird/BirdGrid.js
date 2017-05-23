import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import SinlgeSpecies  from '../common/SinlgeSpecies';
import { PropTypes } from 'react'

const BirdGrid = (props) => {

  const birdObjects = props.birdObj;

    return(
		<div>
            {
              birdObjects.map((bird, index) => (
                <div key={index}>
                  <SinlgeSpecies  {...props} speciesDetail={bird} indexNum= {index} />
                </div>
              ))
            }
        </div>
	   )
}


const mapStateToProps = () => ({});
const mapDispatchToProps = ({ });
export default connect(mapStateToProps, mapDispatchToProps)(BirdGrid);
