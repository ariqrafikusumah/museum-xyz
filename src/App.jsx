import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from './auth/Login';
import './index.css'
import { Dashboard, KNNdatabatuan, KNNdatafosil, KNNdatasdg, Prediksi } from './pages/admin';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/knn-data-batuan' element={<KNNdatabatuan />} />
          <Route path='/knn-data-fosil' element={<KNNdatafosil />} />
          <Route path='/knn-data-sdg' element={<KNNdatasdg />} />
          <Route path='/prediksi' element={<Prediksi />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
