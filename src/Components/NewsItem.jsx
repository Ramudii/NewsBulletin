import image from '../assets/news.jpeg'
const NewsItem = ({title, description, src, url}) => {
    return (
        <div className="card text-light mb=3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"345px",maxHeight:"500px", backgroundColor:"#1a1a2e"}}>
  <img src={src?src:image} style={{height:"200px",width:"330px",objectFit:"cover"}} className="card-img-top" alt="..."/>
  <div className="card-body">
  <h5 className="card-title">{title  ?title.slice(0, 40) : "Breaking news"}</h5>
  <p className="card-text">{description ? description.slice(0, 90) : "Updates: What is going on today, Check out here."}</p>
    <a href={url} className="btn btn-primary" style={{ backgroundColor: "#B22222", color: "#fff" }}>Read More...</a>
  </div>
</div>  
    )
}

export default NewsItem