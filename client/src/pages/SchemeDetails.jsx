import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function SchemeDetails() {
  const { id } = useParams();
  const [scheme, setScheme] = useState(null);

  useEffect(() => {
    // Replace with your actual backend API endpoint
    fetch(`/api/gov-schemes/${id}`)
      .then(response => response.json())
      .then(data => setScheme(data))
      .catch(error => console.error('Error fetching scheme details:', error));
  }, [id]);

  if (!scheme) {
    return <div>Loading...</div>;
  }

  return (
    <div className='container'>
      <div className='heading'>{scheme.title}</div>
      <img src={scheme.image} className="img-fluid" alt={scheme.title} />
      <p className='mt-3'>{scheme.description}</p>
      {/* Add more details as needed */}
    </div>
  );
}
