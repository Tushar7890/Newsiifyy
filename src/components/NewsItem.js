import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, time, source, author } =
      this.props;
    return (
      <>
        <div
          className="card my-5"
          style={{ borderStyle: "none", borderRadius: "20px" }}
        >
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
              backgroundColor: "red",
            }}
          >
            {source.slice(0, 14)}
          </span>
          <img
            src={
              !imageUrl
                ? "https://www.livelaw.in/h-upload/2022/08/14/430324-indian-flag-and-sc.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="NoImage"
            style={{ height: "14rem", borderRadius: "20px" }}
          />
          <div
            className="card-body"
            style={{ backgroundColor: "grey", color: "#FFFDD0" }}
          >
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description == null ? "nj" : description}
            </p>
            <div className="container">
              <a href={newsUrl} className="btn btn-dark">
                View More...
              </a>
              <p>
                {!author ? "Mark" : author} on : {time.slice(0, 10)} ,
                {time.slice(12, 19)}
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
