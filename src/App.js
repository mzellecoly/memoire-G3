import Login from './composants/login/Login';
import { Routes, Route } from 'react-router-dom';
import Accueil from './composants/accueil/Accueil';
function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/Acceuil" element={<Accueil/>} />
        </Routes>
        {/* <Login/> */}
        {/* <Accueil/> */}
    </>

  );
}

export default App;
