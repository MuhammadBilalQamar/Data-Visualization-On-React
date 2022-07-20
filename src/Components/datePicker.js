import React, { Component } from 'react';
import DatePicker from 'react-date-picker';
import moment from 'moment'

export default class DateSelector extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        }
    }

    componentDidMount() {
    }

    onChange = date => {
        let formatedDate = moment(date).format('DD-MMM-YYYY');
        if (this.props.type == "from") {
            this.props.getDateFrom(formatedDate);
            this.setState({ date })
        }
        if (this.props.type == "to") {
            this.props.getDateTo(formatedDate);
            this.setState({ date })
        }
    }

    render() {
        return (
            <div>
                <DatePicker
                    onChange={this.onChange}
                    value={this.state.date}
                />
            </div>
        );
    }
}