import React from 'react'
import { Link } from 'react-router-dom'

function SayfaYok() {
    return (
        <>
            <div className='card text-center'>
                <h1>Hata!</h1>
                <h2>Sayfa bulunamadı :( </h2>
                <Link to="/" className='btn btn-primary'>Anasayfaya Geri Dön</Link>
            </div>
        </>
    )
}

export default SayfaYok