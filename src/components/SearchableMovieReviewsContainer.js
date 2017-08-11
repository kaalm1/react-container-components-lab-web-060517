// Code SearchableMovieReviewsContainer Here
import React, { Component } from 'react';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;



class SearchableMovieReviewsContainer extends Component{
  constructor() {
    super();

    this.state = {
      reviews: [],
      searchTerm: ""
    };
  }

  componentWillMount() {
    fetch(URL)
      .then(response => response.json())
      .then((reviews) => {
          reviews = reviews.results
          this.setState({ reviews })
      });
  }

  updateSearch = (event) =>{
    this.setState({
      searchTerm: event.target.value
    })
  }

  reviewsFitCritiera = (reviews, criteria)=>{
    return reviews.filter((review)=>{
      return review.display_title.includes(criteria)
    })
  }

  render(){
    return(
      <div className="searchable-movie-reviews">
        <input type="text" onChange={this.updateSearch}/>
        <MovieReviews reviews={this.reviewsFitCritiera(this.state.reviews,this.state.searchTerm)} />
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
