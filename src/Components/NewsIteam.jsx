// import image from '../assets/noimage.png'
// import '../index.css'


// const NewsIteam = (props) => {
//   return (

// //  <div id="Overall">
// //         <div className="card" id="cardallstyle">
// //             <img src={props.src?props.src:image} className="card-img-top" alt="..."/>
// //             <div className="card-body">
// //               <h5 className="card-title">{props.title.slice(0,50)}</h5>
// //               <p className="card-text">{props.description?props.description.slice(0,90):"This articale discription was not showing pleas go thorw the link"}</p>
// //               <a href={props.url} className="btn btn-primary">Read more...</a>
// //             </div>
// //           </div>
// // </div>
// <div className="card-">
// <div className="full-card">
//   <img src={props.src?props.src:image}/>
//   <div className="cardsection">
//   <h5>{props.title.slice(0,50)}</h5>
//   <p>{props.description?props.description.slice(0,90):"This articale discription was not showing pleas go thorw the link"}</p>
//   <a href={props.url}>Readmore...</a>
//   </div>
// </div>
// </div>
//   );
// };

// export default NewsIteam;
import image from '../assets/noimage.png';
import '../index.css';

const NewsIteam = (props) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow news-card">
        <img
          src={props.src ? props.src : image}
          className="card-img-top news-image"
          alt="News"
        />
        <div className="card-body">
          <h5 className="card-title">{props.title ? props.title.slice(0, 50) : "No Title"}</h5>
          <p className="card-text">
            {props.description
              ? props.description.slice(0, 90)
              : "This article description is not available. Please click Read More."}
          </p>
          <a href={props.url} target="_blank" className="btn btn-sm btn-outline-primary">
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsIteam;
