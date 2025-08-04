import image from '../assets/noimage.png'


const NewsIteam = (props) => {
  return (
       <div className="container-sm bg-dark text-light d-inline-block m-3 me-0 ms-4 px-2 py-2 " style={{ maxWidth: "300px", maxheight:"500px"}}>
         <div><img src={props.src?props.src:image} style={{height:"200px" ,width:"285px"}} className="img-top" /><br></br></div>
         <div className="">
           <h5 className="">{props.title.slice(0,50)}</h5>
           <p className="">{props.description?props.description.slice(0,90):"This articale discription was not showing pleas go thorw the link"}</p>
           <a href={props.url} className="btn btn-primary" target='blank'>
             Read More...
           </a>
         </div>
       </div>
  );
};

export default NewsIteam;
