import React from 'react';

import { List, Avatar } from 'antd';

const Shifts = (props) => {
    return (
        <List
            itemLayout="horizontal"
            dataSource={props.data}
            renderItem={item => (
            <List.Item>
                <List.Item.Meta
                avatar={<Avatar src="https://r7h9p6s7.stackpathcdn.com/wp-content/uploads/2011/11/qqqqqqqqqqq.jpg" />}
                title={<a href={`/shifts/${item.id}`}>{item.location}</a>}
                description={item.shift_date}
                />
            </List.Item>
            )}
        />
    )
}

export default Shifts