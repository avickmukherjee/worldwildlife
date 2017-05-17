import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import styles from './animalStyles.scss';

import AnimalGrid from './AnimalGrid';
import AnimalSectionHeader from './AnimalSectionHeader';
import AnimalSectionFooter from './AnimalSectionFooter';

class AnimalSection extends React.Component
{
    constructor(props){
        super(props);       
    }

    componentDidMount() {      
     this.props.getAllAnimals();  
    }

     componentWillUnmount() {
        this.props.resetAnimals();
    }
    
	render(){
            let animalObj = [];
            if(this.props.animals != undefined && this.props.animals.length >0){
               animalObj = this.props.animals[0].animals;               
            }else{

            }
            
    return(
    		 <div className="row">        
                <AnimalSectionHeader / >
                <AnimalGrid animalObj={animalObj} /> 
                <AnimalSectionFooter />
             </div>
	   )
    }
}

const mapStateToProps = state => ({
});
const mapDispatchToProps = ({ });

export default connect(mapStateToProps,mapDispatchToProps)(AnimalSection);
