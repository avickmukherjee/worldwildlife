import React from 'react';
import { Link } from 'react-router';
import {connect} from 'react-redux';
import CSSTransitionGroup from 'react-addons-css-transition-group';

class SinlgeSpecies extends React.Component {

constructor(props){
  super(props);
  this.likeIncrement = this.likeIncrement.bind(this);
}
likeIncrement(i,speciesType,speciesId){
  this.props.likeIncrement(i,speciesType,speciesId);
}
shouldComponentUpdate(){
  return true;
}
componentWillReceiveProps(nextProps) {

}


  render(){
    const speciesDetail = this.props.speciesDetail;
     if(speciesDetail == undefined){
        return (<div></div>);
    } else{
        var linkToDetailPage = "/detail/"+ speciesDetail.id;
        var CommentCount =0;
        if(speciesDetail.comments != undefined){
            CommentCount = speciesDetail.comments.length;
        }
        var i = this.props.indexNum;
        var thumbnailImage = "http://www.worldwildlife.appexwebsolutions.com/backend/img/"+speciesDetail.species.name+"/"+speciesDetail.thumbnail_pic;
	return(

            <div className="col-md-3 col-sm-6 img-portfolio ">
                <div className="col-md-12 SpeciesBox" >
                  <div className="grid-photo-wrap">
                        <Link to={linkToDetailPage}>
                            <img className="img-responsive img-hover" src={thumbnailImage} alt=""></img>
                            <CSSTransitionGroup transitionName="like" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
                              <span key={speciesDetail.like_count} className="likes-heart">{speciesDetail.like_count}</span>
                            </CSSTransitionGroup>
                        </Link>

                    </div>
                    <div className="like_comment_btn">
                        <button onClick={() => {this.likeIncrement(i,speciesDetail.species.name,speciesDetail.id)}} className="btn  btn-primary">&hearts; Like {speciesDetail.like_count}</button>
                        <button  className="btn  btn-primary"><i className="fa  fa-comments-o"> Comment ({CommentCount})</i> </button>
                    </div>
                    <h3>
                        <Link to={linkToDetailPage} >
                            {speciesDetail.name}
                        </Link>
                    </h3>
                    <p>{speciesDetail.short_desc}</p>
               </div>
             </div>
	          )
     }
  }
}

const mapStateToProps = () => ({});
const mapDispatchToProps = ({ });

export default connect( mapStateToProps,mapDispatchToProps)(SinlgeSpecies);
