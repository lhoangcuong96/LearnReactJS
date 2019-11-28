import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ProductListPage from './pages/ProductListPage/ProductListPage';
import ProductAction from './pages/ProductAction/ProductAction'


const route = [
    {
        path:'/',
        exact:true,
        main:()=><HomePage/>
    },
    {
        path:'/products',
        exact:true,
        main:()=><ProductListPage/>
    },
    {
        path:'/products/add',
        exact:true,
        main:({history})=><ProductAction history={history}/>
    },
    {
        path:'/products/:id/edit',//  /products/:id là xem chi tiết sản phẩm hơn
        exact:true,
        main:({match,history})=><ProductAction match={match} history={history}/>
    },
    {
        path:'',
        exact:false,
        main:()=><NotFoundPage/>
    },
]

export default route