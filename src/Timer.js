import React, {Component} from 'react';

class Timer extends Component {
    state = {
        days: 10,
        hours: 10,
        minutes: 10,
        seconds: 10
    }

    getNextTime = () => {
        if (this.state.seconds === 0 && this.state.minutes === 0
            && this.state.hours === 0 && this.state.days === 0) {
                return;
            }
        let seconds = this.state.seconds - 1;
        let minutes = this.state.minutes;
        let hours = this.state.hours;
        let days = this.state.days;
        if (seconds < 0) {
            seconds = 59;
            minutes--;
            if (minutes < 0) {
                minutes = 59;
                hours--;
                if (hours < 0) {
                    hours = 23;
                    days--;
                }
            }
        }
        this.setState({days, hours, minutes, seconds});
    }

    getStartTimer = (timer) => {
        let tokens = timer.split(":");
        let len = tokens.length;
        let days = 0;
        let hours = 0;
        let minutes = 0;
        let seconds = 0;
        if (len === 1) {
            seconds = parseInt(tokens[0]);
        } else if (len === 2) {
            minutes = parseInt(tokens[0]);
            seconds = parseInt(tokens[1]);
        } else if (len === 3) {
            hours = tokens[0];
            minutes = parseInt(tokens[1]);
            seconds = parseInt(tokens[2]);
        } else {
            days = parseInt(tokens[len-4]);
            hours = parseInt(tokens[len-3]);
            minutes = parseInt(tokens[len-2]);
            seconds = parseInt(tokens[len-1]);
        }
        console.log('days', days, 'hours', hours, 'minutes', minutes, 'seconds', seconds);
        return {days, hours, minutes, seconds};
    }

    componentWillMount() {
        this.setState(this.getStartTimer(this.props.timer));
    }

    componentDidMount() {
        setInterval(this.getNextTime, 1000);
    }

    componentWillReceiveProps(nextProps) {
        //if (nextProps.timer !== this.props.timer) {
            console.log('recevie new props', nextProps);
            this.setState(this.getStartTimer(nextProps.timer));
        //}
    }

    leading0 = (num) => {
        if (0 < num && num < 10) {
        return '0' + num;
        }
        return num;
    }

    isTimeout = () => {
        return this.state.seconds === 0 && this.state.minutes === 0
            && this.state.hours === 0 && this.state.days === 0;
    }

    render() {
        return (<div className={this.isTimeout() ? "time-out" : null}>
            <div className="clock-days">{this.leading0(this.state.days)} days</div>
            <div className="clock-hours">{this.leading0(this.state.hours)} hours</div>
            <div className="clock-minutes">{this.leading0(this.state.minutes)} minutes</div>
            <div className="clock-seconds">{this.leading0(this.state.seconds)} seconds</div>
        </div>);
    }
}

export default Timer;