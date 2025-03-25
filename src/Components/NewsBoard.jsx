import { useEffect } from "react";
import { useState } from "react"
import NewsItem from "./NewsItem";

const NewsBoard = ({category}) => {

    const[articles,setArticles] = useState([]);
    useEffect(()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        fetch(url).then(response=> response.json()).then(data=> setArticles(data.articles));

    },[category])

    return (
        <div style={{ backgroundColor: "#f5f5dc", minHeight: "100vh",paddingTop: "5px" }}>
            <h2 className="text-center my-3">
  <span className="badge px-3 py-3 fs-5 fw-bold" style={{ backgroundColor: "#1a1a2e", color: "white", borderRadius: "8px", letterSpacing: "1px",border: "5px solid #B22222" }}>Latest News</span></h2>
  {articles.map((news,index)=>{
    return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
  })}


        </div>
    )
}

export default NewsBoard