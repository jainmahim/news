import React, { Component } from "react";

export class Newsitem extends Component {

  render() {
    let { title, description, imgURL, newsURL, author, date, source} = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img src={imgURL} className="card-img-top" alt="News" />
          <div className="card-body">
            <h5 className="card-title">{title}<span className="badge badge-pill badge-warning">{source}</span></h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">by {author?author:"Anonymous"} on {new Date(date).toGMTString()}.</small></p>
            <a href={newsURL}  target="_blank"  rel="noreferrer" className="btn btn-sm btn-dark">
             
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
