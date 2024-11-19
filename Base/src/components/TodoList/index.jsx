import { Col, Row, Input, Button, Select, Tag, Space } from 'antd'
import Todo from '../Todo'

export default function TodoList() {

  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        <Todo name={'Học lập trình'} prioriry={'Medium'} completed={false} />
        <Todo name={'Học đá bóng'} prioriry={'Low'} completed={true} />
        <Todo name={'Học NextJs'} prioriry={'High'} completed={false} />
      </Col>
      <Col span={24}>
        <Space.Compact style={{ display: 'flex' }} size='large' >
          <Input />
          <Select defaultValue="Medium" >
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type='primary' >
            Add
          </Button>
        </Space.Compact>
      </Col>
    </Row>
  )
}
