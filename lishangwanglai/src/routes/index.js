import React from 'react';
import {BrowserRouter,Redirect,Switch,Route,Link} from 'react-router-dom';
import Home from '../components/shouye/shouye.js';
import Lizhang from '../components/lizhang/lizhang.js';
import Mine from '../components/wode/wode.js';
import Lishi from '../components/lishi/lishi.js';
import Register from '../components/lizhang/qiehuan.js';
import Rank from '../components/shouye/gengduo.js';
// 一级路由文件
function Router(){
	return(
		<BrowserRouter>
			<Switch>
					<Route exact path='/' component={Home}/>
					<Route path='/lizhang' component={Lizhang}/>
					<Route path='/wode' component={Mine}/>
					<Route path='/lishi' component={Lishi}/>
					<Route path='/qiehuan' component={Register}/>
					<Redirect to="/"></Redirect>
			</Switch>
		</BrowserRouter>
	);
}
export default Router;