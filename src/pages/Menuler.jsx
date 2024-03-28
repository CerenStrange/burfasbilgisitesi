import React from 'react'
import { Link } from 'react-router-dom'



function Menuler() {
  return (
    <>
      <div className='card text-center '>
        <h1>MENÜLER</h1>
        <h4>Menüleri görmek için restoran seçimi yapınız</h4>
      </div>
      <br />
     <div className='card mt-10 mb-10'>
      <h1 className='text-center'>DOBRUCA SOSYAL TESİSLERİ</h1>
      <Link className='btn btn-primary' to="/dobruca">Menüyü İncele</Link>
     </div>
     <br />
     <div className='card mt-10 mb-10'>
     <h1 className='text-center'>BALİBEY HAN SOSYAL TESİSLERİ</h1>
      <Link className='btn btn-primary' to="/balibeyhan">Menüyü İncele</Link>
     </div>
     <br />
     <div className='card mt-10 mb-10'>
     <h1 className='text-center'>MUDANYA SOSYAL TESİSLERİ</h1>
      <Link className='btn btn-primary' to="/mudanya">Menüyü İncele</Link>
     </div>
     <br />
     <div className='card mt-10 mb-10'>
     <h1 className='text-center'>DEMİRTAŞ SOSYAL TESİSLERİ</h1>
      <Link className='btn btn-primary' to="/demirtas">Menüyü İncele</Link>
     </div>
     <br />
     <div className='card mt-10 mb-10'>
     <h1 className='text-center'>KONGRE KAFE</h1>
      <Link className='btn btn-primary' to="/kongrekafe">Menüyü İncele</Link>
     </div>
     <br />
     <div className='card mt-10 mb-10'>
     <h1 className='text-center'>MERİNOSPARK RESTORAN</h1>
      <Link className='btn btn-primary' to="/merinospark">Menüyü İncele</Link>
     </div>
     <br />
     <div className='card mt-10 mb-10'>
     <h1 className='text-center'>ULUDAĞ SOSYAL TESİSLERİ</h1>
      <Link className='btn btn-primary' to="/uludag">Menüyü İncele</Link>
     </div>
     <br />
     <div className='card mt-10 mb-10'>
     <h1 className='text-center'>ERTUĞRULBEY MEYDAN KAFE</h1>
      <Link className='btn btn-primary' to="/ertugrulbey">Menüyü İncele</Link>
     </div>
     <br />
     <div className='card mt-10 mb-10'>
     <h1 className='text-center'>ATATEPE SOSYAL TESİSLERİ</h1>
      <Link className='btn btn-primary' to="/atatepe">Menüyü İncele</Link>
     </div>
     <br />
    </>
  )
}

export default Menuler