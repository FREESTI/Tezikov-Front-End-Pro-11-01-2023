import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserList from './components/UserList';
import AlbumList from './components/AlbumList';
import PhotoList from './components/PhotoList';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Список користувачів</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/albums/:userId" element={<AlbumList />} />
          <Route path="/photos/:albumId" element={<PhotoList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
