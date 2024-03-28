import React, { useEffect, useState } from 'react'

function Kongrekafe() {
  const [data, setData] = useState([]);

    useEffect(() => {
        fetch("/data/kongrekafe.json")
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
            })
    }, []);
  return (
    <>
    <br />
    <div className='row row-cols-1 row-cols-md-4 g-4'>
        {data.map(item => (
            <div key={item.id} className="card">
                <div className='card-header'>
                    <h2>{item.SUBEADI}</h2>
                </div>
                <div className='card-body'>
                <h4 className='card-title'> {item.KATEGORIADI}</h4>
                <p> {item.URUNADI}</p>
                <p>{item.URUNNOTU}</p>
                <p>{item.FIYAT} TL</p>
                </div>
            </div>
        ))}
    </div>

</>
  )
}

export default Kongrekafe