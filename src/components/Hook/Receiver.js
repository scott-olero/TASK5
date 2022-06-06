import React, { useEffect, useState } from 'react';
import { Card, List, message } from 'antd';

const Receiver = ({ payload ,  number }) => {
  const [messages, setMessages] = useState([])
  var number;
  useEffect(() => {
    if (payload.topic) {
      setMessages(messages => [...messages, payload])
      //console.log(JSON.parse(payload))
      console.log(payload.message["messages"])
      console.log(payload)
    }
  }, [payload])

  const renderListItem = (item) => (
    <List.Item>
      <List.Item.Meta
        title={item.topic}
        description={item.message}
      />
    </List.Item>
  )

  return (
    <Card
      title={number}
    >
      <h1>{number}</h1>
      <List
        size="small"
        bordered
        dataSource={messages}
        renderItem={renderListItem}
      />
    </Card>
  );
}

export default Receiver;
