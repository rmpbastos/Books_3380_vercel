// import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookList from './components/BookList';
import AddBook from './components/AddBook';
import ShowBook from './components/ShowBook';
import EditBook from './components/EditBook';
import axios from 'axios';

// Sets axios default values
axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<BookList />} />
        <Route path="/create-book" element={<AddBook />} />
        <Route path="/show-book/:id" element={<ShowBook />} />
        <Route path="/edit-book/:id" element={<EditBook />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App