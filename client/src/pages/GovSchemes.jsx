import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function GovSchemes() {
  const [schemes, setSchemes] = useState([]);

  useEffect(() => {
    // Replace with your actual backend API endpoint
    fetch('/api/gov-schemes')
      .then(response => response.json())
      .then(data => setSchemes(data))
      .catch(error => console.error('Error fetching schemes:', error));
  }, []);

  return (
    <div>
      <div className='heading'>Government Schemes</div>
      <div className='d-flex flex-wrap'>
        {schemes.map(scheme => (
          <div className="card m-3" style={{ width: '18rem' }} key={scheme.id}>
            <img src={scheme.image} className="card-img-top" alt={scheme.title} />
            <div className="card-body">
              <h5 className="card-title">{scheme.title}</h5>
              <Link to={`/gov-schemes/${scheme.id}`} className="btn btn-primary">View Details</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
