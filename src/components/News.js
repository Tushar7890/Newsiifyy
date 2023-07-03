import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./spinner";
import PropTypes from "prop-types";

// let APIKEY = process.env.REACT_APP_NEWS_API_KEY;
export default class News extends Component {
  static defaultProps = {
    category: "general",
    caption: "No Description Available",
  };
  static propTypes = {
    category: PropTypes.string,
    caption: PropTypes.string,
  };
  constructor() {
    super();
    this.state = {
      results: this.results,
      loading: false,
      num_results: 0,
    };
  }
  //run after render component
  async componentDidMount() {
    let url1 = `https://api.nytimes.com/svc/news/v3/content/all/${this.props.category}.json?api-key=i2AeYjrXhW4MfaZnHTe0UqJLGOVOnaR8`;

    this.setState({ loading: true });

    let data = await fetch(url1);
    let parsedData = await data.json();
    this.setState({
      results: parsedData.results,
      num_results: parsedData.num_results,
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
  //     results: parsedData.results,
  //     num_results: parsedData.num_results,
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
  //     results: parsedData.results,
  //     page: this.state.page + 1,
  //     num_results: parsedData.num_results,
  //     loading: false,
  //   });
  //   // this.setProgress(100);
  // };

  render() {
    if (this.state.results === null) {
      return (
        <div className="container justify-content-center">
          <h1> No News Available</h1>
        </div>
      );
      return null;
    }
    return (
      <>
        <div
          className="bg-dark"
          style={{
            background:
              "url(https://i.postimg.cc/zDQB96kf/realistic-news-studio-background-23-2149985600.jpg)",
          }}
        >
          <div className="container">
            <h1 className="text-center text-light">
              News World - Top Headlines
            </h1>

            <div className="container">
              <div className="row">
                {this.state.loading && <Spinner />}
                {this.state.results &&
                  this.state.results.map((element) => {
                    if (
                      element.title === "" ||
                      element.abstract === "" ||
                      element.section === "admin"
                    ) {
                      return "";
                    }
                    let imgUrl;
                    if (element.multimedia !== null) {
                      for (let i = 0; i < element.multimedia.length; i++) {
                        if (i === 2) {
                          imgUrl = element.multimedia[i].url;
                        }
                      }
                    }
                    return (
                      <div className="col-md-4" key={element.url}>
                        <NewsItem
                          title={element.title !== undefined && element.title}
                          description={
                            element.abstract !== undefined
                              ? element.abstract
                              : "No Description Available"
                          }
                          imageUrl={
                            // element.multimedia===null?"https://www.livelaw.in/h-upload/2022/08/14/430324-indian-flag-and-sc.jpg":element.multimedia[0].url
                            imgUrl
                          }
                          newsUrl={element.url !== undefined && element.url}
                          time={
                            element.published_date !== undefined &&
                            element.published_date
                          }
                          source={
                            element.source !== undefined && element.source
                          }
                          author={
                            element.byline !== undefined && element.byline
                          }
                        />
                      </div>
                    );
                  })}
              </div>
            </div>

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
                Math.ceil(this.state.num_results / this.props.pageSize)
              }
              className="btn btn-lg btn-success mx-2"
              onClick={this.handleNextClick}
            >
              Next &rarr;
            </button>
          </div> */}
          </div>
        </div>
      </>
    );
  }
}
