import Register from './components/Register'
import Login from './components/Login'
import { Routes, Route, Switch } from "react-router-dom"

function App() {
  return (
    <>
    <Routes>
      <Route path='' component={<Register />} >
        <Route index element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
