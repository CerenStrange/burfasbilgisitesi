import React, { useEffect, useState } from 'react'

function Subeler() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data/burfassube.json")
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.error('There was a problem with your fetch operation:', error);
      });
  }, []);

  return (
    <>
    <br />
    <div className='text-center'>
      {data.map(item => (
        <div key={item.id} className="card">
          <h2>{item.baslik}</h2>
          <img className='rounded mx-auto d-block' src={item.thumb} width='65%' />
          <h4>Adres: {item.adres}</h4>
          <p>Telefon No: {item.telefon}</p>
          <p>Faks: {item.fax}</p>
          <p>E-Posta: {item.eposta}</p>
        </div>
       
      ))}
     <br />
    </div>
    </>
  )
}

export default Subeler