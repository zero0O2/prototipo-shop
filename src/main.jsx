import { createRoot } from 'react-dom/client'
import { Routes ,Route ,BrowserRouter } from 'react-router-dom'
import './index.css'

import Home from "./Pages/Home.jsx"
import PageProdutoNovos from "./Pages/PageProdutoNovos.jsx"
import PageProduto from "./Pages/PageProduto.jsx"


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/prototipo-shop" element={<Home/>}/>
      <Route path="*" element={<Home/>}/>
      <Route path="/prototipo-shop/produtos/:id" element={<PageProduto/>}/>
      <Route path="/prototipo-shop/produto/:id" element={<PageProdutoNovos/>}/>
    </Routes>
  </BrowserRouter>
)
