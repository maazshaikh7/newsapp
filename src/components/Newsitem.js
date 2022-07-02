import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let { title, description, imgurl, newsUrl, publishTime, author } =
      this.props;
    return (
      <>
        <div className="card my-3" >
          <img
            src={
              !imgurl
                ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg"
                : imgurl
            }
            style={{maxHeight:"200px"}}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description} </p>
            <p className="card-text">
              <small className="text=muted">
                ~By <b>{author ? author : "Anonymous"} </b>on &nbsp;
                <i>
                  <time>{new Date(publishTime).toGMTString()}</time>
                </i>
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
