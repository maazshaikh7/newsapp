import React, { Component } from "react";
import Newsitem from "./Newsitem";
// import PropTypes from 'prop-types';

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading : false
    };
  }

  async componentDidMount() {
    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bce613c2f7794338a8d5cace41668353`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles });
  }

  render() {
    return (
      <>
        <div className="container">
          <h1 className="my-3">Top-headlines in India</h1>
          <hr />
          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4 " key={element.url}>
                  <Newsitem
                    title={element.title}
                    description={element.description}
                    imgurl={element.urlToImage}
                    newsUrl={element.url}
                    />
                </div>
              );
            })}
          </div>
        </div> 
        {/*  const handleNextClick = () => {
           console.log("Next");
         };
    
         const handlePreviousClick = () => {
           console.log("Previous");
         }; */}
        {/* Buttons to navigate through pages */}
        {/* <div className="container d-flex justify-content-between my-3 pt-3">
          <button
            type="button"
            disabled={true}
            className="btn btn-secondary"
            onClick={handlePreviousClick}
          >
            &larr;Previous
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleNextClick}
          >
            Next&rarr;
          </button>
        </div> */}
      </>
    );
  }
}

export default News;
