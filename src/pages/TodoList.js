import React from "react";
import { Row, Col, Input, Button, message } from 'antd'
import Item from '../components/Item'

class TodoList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: []
        }
        this.input = React.createRef()
    }
    add = () => {
        const value = this.input.current.input.value
        if (value === '') {
            message.error('待办内容不能为空');
            return
        }
        this.setState({
            list: [...this.state.list, value]
        })
    }
    delItem = (index) => {
        this.state.list.splice(index, 1)
        this.setState({
            list: this.state.list
        })
    }
    render() {
        const { list } = { ...this.state }
        return (
            <Row justify="center">
                <Col span={8}>
                    <div>
                        <div style={{ backgroundColor: '#5dceb2' }}>
                            <span style={{ display: 'block', textAlign: 'center', fontSize: '20px', fontWeight: 'bold', color: 'white' }}>待办列表</span>
                            <Input ref={this.input} className="todo-list-ipt" placeholder="输入待办" suffix={<Button onClick={this.add}>添加待办</Button>} />
                        </div>
                        <div>
                            {
                                list.map((item, index) => {
                                    return (<Item key={index} item={{ index: ++index, value: item }} delItem={this.delItem} />)
                                })
                            }
                        </div>
                    </div>
                </Col>
            </Row>
        )
    }
}

export default TodoList