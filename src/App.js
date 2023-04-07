
import './App.css';
import CreatePost from './component/BlogForm/CreatePost';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import SignUp from './component/SignUp/SignUp';


import {UserContextProvider} from "./UserContext";
import PostPage from "./pages/PostPage";
import EditPost from "./pages/EditPost";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Header from './Header';

// components
function App() {
  return (
    <>
     <UserContextProvider>
    
      <Routes>
        <Route exact path="/" element={<Home />   } />
        <Route exact path="/login" element={<Login />} /> 
        <Route exact path="/register" element={<SignUp />} />
        <Route path="/create" element={<CreatePost />} />
        
          <Route path="/post/:id" element={<PostPage />} />
          <Route path="/edit/:id" element={<EditPost />} />
          <Route path="/header" element={<Header />} />
         </Routes>
         </UserContextProvider>
    </>
  );
}

export default App;
