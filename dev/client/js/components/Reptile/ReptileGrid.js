import React from 'react';
import { Link } from 'react-router';

import { connect } from 'react-redux';
import SinlgeSpecies  from '../common/SinlgeSpecies';
import { PropTypes } from 'react'

const ReptileGrid = (props) => {
 
    const reptileObjects = props.reptileObj; 

    return (
            <div>       
                {      
                  reptileObjects.map((reptile, index) => (
                    <div key={index}>
                      <SinlgeSpecies  speciesDetail={reptile} />
                    </div>
                  ))
                }          
            </div>
        )
}

const mapStateToProps = () => ({});
const mapDispatchToProps = ({ });
export default connect(mapStateToProps, mapDispatchToProps)(ReptileGrid);