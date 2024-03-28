import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Anasayfa from './pages/Anasayfa'
import Menuler from './pages/Menuler'
import Subeler from './pages/Subeler'
import SayfaYok from './pages/SayfaYok'
import Dobruca from './places/Dobruca'
import Balibeyhan from './places/Balibeyhan'
import Atatepe from './places/Atatepe'
import Merinospark from './places/Merinospark'
import Mudanya from './places/Mudanya'
import Kongrekafe from './places/Kongrekafe'
import Demirtas from './places/Demirtas'
import Ertugrulbey from './places/Ertugrulbey'
import Uludag from './places/Uludag'


function SiteRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Anasayfa />} />
            <Route path='/subeler' element={<Subeler />} />
            <Route path='/menuler' element={<Menuler />} />
            <Route path='*' element={<SayfaYok />} />
            <Route path='/dobruca' element={<Dobruca/>} />
            <Route path='/balibeyhan' element={<Balibeyhan />} />
            <Route path='/atatepe' element={<Atatepe />} />
            <Route path='/merinospark' element={<Merinospark />} />
            <Route path='/mudanya' element={<Mudanya />} />
            <Route path='/uludag' element={<Uludag />} />
            <Route path='/kongrekafe' element={<Kongrekafe />} />
            <Route path='/demirtas' element={<Demirtas />} />
            <Route path='/ertugrulbey' element={<Ertugrulbey />} />
        </Routes>
    )
}

export default SiteRoutes