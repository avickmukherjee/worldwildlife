import React from 'react';

const Slider =(props) => {

	const imageUrl1 = 'http://www.toshaliholidays.com/images/india-wildlife-tour_banner.jpg';
	const imageUrl2 = 'https://vignette3.wikia.nocookie.net/animal-jam-clans-1/images/d/da/Banner-forest.jpg/revision/latest?cb=20160621222525';
	const imageUrl3 = 'https://npca.s3.amazonaws.com/images/9194/a47a5c5f-677c-481e-b8bc-fef9090b31ad-banner.jpg?1446220680';
	
	const BannerImageOneStyle = {
		backgroundImage : 'url('+ imageUrl1 +')',
	};
	
	const BannerImageTwoStyle = {
		backgroundImage : 'url('+ imageUrl2 +')',
	};
	
	const BannerImageThreeStyle = {
		backgroundImage : 'url('+ imageUrl3 +')',
	};
	
	return(
		<header id="myCarousel" height="300" className="carousel slide">        
       		 <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
            <div className="item active">
                <div className="fill" style={BannerImageOneStyle}></div>
                <div className="carousel-caption">
                    <h2></h2>
                </div>
            </div>
            <div className="item">
                <div className="fill" style={BannerImageTwoStyle}></div>
                <div className="carousel-caption">
                    <h2></h2>
                </div>
            </div>
            <div className="item">
                <div className="fill" style={BannerImageThreeStyle}></div>
                <div className="carousel-caption">
                    <h2></h2>
                </div>
            </div>
        </div>
        <div>
        <a className="left carousel-control" href="#myCarousel" data-slide="prev">
            <span className="icon-prev"></span>
        </a>
        <a className="right carousel-control" href="#myCarousel" data-slide="next">
            <span className="icon-next"></span>
        </a>
        </div>
    	</header>    
	)
}

export default Slider;