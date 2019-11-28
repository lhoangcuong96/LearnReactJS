import React,{Component} from 'react'// phải có 2 thg này trong tất cả các component
import Home from './components/Home'
import About from './components/About'
import NotFound from './components/NotFound';
import Contact from './components/Contact';
import Products from './components/Products';
import Product from './components/Product';
import Login from './components/Login'
import Logout from './components/Logout';

const router=[
    {
        path:'/',
        exact:true,
        main:()=><Home/>
    },
    {
        path:'/about',
        exact:false,
        main:()=><About/>
    },
    {
        path:'/contact',
        exact:false,
        main:()=><Contact/>
    },
    {
        path:'/products',
        exact:true,// exact phai la true neu k /products/iphone van tra ve cai nay
        main:({location,match})=><Products match={match} location={location}/> // khi path trùng với url thì 1 đối tượng match dc tạo ra
                                    // match bao gồm tất cả trên route
    },
    {
        path:'/products/:name',
        exact:false,
        main:({match})=><Product match={match}/> // khi path trùng với url thì 1 đối tượng match dc tạo ra
                                    // match bao gồm tất cả trên route
        // :name là tham số sau cái /products
        //=> nếu k có cái path /products ở trên kia kìa sẽ k xài dc /products/:name
    },
    {
        path:'/login',
        exact:false,
        main:({location})=><Login location={location}/>
    },
    {
        path:'/logout',
        exact:false,
        main:({location})=><Logout location={location}/>
    },
    {
        path:'',
        exact:false,
        main:()=><NotFound/>
    },// chủ ý cái not found này phải nằm ở dưới cùng
]

export default router;