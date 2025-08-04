import image from '../assets/noimage.png'


const NewsIteam = (props) => {
  return (
       <div className="card bg-dark text-light d-inline-block m-5 px-2 py-2 " style={{ maxWidth: "345px" }}>
         <img src={props.src?props.src:image} style={{height:"200px" ,width:"325px"}} className="card-img-top" />
         <div className="card-body">
           <h5 className="card-title">{props.title.slice(0,50)}</h5>
           <p className="card-text">{props.description?props.description.slice(0,90):"This articale discription was not showing pleas go thorw the link"}</p>
           <a href={props.url} className="btn btn-primary" target='blank'>
             Read More...
           </a>
         </div>
       </div>
  );
};

export default NewsIteam;
