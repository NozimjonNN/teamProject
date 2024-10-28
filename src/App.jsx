import Home from '../Pages/Home'
import About from '../Pages/About/About'
import Faq from '../Pages/Faq/Faq'
import Pp from '../Pages/Pp'
import Forum from '../Pages/Forum'
import Error from '../Pages/Error'
import Other1 from '../Pages/Other1'
import Other2 from '../Pages/Other2'
import Donate from '../Pages/Donate'

import { Route, Routes } from 'react-router-dom'

export default function App() {
  return(
    <>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/faq' element={ <Faq /> } />
        <Route path='/forum' element={ <Forum /> } />
        <Route path='/Pp' element={ <Pp /> } />
        <Route path='/Donate' element={ <Donate /> } />
        <Route path='/Other1' element={ <Other1 /> } />
        <Route path='/Other2' element={ <Other2 /> } />
        <Route path='*' element={ <Error /> } />
      </Routes>
    </>
  )
}
