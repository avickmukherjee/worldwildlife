import React from 'react';
import {connect} from 'react-redux';


const SpeciesDetailHeader = (props) =>{
	var speciesName ="";
	if (props.speciesDetail !=undefined && props.speciesDetail[0] != undefined) {
		speciesName = props.speciesDetail[0].speciesData.name;
	}
	return(
			 <div className="row">
			            <div className="col-lg-12">
			                <h1 className="page-header">{speciesName}</h1>
			            </div>
			        </div>     
	)
}
const mapStateToProps = () => ({});
const mapDispatchToProps = ({ });
export default connect(mapStateToProps, mapDispatchToProps)(SpeciesDetailHeader);