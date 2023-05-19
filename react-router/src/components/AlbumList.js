import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function AlbumList() {
  const [albums, setAlbums] = useState([]);
  const { userId } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
      .then(response => response.json())
      .then(data => setAlbums(data));
  }, [userId]);

  return (
    <div>
      <h1>Список альбомів</h1>
      <Link to="/">Назад</Link>
      <ul>
        {albums.map(album => (
          <li key={album.id}>
            {album.title}
            <Link to={`/photos/${album.id}`}>Photos</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AlbumList;
