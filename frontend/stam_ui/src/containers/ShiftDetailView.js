import React from 'react';
import axios from 'axios';

import { Card, Button } from 'antd';
import CustomForm from '../components/Form';

class ShiftDetail extends React.Component {
    state = {
        shifts: {},
        size: 'large',
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
        const size = this.state.size;
        return (
            <div>
                <Card title = {this.state.shifts.location}>
                    <p>{this.state.shifts.shift_date}, {this.state.shifts.ss_number} Service staff, { this.state.shifts.bb_number } barman(s) </p>
                    <div>
                        <Button type="primary" shape="round" icon="check-circle" size={size}>Apply</Button>
                    </div>
                </Card>
                <CustomForm 
                    requestType = "put"
                    shiftID = {this.props.match.params.shiftID}
                    btnTxt = "Update"
                />
            </div>
        )
    }
}

export default ShiftDetail;