import React from 'react';
import axios from 'axios';
import Shifts from '../components/Shifts';

class ShiftList extends React.Component {
    state = {
        shifts: []
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/shifts/')
            .then(res => {
                this.setState({
                    shifts: res.data
                });
            })
    }

    render() {
        return (
            <Shifts data ={ this.state.shifts }/>
        )
    }
}

export default ShiftList;