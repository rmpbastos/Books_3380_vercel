// import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookList from './components/BookList';
import AddBook from './components/AddBook';
import ShowBook from './components/ShowBook';
import EditBook from './components/EditBook';


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