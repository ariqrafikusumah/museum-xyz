import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from './auth/Login';
import './index.css'
import Dashboard from './pages/admin/Dashboard';
import KnnDataBatuan from './pages/admin/Knn_data_batuan';
import KnnDataFosil from './pages/admin/Knn_data_fosil';
import KnnDataSdg from './pages/admin/Knn_data_sdg';
import KnnForm from './pages/admin/Knn_form';
import NotFound from './pages/NotFound';
import Prediksi from './pages/admin/Prediksi';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/knn-data-batuan' element={<KnnDataBatuan />} />
          <Route path='/knn-data-fosil' element={<KnnDataFosil />} />
          <Route path='/knn-data-sdg' element={<KnnDataSdg />} />
          <Route path='/knn-form' element={<KnnForm />} />
          <Route path='/prediksi' element={<Prediksi />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
