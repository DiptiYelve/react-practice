import './CardContainer.css';
import { IMG_URL } from '../utils/config';

const CardContainer = (props) => {
    const {name, cuisines, avgRating, cloudinaryImageId, defaultRating} = props?.data.card.card.info;

      return (<div className="card">
        <img className="foodImg" src={IMG_URL+cloudinaryImageId} alt="food" />
        <div className="cardBody">
        <h3>{name}</h3>
        <p className='cuisines'>{cuisines.join(", ")} </p>
        {avgRating == undefined ? <p className='noRating'>No Rating Found</p>  : <p className={avgRating >= 4 ? "goodRating": avgRating >= 2? "neutralRating" : "badRating" }>{avgRating + " ★"} </p>} 
        </div>
      </div>
  )
};

export default CardContainer;