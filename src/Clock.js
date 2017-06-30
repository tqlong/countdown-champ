import React, {Component} from 'react';

class Clock extends Component {
    state = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    }

    getTimeUntil = (deadline) => {
        const time = Date.parse(deadline) - Date.parse(new Date());
        //console.log('time', time);
        const seconds = Math.floor(time/1000)%60;
        const minutes = Math.floor(time/60000)%60;
        const hours = Math.floor(time/3600000)%24;
        const days = Math.floor(time/3600000/24);
        //console.log('days', days, 'hours', hours, 'minutes', minutes, 'seconds', seconds);
        this.setState({
            days, hours, minutes, seconds
        })
    }

    componentWillMount() {
        this.getTimeUntil(this.props.deadline);
    }

    componentDidMount() {
        setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
    }

    leading0 = (num) => {
        if (num < 10) {
        return '0' + num;
        }
        return num;
    }

    render() {
        return ( <div>
            <div className="clock-days">{this.leading0(this.state.days)} days</div>
            <div className="clock-hours">{this.leading0(this.state.hours)} hours</div>
            <div className="clock-minutes">{this.leading0(this.state.minutes)} minutes</div>
            <div className="clock-seconds">{this.leading0(this.state.seconds)} seconds</div>
        </div> )
    }
}

export default Clock;