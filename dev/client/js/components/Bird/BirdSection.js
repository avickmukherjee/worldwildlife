import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import styles from './birdStyles.scss';

import BirdGrid from './BirdGrid';
import BirdSectionHeader from './BirdSectionHeader';
import BirdSectionFooter from './BirdSectionFooter';

class BirdSection extends React.Component
{
    constructor(props){
        super(props);
    }

    componentDidMount() {      
     this.props.getAllBirds()   
    }

    componentWillUnmount() {
        this.props.resetBirds();
    }
    
  render(){ 
    let birdObj = [];
    if(this.props.birds != undefined && this.props.birds.length >0){
       birdObj = this.props.birds[0].birds;      
    }else{

    }
    return(
     <div className="row">      
            <BirdSectionHeader / >
            <BirdGrid birdObj={birdObj} />
            <BirdSectionFooter />
         </div>
     )
    }
}


export default BirdSection;
