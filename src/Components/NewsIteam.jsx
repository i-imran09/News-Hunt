import image from '../assets/noimage.png'
import '../index.css'


const NewsIteam = (props) => {
  return (

 <div id="Overall">
        <div className="card" id="cardallstyle">
            <img src={props.src?props.src:image} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{props.title.slice(0,50)}</h5>
              <p className="card-text">{props.description?props.description.slice(0,90):"This articale discription was not showing pleas go thorw the link"}</p>
              <a href={props.url} className="btn btn-primary">Read more...</a>
            </div>
          </div>
</div>

  );
};

export default NewsIteam;
