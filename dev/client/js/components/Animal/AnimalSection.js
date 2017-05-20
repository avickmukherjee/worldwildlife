import React from 'react';

import styles from './animalStyles.scss';

import AnimalGrid from './AnimalGrid';
import AnimalSectionHeader from './AnimalSectionHeader';
import AnimalSectionFooter from './AnimalSectionFooter';

const AnimalSection = (props) => {
            let animalObj = [];
            if(props.animals != undefined && props.animals.length >0){
               animalObj = props.animals[0].animals;
            }
            
    return(
    		 <div className="row">
                <AnimalSectionHeader / >
                <AnimalGrid animalObj={animalObj} />
                <AnimalSectionFooter />
             </div>
	   )
}


export default AnimalSection;
