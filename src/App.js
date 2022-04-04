import { Route, Routes } from 'react-router-dom';
import './App.css';
import Fotter from './components/Fotter/Fotter';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Notfound from './components/Notfound/Notfound';
import Rechart from './components/Rechart/Rechart';
import Review from './components/Review/Review';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/review' element={<Review></Review>}></Route>
        <Route path='/dashboard'element={<Rechart></Rechart>}></Route>
        <Route path='*'element={<Notfound></Notfound>}></Route>
      </Routes>
      <Fotter></Fotter>
    </div>
  );
}

export default App;
