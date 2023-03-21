import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from './auth/Login';
import './index.css'
import Dashboard from './pages/admin/Dashboard';
import KnnData from './pages/admin/Knn_data';
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
          <Route path='/knn-data' element={<KnnData />} />
          <Route path='/knn-form' element={<KnnForm />} />
          <Route path='/prediksi' element={<Prediksi />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
