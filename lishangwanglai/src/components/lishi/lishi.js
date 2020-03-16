import React,{ Component } from 'react';
import {Link,Route,Redirect,Switch} from 'react-router-dom';
import Header from '../header.js';
import Home from '../shouye/shouye';
import Lishichild from './lishi1'
import lishi from './lishi.css';

class Lishi extends Component {
	constructor(props){
		super(props);
		this.state = {
			index:0
		}
		this.arr=[{title:'待参加',isAttend:'false'},{title:'已参加',isAttend:'true'}]
	}
	changeIndex(i){
		this.setState({
			index:i
		})
	}
	changedisplay(){
		this.lishiDenglu.style.display="block"
	}
	handlewei(){
		this.qw.style.display = 'block'
	}

	render(){
		return(
			<div className="lishi">
				<div className="lishi-header">
					
						<div className="lishi-fanhui">
							<Link to = "/home">
								<svg className="icon">
									<use xlinkHref="#icon-fanhui1">
									</use>
								</svg>
							</Link>
						</div>
					
					<div className="lishi-tab">
						
						{
							this.arr.map((value,key)=>{
								return (
								
								<Link key={key} to={{pathname:`/lishi/${value.title}/${value.isAttend}`}} className={this.state.index==key?'active':''}>
								<li key={key} onClick={this.changeIndex.bind(this,key)}>
									{value.title}</li>
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
							this.lishiDenglu = n
						}}>
						
					</div>
					<div className="qw" ref={(n)=>{
						this.qw = n
					}}>
						
						
					</div>
				</div>
				<Switch>
					<Route path='/home' component={Home}/>
					<Route path='/lishi/:title/:isAttend' component={Lishichild}/>
					<Redirect from='/' to='/lishi/待参加/false'/>
				</Switch>
				<Header></Header>
			</div>
		)
	}
}
export default Lishi ;