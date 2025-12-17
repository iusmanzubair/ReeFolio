import { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import { supabase } from './utils/supabaseClient';
import type { Session } from '@supabase/supabase-js';
import { UserPortfolio } from './Components/UserPortfolio';
import { NeoSparkHome } from './Components/NeoSpark/Home';
import { LumenFlowHome } from './Components/LumenFlow/Home';
import { portfolioConfig } from './config/portfolioConfig';
import { Login } from './Components/Login';
import { ChooseTemplate } from './Components/ChooseTemplate';
import { MyPortfolios } from './Components/MyPortfolios';
import { Toaster } from 'sonner';
import { Home } from './Home';
import { Layout } from './Components/Layout';
import { Signup } from './Components/Signup';

export const App = () => {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loading) return;

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home session={session}/>} />

        <Route path='/login' element={session ? <Navigate to="/my-portfolios" replace /> : <Login />} />
        <Route path='/signup' element={session ? <Navigate to="/my-portfolios" replace /> : <Signup />} />

        <Route path={`/neospark`} element={<NeoSparkHome portfolioConfig={portfolioConfig} />} />
        <Route path={`/lumenflow`} element={<LumenFlowHome portfolioConfig={portfolioConfig} />} />
        <Route element={<Layout session={session} />}>
          <Route path='/choose-template' element={<ChooseTemplate session={session} />} />
          <Route path='/my-portfolios' element={session ? <MyPortfolios session={session} /> : <Navigate to="/login" replace/>} />
        </Route>
        <Route path='/p'>
          <Route path=':pid' element={<UserPortfolio />}/>
        </Route>
      </Routes>

      <Toaster position='top-center' richColors />
    </BrowserRouter>

  );
}