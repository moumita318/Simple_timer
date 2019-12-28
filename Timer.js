import React, { Component} from 'react'
import ReactDOM from 'react-dom'


class Timer extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			clock: 0
		};
		this.ticker =this.ticker.bind(this);
	}

	ticker(){
	    this.interval=setInterval(() => {
		this.setState({
			clock: new Date() -this.props.start
		},)
        },1000);
	}

	/**componentDidMount(){
      this.timer=setInterval(this.ticker,1000)
	}**/

	render(){
		var clock=Math.round(this.state.clock /1000);
		return(
			<div>
			<p>You have been on this site since:</p><br />
			<span>{clock}</span>
			<p>Seconds</p>
			<button onClick={this.ticker}>Start</button>
			</div>
			)
	}
}


export default Timer