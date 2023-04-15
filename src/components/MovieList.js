import CardItem from "../components/Card";

const MovieList = ({data , search ,deleteMovie }) => {
  const handleName = (name) => {
    alert(`Hello ${name}`);
  };
  const filteredData = data.filter((item) => {
    return item.name.toLowerCase().includes(search.toLowerCase()) || item.price.toString().includes(search)
  }
  )
  return (
    <div className='card-list'>
      {filteredData.map((item) => {
        return <CardItem key={item.id} item={item} handleName={handleName}
          deleteMovie={deleteMovie}
          />;
        })}
      
    </div>
  );
};

export default MovieList;