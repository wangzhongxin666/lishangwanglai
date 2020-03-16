import React,{Component} from 'react';
import './lizhang.css';
import {Redirect,Router,Link,Route,Switch} from 'react-router-dom';
import Home from '../shouye/shouye';
import Header from '../header';
import Register from './qiehuan';
import Lizhchild from './lizhang1.js';

class Lizhang extends Component{
	constructor(props){
		super(props);
		this.state = {
			index:0
		};
		this.arr=[{title:'收礼'},{title:'送礼'}];
	}
	changeIndex(i){
		this.setState({
			index:i
		})
	}
	changefanhui(){
		window.history.go(-1)
	}
	changedisplay(){
		this.lizhangDenglu.style.display="block"
	}
	handlewei(){
		this.qw.style.display = 'block'
	}
	render(){
		return(
			<div className="lizhang">
				<div className="lizhang-header">
					<div className="lizhang-fanhui" onClick={this.changefanhui.bind(this)}>
						<svg className="icon">
							<use xlinkHref="#icon-fanhui1"></use>
						</svg>
					</div>
				
					<div className="lizhang-tab">
						{
							this.arr.map((value,key)=>{
								return (
								<Link key={key} to={`/lizhang/${value.title}`} className={this.state.index==key?'active':''}>
								<li key={key} onClick={this.changeIndex.bind(this,key)}>
									{value.title}
								</li>
								</Link>
								)
						})}
					</div>
					<div className="lizhang-reduce" onClick={this.changedisplay.bind(this)}>
						<svg className="icon">
							<use xlinkHref="#icon-tianjia1">
							</use>
						</svg>
					</div>
					<div className="lizhang-denglu" ref={
						(n)=>{
							this.lizhangDenglu = n
						}}>
					</div>
				</div>
				<br/>
				<div className="qw" ref={(n)=>{
					this.qw = n
				}}>
					
				</div>
				<Route path="/lizhang/:title" component={Lizhchild}/>
				<Redirect to="/lizhang/收礼"></Redirect>
				<Header></Header>
			</div>
		)
	}
}

export default Lizhang;