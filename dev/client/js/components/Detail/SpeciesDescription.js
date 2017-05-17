import React from 'react';
import {connect} from 'react-redux';


const SpeciesDescription = (props) =>{
	var speciesDesc ="";
	if (props.speciesDetail !=undefined && props.speciesDetail[0] != undefined ) {		
		speciesDesc = props.speciesDetail[0].speciesData.description;
	}
	return(
			  <div >
			  	<h4>
			  	{speciesDesc}
                </h4>
            </div>   
	)
}
const mapStateToProps = () => ({});
const mapDispatchToProps = ({ });
export default connect(mapStateToProps, mapDispatchToProps)(SpeciesDescription);