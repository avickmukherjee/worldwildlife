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
	shouldComponentUpdate(){
	  return true;
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
					 <AnimalSection getAllAnimals={this.props.getAllAnimals} likeIncrement={this.props.likeIncrement} animals={this.props.animals}  />
					 <BirdSection getAllBirds={this.props.getAllBirds} likeIncrement={this.props.likeIncrement} birds={this.props.birds} />
					 <ReptileSection getAllReptiles={this.props.getAllReptiles} likeIncrement={this.props.likeIncrement} reptiles={this.props.reptiles} />
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
   	resetReptiles : actionCreators.resetReptiles,
		likeIncrement: actionCreators.likeIncrement
   }
  	, dispatch);
}


export default connect( mapStateToProps,mapDispachToProps)(Home);
