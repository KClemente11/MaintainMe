import Register from './components/Register'
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Register />} >
        <Route index element={<Register />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
