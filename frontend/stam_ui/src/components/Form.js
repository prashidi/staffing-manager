import React from 'react';
import axios from 'axios';

import { Form, Input, Button, DatePicker } from 'antd';

class CustomForm extends React.Component {
    handleFormSubmit = (event, requestType, shiftID) => {
      const shift_date = event.target.elements.shift_date.value;
      const location = event.target.elements.location.value;
      const ss_number = event.target.elements.ss_number.value;
      const bb_number = event.target.elements.bb_number.value;

      switch( requestType ) {
        case 'post':
          return axios.post('http://127.0.0.1:8000/api/shifts/', {
            shift_date: shift_date,
            location: location,
            ss_number: ss_number,
            bb_number: bb_number
          })
          .then(res => console.log(res))
          .catch(error => console.err(error));
        case 'put':
          return axios.put(`http://127.0.0.1:8000/api/shifts/${shiftID}/`, {
            shift_date: shift_date,
            location: location,
            ss_number: ss_number,
            bb_number: bb_number
          })
          .then(res => console.log(res))
          .catch(error => console.err(error));
        
      }

    }

    render() {
      
      function onChange(date, dateString) {
        console.log(date, dateString);
      }

      function onOk(value) {
        console.log('onOk: ', value);
      }
      return (
        <Form onSubmit={(event) => this.handleFormSubmit(
          event, 
          this.props.requestType,
          this.props.shiftID
        )}>
          <Form.Item label="Function Date and Time"> 
            <DatePicker name = "shift_date" showTime onChange={onChange} onOk={onOk}/>
          </Form.Item>
          <Form.Item label="Location">
              <Input name="location"/>
          </Form.Item>
          <Form.Item label="Service Staff Number">
              <Input name="ss_number"/>
          </Form.Item>
          <Form.Item label="Barman Number">
              <Input name="bb_number"/>
          </Form.Item>
          <Form.Item>
              <Button type="primary" htmlType="submit" shape="round" icon="save">
                  {this.props.btnTxt}
              </Button>
          </Form.Item>
        </Form>
      );
    }
  }
  
export default CustomForm;