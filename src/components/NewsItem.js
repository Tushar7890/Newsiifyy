import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, time, source, author } =
      this.props;
    return (
      <>
        <div className="card my-5">
          <span
            className="badge rounded-pill"
            style={{
              position: "absolute",
              height: "auto",
              top: "-1rem",
              right: "0rem",
              width: "auto",
              textAlign: "right",
              fontSize: "0.8rem",
              borderRadius: "50%",
              color: "white",
              backgroundColor: "red"
            }}
          >
            {source.slice(0, 12)}
          </span>
          <img
            src={
              !imageUrl
                ? "https://www.livelaw.in/h-upload/2022/08/14/430324-indian-flag-and-sc.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <div className="container">
              <a href={newsUrl} className="btn btn-dark">
                View More...
              </a>
              <p>
                By {!author ? "Mark" : author} on : {time.slice(0, 10)} ,
                {time.slice(12, 19)}
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
