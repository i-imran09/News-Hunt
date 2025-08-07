import image from '../assets/noimage.png'


const NewsIteam = (props) => {
  return (

 <div id="Overall">
        <div class="card" style="max-width: 18rem; max-height: 30rem;">
            <img src={props.src?props.src:image} class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">{props.title.slice(0,50)}</h5>
              <p class="card-text">{props.description?props.description.slice(0,90):"This articale discription was not showing pleas go thorw the link"}</p>
              <a href={props.url} class="btn btn-primary">Read more...</a>
            </div>
          </div>
</div>

  );
};

export default NewsIteam;
