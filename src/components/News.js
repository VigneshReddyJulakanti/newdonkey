import React, { Component } from "react";
import Newsitem from "./Newsitem.js";
import Spinner from "./Spinner.js";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  static defaultProps = {
    country: "in",
    category: "business",
    pageSize: 0,
  };
  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
  };

  capit = (str) => {
    return str[0].toUpperCase() + str.slice(1);
  };

  constructor(props) {
    super(props);
    this.state = {
      article: [],
      loading: true,
      page: 0,
      tno: 0,
    };
    document.title = `${this.capit(this.props.category)} - NewsDonkey`;
  }

  LoadDAta = async () => {
    // console.log("article length" , this.state.article.length)
    // console.log("tno" , this.state.tno)
    // console.log("pageSize" , this.props.pageSize)

    // console.log(this.state.article.length <= (this.state.tno - this.props.pageSize))

    await this.setState({
      page: this.state.page + 1,
    });

    // console.log(this.state.page)

    this.props.setProgress(30);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api_key}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let ParsedData = await data.json();
    this.props.setProgress(90);
    this.setState({
      article: this.state.article.concat(ParsedData.articles),
      tno: ParsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  };

  async componentDidMount() {
    this.LoadDAta();
  }

  render() {
    return (
      <div>
        <div className="container my-3">
          <span>
            <h1 id="top_headlines" style={{ margin: "25px 0px" }}>
              Top {this.capit(this.props.category)} HeadLines
            </h1>
          </span>
          <span>{this.state.tno} articles found</span>

          {this.state.loading && <Spinner />}

          <InfiniteScroll
            dataLength={this.state.article.length}
            next={this.LoadDAta}
            hasMore={this.state.article.length < this.state.tno}
            loader={<Spinner />}
          >
            <div className="row">
              {this.state.article.map((element) => {
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
}
