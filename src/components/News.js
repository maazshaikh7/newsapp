import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
    document.title = `NewsApp ${this.capitalizeFirstLetter(
      this.props.category
    )}`;
  }

  async componentDidMount() {
    this.updateNews();
  }

  async updateNews() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bce613c2f7794338a8d5cace41668353&page=${this.state.page}&pageSize=${this.props.pageSize} `;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  handlePreviousClick = async () => {
    this.setState({ page: this.state.page -= 1 });
    this.updateNews();
  };

  handleNextClick = async () => {
    this.setState({ page: this.state.page += 1 });
    this.updateNews();
  };

  render() {
    return (
      <>
        <div className="container">
          <h1 className="my-3">
            NewsApp - Top {this.capitalizeFirstLetter(this.props.category)}{" "}
            Headlines
          </h1>
          <hr />
          {this.state.loading && <Spinner />}
          <div className="row">
            {!this.state.loading &&
              this.state.articles.map((element) => {
                return (
                  <div className="col-md-4 " key={element.url}>
                    <Newsitem
                      title={element.title}
                      description={element.description}
                      imgurl={element.urlToImage}
                      newsUrl={element.url}
                      publishTime={element.publishedAt}
                      author={element.author}
                    />
                  </div>
                );
              })}
          </div>
        </div>
        {/* Buttons to navigate through pages */}
        <div className="container d-flex justify-content-between my-3 pt-3">
          <button
            type="button"
            disabled={this.state.page <= 1}
            className="btn btn-secondary"
            onClick={this.handlePreviousClick}
          >
            &larr;Previous
          </button>
          <button
            type="button"
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            className="btn btn-secondary"
            onClick={this.handleNextClick}
          >
            Next&rarr;
          </button>
        </div>
      </>
    );
  }
}

export default News;
