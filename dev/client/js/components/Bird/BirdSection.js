import React from 'react';

import styles from './birdStyles.scss';

import BirdGrid from './BirdGrid';
import BirdSectionHeader from './BirdSectionHeader';
import BirdSectionFooter from './BirdSectionFooter';

const BirdSection = (props) => {
    let birdObj = [];
    if(props.birds != undefined && props.birds.length >0){
       birdObj = props.birds[0].birds;
    }
    return(
     <div className="row">
            <BirdSectionHeader / >
            <BirdGrid {...props} birdObj={birdObj} />
            <BirdSectionFooter />
         </div>
     )
}


export default BirdSection;
