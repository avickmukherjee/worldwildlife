import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import styles from './reptileStyles.scss';

import ReptileGrid from './ReptileGrid';
import ReptileSectionHeader from './ReptileSectionHeader';
import ReptileSectionFooter from './ReptileSectionFooter';

class ReptileSection extends React.Component
{
    constructor(props){
        super(props);
    }

    componentDidMount() {      
     this.props.getAllReptiles()   
    }
    componentWillUnmount() {
        this.props.resetReptiles();
    }
  render(){ 
    let reptileObj = [];
    if(this.props.reptiles != undefined && this.props.reptiles.length >0){
       reptileObj = this.props.reptiles[0].reptiles;    
    }else{

    }
    return(
     <div className="row">      
            <ReptileSectionHeader / >
            <ReptileGrid reptileObj={reptileObj} />
            <ReptileSectionFooter />
         </div>
     )
    }
}


export default ReptileSection;
