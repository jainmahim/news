import React, { Component } from "react";
// import PropTypes from "prop-types";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";

export class News extends Component {
  static defaultProps={
    country:'in',
    pageSize:9,
    category:'general',
  }

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=88e2602494454b99a0b215579da9d925&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ loading: false });
    this.setState({ articles: parsedData.articles });
  }

  handleNextClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=88e2602494454b99a0b215579da9d925&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ loading: false });

    this.setstate({
      page: this.state.page + 1,
      articles: parsedData.articles,
    });
  };
  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=88e2602494454b99a0b215579da9d925&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ loading: false });

    this.setstate({
      page: this.state.page - 1,
      articles: parsedData.articles,
    });
  };
  render() {
    return (
      <div className="container my-5">
        <h1 className="text-center">NewsZila - Top {this.props.category} headlines</h1>
        {this.state.loading && <Spinner/>}
        <div className="row my-2">
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <Newsitem
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  imgURL={
                    element.urlToImage
                      ? element.urlToImage
                      : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeDLUgPm6eqlc3xZzykaaMRKvUUlMVaaiUlA&usqp=CAU"
                  }
                  newsURL={element.url} author={element.author} date={element.publishedAt} source={element.source.name}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1}type="button"className="btn btn-dark "onClick={this.handlePrevClick}>&larr; Prev
          </button>
          <button disabled={this.state.page + 1 >Math.ceil(this.state.totalResults / this.props.pageSize) } type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
