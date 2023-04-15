
import './App.css';
import { Route , Routes} from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './Pages/Home';
import MoviesDetails from './Pages/MoviesDetails';



function App() {
  return (
    <>
      <NavBar/>
     <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/movies/:id" element={<MoviesDetails />} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
     </Routes>
      
    </>
  );
}

export default App;






  
  