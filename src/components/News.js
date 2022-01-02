import React from "react";
import Newsitem from "./Newsitem.js";
import Spinner from "./Spinner.js";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState,useEffect } from "react";

const News=(props)=> {
 

  


  const capit = (str) => {
    return str[0].toUpperCase() + str.slice(1);
  };

  const [article, setarticle] = useState([]);
  const [loading, setloading] = useState(true);
  const [page, setpage] = useState(0);
  const [tno, settno] = useState(0)

  

 

  const LoadDAta = async () => {



    

    props.setProgress(30);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api_key}&page=${page+1}&pageSize=${props.pageSize}`;
    setpage(page+1);
    let data = await fetch(url);
    let ParsedData = await data.json();
    props.setProgress(90);

    setarticle(article.concat(ParsedData.articles));
    settno(ParsedData.totalResults);
    setloading(false);
    props.setProgress(100);
    
    
  };

  useEffect(() => {
    LoadDAta();
     document.title = `${capit(props.category)} - NewsDonkey`;
   
  }, [])


 
    return (
      <div>
        <div className="container my-3">
          <span>
            <h1 id="top_headlines" style={{ margin: "25px 0px" }}>
              Top {capit(props.category)} HeadLines
            </h1>
          </span>
          <span>{tno} articles found</span>

          {loading && <Spinner />}

          <InfiniteScroll
            dataLength={article.length}
            next={LoadDAta}
            hasMore={article.length < tno }
            loader={<Spinner />}
          >
            <div className="row">
              {article.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <Newsitem
                      title={element.title}
                      description={element.description}
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.source.name}
                      publishedAt={element.publishedAt}
                    />
                  </div>
                );
              })}
            </div>
          </InfiniteScroll>
        </div>
      </div>
    );
  
}

News.defaultProps ={
  country: "in",
  category: "business",
  pageSize: 0
};
News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
};

export default News;