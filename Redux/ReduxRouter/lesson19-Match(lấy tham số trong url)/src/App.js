import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';
import Menu from './components/Menu';
import router from './router';
import Product from './components/Product'





class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* Menu */}
            <Menu/>
          {/* Menu */}

           {/* Content Page */}
          <Switch>{/* import Switch */} 
            {this.showMenu(router)}

            {/* component viết thường */}
            {/* <Route path="/" exact component={Home} /> */}
            {/* exact là để chính xác đường link luôn*/}
            {/* chứ "/About vẫn có "/" trong đó mà"*/}
            {/* <Route path="/About" component={About} /> */}
            {/* Content Page */}
            {/* Not Found  */} 
            <Route  component={NotFound} />
           
            }}/>
          </Switch>


        </div>
      </Router>
    )
  }
  showMenu=(router)=>{
    let result= null;
    if(router.length>0){
       result= router.map((item,index)=>{
        return  (<Route path={item.path} exact={item.exact} component={item.main}/>)
        //component này gọi về 1 component() , ở đây là home component 
        // => phần path phải trả về 1 component chứ k phải là chuỗi string nếu muốn làm kiểu này

        // Nếu nhiều component cần render ra cho 1 path thì thay bỏ phần component và thêm vào
        // render={props=>
        // <div>  
        //    <Header/> <Menu/> <Content/> <Footer/>
       // </div>
       //}
      })
    }
    return result
  }
}

export default App;
