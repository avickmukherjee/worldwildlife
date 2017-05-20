import React from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AnimalSection from './Animal/AnimalSection';
import BirdSection from './Bird/BirdSection';
import ReptileSection from './Reptile/ReptileSection';
import Slider from './slider';
import * as actionCreators from '../actions/';

require('../../../scss/style.scss');

class Home extends React.Component {

	componentDidMount() {
	 	this.props.getAllAnimals();
	  this.props.getAllBirds();
 		this.props.getAllReptiles()
	}

	 componentWillUnmount() {
			this.props.resetAnimals();
			this.props.resetBirds();
			this.props.resetReptiles();
	}

	render(){
		return (
			<div>
			<Slider />
				<div className="container">
					 <AnimalSection resetAnimals={this.props.resetAnimals} getAllAnimals={this.props.getAllAnimals} animals={this.props.animals} />
					 <BirdSection resetBirds={this.props.resetBirds} getAllBirds={this.props.getAllBirds} birds={this.props.birds} />
					 <ReptileSection resetReptiles={this.props.resetReptiles} getAllReptiles={this.props.getAllReptiles} reptiles={this.props.reptiles} />
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
  return {
    animals: state.animals,
    birds: state.birds,
    reptiles: state.reptiles,
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(
   {
   	getAllAnimals : actionCreators.getAllAnimals,
   	getAllBirds : actionCreators.getAllBirds,
   	getAllReptiles : actionCreators.getAllReptiles,
   	resetAnimals : actionCreators.resetAnimals,
   	resetBirds : actionCreators.resetBirds,
   	resetReptiles : actionCreators.resetReptiles
   }
  	, dispatch);
}


export default connect( mapStateToProps,mapDispachToProps)(Home);
