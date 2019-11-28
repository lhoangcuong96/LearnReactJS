import React,{Component} from 'react'// phải có 2 thg này trong tất cả các component
import Home from './components/Home'
import About from './components/About'
import NotFound from './components/NotFound'

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
        path:'',
        exact:false,
        main:()=><NotFound/>
    },
]

export default router;