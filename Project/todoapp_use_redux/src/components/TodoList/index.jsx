import { Col, Row, Input, Button, Select, Tag, Space } from 'antd'
import Todo from '../Todo'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'
import { searchTextSelector, todoListSelector, todoListRemainingSelector } from '../../redux/selectors'

import { todoListSlice } from './TodoSlice'

export default function TodoList() {
  const [todoName, setTodoName] = useState('')
  const [priority, setPriority] = useState('Medium')

  const handleInputChange = (e) => {
    setTodoName(e.target.value)
  }

  const handlePriorityChange = (value) => {
    setPriority(value)
  }

  const dispatch = useDispatch()
  const handleAddTodo = () => {
    if (!todoName) return
    // Truyền vào dispatch 1 action
    dispatch(todoListSlice.actions.addTodo({
      id: uuidv4(),
      name: todoName,
      priority: priority,
      completed: false
    }))
    setTodoName('')
    setPriority('Medium')
  }

  // useSelector sẽ lấy ra giá trị trong state chung (ở store)
  // const todoList = useSelector(todoListSelector)
  // console.log(todoList)
  // const searchText = useSelector(searchTextSelector)
  // console.log('Redux: ', searchText)

  const todoList = useSelector(todoListRemainingSelector)


  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {todoList.map(todo => (
          <Todo key={todo.id} todoId={todo.id} name={todo.name} prioriry={todo.priority} completed={todo.completed} />
        ))}
      </Col>
      <Col span={24}>
        <Space.Compact style={{ display: 'flex' }} size='large' >
          <Input value={todoName} onChange={handleInputChange} />
          <Select defaultValue="Medium" value={priority} onChange={handlePriorityChange}>
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
          <Button type='primary' onClick={handleAddTodo}>
            Add
          </Button>
        </Space.Compact>
      </Col>
    </Row>
  )
}
