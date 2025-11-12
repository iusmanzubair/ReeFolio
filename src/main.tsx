import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Home } from './Home.tsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import { ChooseTemplate } from './Components/ChooseTemplate.tsx'
import { Layout } from './Components/Layout.tsx'
import { Toaster } from 'sonner'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path={`lumenflow.${import.meta.env.VITE_LIVEURL}`} element={<Home />} />
        <Route element={<Layout />}>
          <Route path='/choose-template' element={<ChooseTemplate />} />
        </Route>
      </Routes>
    </BrowserRouter>

    <Toaster position='top-center' richColors />
  </StrictMode>
)
