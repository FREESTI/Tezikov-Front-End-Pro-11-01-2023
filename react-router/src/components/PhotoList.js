import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function PhotoList() {
  const [photos, setPhotos] = useState([]);
  const { albumId } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      .then(response => response.json())
      .then(data => setPhotos(data));
  }, [albumId]);

  return (
    <div>
      <h1>Список фото</h1>
      <Link to="/">Назад</Link>
      <ul>
        {photos.map(photo => (
          <li key={photo.id}>
            <img src={photo.thumbnailUrl} alt={photo.title} />
            <p>{photo.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PhotoList;
