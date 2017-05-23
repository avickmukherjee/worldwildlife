import React from 'react';
import styles from './animalStyles.scss';
import {connect} from 'react-redux';
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
                <AnimalGrid {...props} animalObj={animalObj} likeIncrement={props.likeIncrement} />
                <AnimalSectionFooter />
             </div>
	   )
}

const mapStateToProps = () => ({});
const mapDispatchToProps = ({ });
export default connect( mapStateToProps,mapDispatchToProps)(AnimalSection);
