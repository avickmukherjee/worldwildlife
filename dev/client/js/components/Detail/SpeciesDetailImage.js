import React from 'react';
import {connect} from 'react-redux';


const SpeciesDetailImage = (props) =>{
	var speciesImage ="";
	if (props.speciesDetail !=undefined && props.speciesDetail[0] != undefined ) {
		
		const speciesName = props.speciesDetail[0].speciesData.species.name;
		const speciesImageName = props.speciesDetail[0].speciesData.thumbnail_pic;
		speciesImage = "http://www.worldwildlife.appexwebsolutions.com/backend/img/"+speciesName+"/"+speciesImageName;
	}
	return(
			  <div className="item">
                <img className="img-responsive" src={speciesImage} alt=""></img>
            </div>   
	)
}
const mapStateToProps = () => ({});
const mapDispatchToProps = ({ });
export default connect(mapStateToProps, mapDispatchToProps)(SpeciesDetailImage);