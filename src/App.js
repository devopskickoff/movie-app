import axios from 'axios';
import React from 'react';
import Movie from './Movie';
import "./App.css";

class App extends React.Component {
  state = {
    isLoading: true,
    movies:[]
  };
  getMovies = async () => {
    // const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    // console.dir(movies.data.data.movies);

    const {
            data: 
                {data: 
                  { movies }
                }
              } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
              // ({movies:movies})와 같은 동작을 한다
    this.setState({movies, isLoading:false}) 
  };
  componentDidMount(){
    this.getMovies();
  }
  render(){
    const { isLoading, movies } = this.state;
    return (
      <section class="container">
        {isLoading
           ? (
            <div class="loader">
              <span class="loader__text">"Loading..."</span>
            </div>
           ):(

            <div class="movies">
              {movies.map(movie => (
              <Movie
               key={movie.id} 
               id={movie.id} 
               year={movie.year} 
               title={movie.title} 
               summary={movie.summary} 
               poster={movie.medium_cover_image}
               />
               
              ))}
              </div>
            
       )}</section>
    
    )
  }
}



export default App;
