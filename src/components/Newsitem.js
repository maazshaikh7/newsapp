import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let { title, description, imgurl, newsUrl, publishTime, author } =
      this.props;
    return (
      <>
        <div className="card my-3">
          <img
            src={imgurl}
            className="card-img-top"
            alt={title}
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description} </p>
            <p className="card-text">
              <small className="text=muted">
                ~By <b>{author ? author : "Anonymous"} </b>on <i>
                <time>{publishTime}</time></i>
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-primary"
            >
              Read more
            </a>
          </div>
        </div>
      </>
    );
  }
}

Newsitem.defaultProps = {
  author: { author: "Anonymous" },
};
export default Newsitem;
