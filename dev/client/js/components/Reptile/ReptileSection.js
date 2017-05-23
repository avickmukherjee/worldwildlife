import React from 'react';

import styles from './reptileStyles.scss';

import ReptileGrid from './ReptileGrid';
import ReptileSectionHeader from './ReptileSectionHeader';
import ReptileSectionFooter from './ReptileSectionFooter';

const ReptileSection = (props) => {

    let reptileObj = [];
    if(props.reptiles != undefined && props.reptiles.length >0){
       reptileObj = props.reptiles[0].reptiles;
    }
    return(
     <div className="row">
            <ReptileSectionHeader / >
            <ReptileGrid {...props} reptileObj={reptileObj} />
            <ReptileSectionFooter />
         </div>
     )
}


export default ReptileSection;
