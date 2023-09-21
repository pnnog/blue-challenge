import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import DashBoard from 'pages/DashBoard';
import NotFound from 'pages/NotFound';
import Building from 'pages/Building';
import Layout from 'pages/Layout';

const AppRoutes = () =>{
  return(
    <Router>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<DashBoard />}/>
          <Route path='vendas' element={<Building />}/>
          <Route path='planos' element={<Building />}/>
          <Route path='*' element={<NotFound />}/>
        </Route>
      </Routes>
    </Router>

  );
};

export default AppRoutes;