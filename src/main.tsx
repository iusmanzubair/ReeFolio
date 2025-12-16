import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Home } from './Home.tsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import { ChooseTemplate } from './Components/ChooseTemplate.tsx'
import { Layout } from './Components/Layout.tsx'
import { Toaster } from 'sonner'
import { NeoSparkHome } from "./Components/NeoSpark/Home.tsx"
import { portfolioConfig } from './Components/NeoSpark/config/portfolioConfig.ts'
import { UserPortfolio } from './Components/UserPortfolio.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path={`/neospark`} element={<NeoSparkHome portfolioConfig={portfolioConfig} />} />
        <Route element={<Layout />}>
          <Route path='/choose-template' element={<ChooseTemplate />} />
        </Route>
        <Route path='/p'>
          <Route path=':pid' element={<UserPortfolio />}/>
        </Route>
      </Routes>
    </BrowserRouter>

    <Toaster position='top-center' richColors />
  </StrictMode>
)
