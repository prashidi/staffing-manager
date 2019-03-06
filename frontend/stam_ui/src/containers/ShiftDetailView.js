import React from 'react';
import axios from 'axios';

import { Card } from 'antd';

class ShiftDetail extends React.Component {
    state = {
        shifts: {}
    }

    componentDidMount() {
        const  shiftID = this.props.match.params.shiftID;
        axios.get(`http://127.0.0.1:8000/api/shifts/${shiftID}`)
            .then(res => {
                this.setState({
                    shifts: res.data
                });
        })
    }

    render() {
        return (
            <Card title = {this.state.shifts.location}>
                <p>{this.state.shifts.shift_date}, {this.state.shifts.ss_number} Service staff, { this.state.shifts.bb_number } barman(s) </p>
            </Card>
        )
    }
}

export default ShiftDetail;