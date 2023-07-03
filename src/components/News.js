import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./spinner";
import PropTypes from "prop-types";
// import InfiniteScroll from "react-infinite-scroll-component";
// import dotenv from "dotenv";

let APIKEY = process.env.REACT_APP_NEWS_API_KEY;
// console.log(process.env.REACT_APP_NEWS_API_KEY);
export default class News extends Component {
  static defaultProps = {
    country: "in",
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    // pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
      totalResults: 0,
      // setProgress: 0
    };
  }
  //run after render component
  async componentDidMount() {
    // require('dotenv').config()
    let url1 = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${APIKEY}&page=${this.state.page}`;
    this.setState({ loading: true });
    // {this.state.loading && <Spinner />}
    let data = await fetch(url1);
    let parsedData = await data.json();
    // console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  // handlePrevClick = async () => {
  //   // this.props.setProgress(0);
  //   // console.log("previous");
  //   let url1 = `https://newsapi.org/v2/top-headlines?country=${
  //     this.props.country
  //   }&category=${this.props.category}&apiKey=${APIKEY}&page=${
  //     this.state.page - 1
  //   }`;
  //   this.setState({ loading: true });
  //   let data = await fetch(url1);
  //   let parsedData = await data.json();
  //   // console.log(parsedData);
  //   this.setState({
  //     page: this.state.page - 1,
  //     articles: parsedData.articles,
  //     totalResults: parsedData.totalResults,
  //     loading: false,
  //   });
  //   // this.setProgress(100);
  // };

  // handleNextClick = async () => {
  //   // this.props.setProgress(0);
  //   // console.log("next");
  //   let url1 = `https://newsapi.org/v2/top-headlines?country=${
  //     this.props.country
  //   }&category=${this.props.category}&apiKey=${APIKEY}&page=${
  //     this.state.page + 1
  //   }`;
  //   this.setState({ loading: true });
  //   let data = await fetch(url1);
  //   let parsedData = await data.json();
  //   // console.log(parsedData);
  //   this.setState({
  //     articles: parsedData.articles,
  //     page: this.state.page + 1,
  //     totalResults: parsedData.totalResults,
  //     loading: false,
  //   });
  //   // this.setProgress(100);
  // };

  // fetchMoreData = async () => {
  //   // if (this.state.articles.length >= this.state.totalResults) {
  //   //   this.setState({ hasMore: false });
  //   //   return;
  //   // }
  //   let url1 = `https://newsapi.org/v2/top-headlines?country=${
  //     this.props.country
  //   }&category=${this.props.category}&apiKey=${APIKEY}=${this.state.page + 1}`;
  //   this.setState({ page: this.state.page + 1 });
  //   // this.setState({ loading: true });
  //   let data = await fetch(url1);
  //   let parsedData = await data.json();
  //   // console.log(parsedData);
  //   this.setState({
  //     articles: this.state.articles.concat(parsedData.articles),
  //     totalResults: parsedData.totalResults,
  //     page: this.state.page + 1,
  //     // hasMore: true,
  //     loading: false,
  //   });
  // };

  render() {
    return (
      <>
        <div className="container my-5">
          <h1 className="text-center">News Jagat - Top Headlines</h1>
          {/* <InfiniteScroll
          dataLength={
            this.state.articles !== undefined
              ? this.state.articles.length
              : 1000000
          }
          next={this.fetchMoreData}
          hasMore={
            this.state.articles !== undefined
              ? this.state.articles.length <= this.state.totalResults
                ? true
                : false
              : false
          }
          // hasMore={this.state.hasMore}
          loader={
            this.state.articles !== undefined ? (
              this.state.articles.length >= this.state.totalResults ? null : (
                <Spinner />
              )
            ) : null
          }
        > */}
          <div className="container">
            <div className="row">
              {this.state.loading && <Spinner />}
              {this.state.articles &&
                this.state.articles.map((element) => {
                  return (
                    <div className="col-md-4" key={element.url}>
                      <NewsItem
                        title={element.title ? element.title : ""}
                        description={
                          element.description ? element.description : ""
                        }
                        imageUrl={element.urlToImage}
                        newsUrl={element.url}
                        time={element.publishedAt}
                        source={element.source.name}
                        author={element.author}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
          {/* </InfiniteScroll> */}
          {/* <div className="d-flex justify-content-between">
            <button
              disabled={this.state.page <= 1}
              type="button"
              className="btn btn-lg btn-primary mx-2"
              onClick={this.handlePrevClick}
            >
              &larr; Prev
            </button>
            <button
              type="button"
              disabled={
                this.state.page + 1 >
                Math.ceil(this.state.totalResults / this.props.pageSize)
              }
              className="btn btn-lg btn-success mx-2"
              onClick={this.handleNextClick}
            >
              Next &rarr;
            </button>
          </div> */}
        </div>
      </>
    );
  }
}
