// import React, { Component } from "react";
// import Newsitem from "./Newsitem.js";
// import Spinner from "./Spinner.js";
// import PropTypes from "prop-types";

// export default class News extends Component {
//   static defaultProps = {
//     country: "in",
//     category: "business",
//   };
//   static propTypes = {
//     country: PropTypes.string,
//     category: PropTypes.string,
//   };

//   capit = (str)=>{
//     return str[0].toUpperCase()+ str.slice(1,)
//   }

//   constructor(props) {
//     super(props);
//     this.state = {
//       article: [],
//       loading: false,
//       page: 1,
//       tno: 0,
//     };
//     document.title=`${this.capit(this.props.category)} - NewsDonkey`;
//   }

//   async LoadDAta() {
//     this.setState({ loading: true });

//     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6cd476a739284e999dc473ce9579baef&page=${this.state.page}&pageSize=${this.props.pageSize}`;
//     let data = await fetch(url);
//     let ParsedData = await data.json();
//     this.setState({
//       article: ParsedData.articles,
//       tno: ParsedData.totalResults,
//       loading: false,
//     });
//   }

//   async componentDidMount() {
//     // this.setState({loading:true});

//     // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6cd476a739284e999dc473ce9579baef&page=1&pageSize=${this.props.pageSize}`;
//     // let data= await fetch(url);
//     // let ParsedData=await data.json();
//     // this.setState({article: ParsedData.articles,tno:ParsedData.totalResults,loading:false});
//     this.LoadDAta();
//   }

//   nextHandle = async () => {
//     // this.setState({loading:true});
//     //    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6cd476a739284e999dc473ce9579baef&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
//     //    let data= await fetch(url);
//     //    let ParsedData=await data.json();
//     //    this.setState({article: ParsedData.articles,page:this.state.page+1 , loading : false });

//     this.setState({
//       page: this.state.page + 1,
//     });
//     this.LoadDAta();
//   };

//   previousHandle = async () => {
//     // this.setState({loading:true});
//     //    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6cd476a739284e999dc473ce9579baef&page=${this.state.page -1}&pageSize=${this.props.pageSize}`;
//     //    let data= await fetch(url);
//     //    let ParsedData=await data.json();
//     //    this.setState({article: ParsedData.articles,page:this.state.page-1,loading: false});
//     this.setState({
//       page: this.state.page - 1,
//     });
//     this.LoadDAta();
//   };

//   render() {
//     return (
//       <div>
//         <div className="container my-3">
//           <h1 id="top_headlines" style={{ margin: "25px 0px" }}>
//             Top {this.capit(this.props.category)} HeadLines
//           </h1>
//           <div className="container" id="spin">
//             {" "}
//             {this.state.loading && <Spinner />}
//           </div>

//           <div className="row">
//             {this.state.article.map((element) => {
//               return (
//                 <div className="col-md-4" key={element.url}>
//                   <Newsitem
//                     title={element.title}
//                     description={element.description}
//                     imageUrl={element.urlToImage}
//                     newsUrl={element.url}
//                     author={element.source.name}
//                     publishedAt={element.publishedAt}
//                   />
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//         <div className=" container d-flex justify-content-between my-3">
//           <button
//             type="button"
//             disabled={this.state.page <= 1}
//             className="btn btn-primary"
//             onClick={this.previousHandle}
//           >
//             &larr; Previous
//           </button>
//           <button
//             type="button"
//             disabled={this.state.page * this.props.pageSize >= this.state.tno}
//             className="btn btn-primary"
//             onClick={this.nextHandle}
//           >
//             Next&rarr;
//           </button>
//         </div>
//       </div>
//     );
//   }
// }
