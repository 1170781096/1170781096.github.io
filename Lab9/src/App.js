import './App.css';
import Navbar from './Navbar';
import SearchPhotos from './searchPhotos';
import Explore from './Explore';
import {BrowserRouter  as Router, Route, Switch } from 'react-router-dom';
import Favorite from './Favorite';
import Preference from './Preference';
import SearchPhotos2 from './searchPhotos2';
import SearchPhotos2CN from './searchPhotos2CN';
import NavbarCN from './NavbarCN';


function App() {
  return (
    <Router>
      <div className="App">
        {/* <Navbar /> */}
        <div className="container">
          <Switch>
            <Route exact path="/">  
              <Navbar />
              <h1 className="title">Home</h1>
              <h2 className="subtitle">Welcome to Cloud image, please select an image theme you want. Then click Confirm button to get the picture selected for you. </h2>
             
              <SearchPhotos2 />
            </Route>
            <Route path="/explore">
              <Navbar />
              <h1 className="title">Explore</h1>
              <SearchPhotos />
              {/* <h2 className="subtitle">Cloud Photo Search_page2</h2> */}
              <Explore />
            </Route>
            <Route path="/favorite">
              <Navbar />
              <h1 className="title">Help</h1>
              {/* <SearchPhotos /> */}
              <h2 className="subtitle">FAQ (frequently asked questions)</h2>
              <Favorite />
            </Route>
            <Route path="/Home_CN">  
              <NavbarCN />
              <h1 className="title">首页</h1>
              <h2 className="subtitle">欢迎来到云图，请选择一个您喜欢的图片主题, 然后按下确认按钮来获取为您挑选的图片 </h2>
             
              <SearchPhotos2CN />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}




export default App;
