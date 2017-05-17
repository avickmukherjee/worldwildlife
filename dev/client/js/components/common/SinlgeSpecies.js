import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';


const SinlgeSpecies = (props) => {
    const speciesDetail = props.speciesDetail;
     if(speciesDetail == undefined){
        return (<div></div>);
    } else{
        var linkToDetailPage = "/detail/"+ speciesDetail.id;
        var CommentCount =0;
        if(speciesDetail.comments != undefined){
            CommentCount = speciesDetail.comments.length;
        }
        
        var thumbnailImage = "http://www.worldwildlife.appexwebsolutions.com/backend/img/"+speciesDetail.species.name+"/"+speciesDetail.thumbnail_pic;
	return(
                      
            <div className="col-md-3 col-sm-6 img-portfolio ">
                <div className="col-md-12 SpeciesBox" >
                    <Link to={linkToDetailPage}>
                        <img className="img-responsive img-hover" src={thumbnailImage} alt=""></img>
                    </Link>
                    <div className="like_comment_btn">
                        <button  className="btn  btn-primary"><i className="fa fa-heart-o"> Like ({speciesDetail.like_count})</i> </button>
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


const mapStateToProps = () => ({});
const mapDispatchToProps = ({ });
export default connect(mapStateToProps, mapDispatchToProps)(SinlgeSpecies);