import React from 'react';
import {getSpeciesDetailById,resetSpeciesDetail} from '../../actions/';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import SpeciesDetailHeader from './SpeciesDetailHeader';
import SpeciesDetailImage from './SpeciesDetailImage';
import SpeciesDescription from './SpeciesDescription';

class SpeciesDetail extends React.Component  {

	constructor(props){
        super(props);
    }

    componentDidMount() {

       if(this.props.params.id !=undefined){
       	 const {getSpeciesDetailById } = this.props;
    	 const speciesId = this.props.params.id;
       	 getSpeciesDetailById(speciesId);
       }
    }

    componentWillUnmount() {
    	const {resetSpeciesDetail } = this.props;
    	resetSpeciesDetail();
  	}
	render(){


	return (
		<div className="container">
			        <SpeciesDetailHeader speciesDetail={this.props.speciesData} />
			        <div className="row">
			            <div className="col-md-4">
			               <SpeciesDetailImage speciesDetail={this.props.speciesData} />
			                <div className="like_comment_btn">
			                   <button  className="btn  btn-primary"><i className="fa fa-heart-o"> Like</i> </button>
			                   <button className="btn  btn-primary"><i className="fa  fa-comments-o"> Comment</i> </button>
			               </div>
			            </div>

			            <div className="col-md-8">
                       <h1>Description :</h1>
                      <div className="col-md-11">
			                  <SpeciesDescription speciesDetail={this.props.speciesData} />
                      </div>
                      <div className="col-md-1"></div>
			            </div>
					</div>
        </div>

		)
	}

}

function mapStateToProps(state) {
  return {
    speciesData: state.speciesData
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(
   {
   	getSpeciesDetailById : getSpeciesDetailById  ,
   	resetSpeciesDetail : resetSpeciesDetail
   }
  	, dispatch);
}


export default connect( mapStateToProps,mapDispachToProps)(SpeciesDetail);
