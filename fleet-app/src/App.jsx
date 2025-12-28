import{Routes,Route,Navigate}from 'react-router-dom';
import Login from './pages/Login.jsx';
import Admin from './pages/Admin.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
function App(){
  return(
    <Routes>
      <Route path="/"element={<Navigate to="/login" replace/>}/>
      <Route path="/login" element={<Login />}/>
      <Route
      path="/admin"
      element={
        <protectedRoute>
          <Admin/>
        </protectedRoute>
      }
      />
      <Route path="*" element={<Navigate to="/login" replace />}/>


    </Routes>
  );
}
export default App;