import { useState } from "react";
import MovieList from "../components/MovieList";
import { movies } from "../Datta/movies";

 const HomePage = () => {
  const [moviesList, setMoviesList] = useState(movies);
  const [search, setSearch] = useState("");
  const [newMovie, setNewMovie] = useState({
     
      name: "",
      description: "",
      
  });

  const handleChange = (e) => {
    setNewMovie({
      ...newMovie,
      [e.target.name]: e.target.value,
    })
  }
  const addMovie = (newMovie) => {
    setMoviesList([...moviesList,
      {
        id: moviesList.length + 1,
        ...newMovie
      }
    ])
  }

  const deleteMovie = (id) => {
    setMoviesList(moviesList.filter((product) => product.id !== id))
  }
    const handleSearch = (e) => {
      setSearch(e.target.value)

  }
  return (
    <>

      <input type="text" placeholder="Search"
        onChange={handleSearch}
      />
      <MovieList data={moviesList}
      deleteMovie={deleteMovie}
        search={search}
      />
      <label>Name</label>
      <input type="text"
        name="name"
        onChange={handleChange}
      />
  

      <label>Description</label>
      <textarea
        name="description"
        onChange={handleChange}

      />
      <button onClick={() => addMovie(newMovie)}>Add Movie</button>
    </>
  );
};

export default HomePage;
