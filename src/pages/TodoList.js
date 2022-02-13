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
        const newItem = { id: Math.random(), name: '', isCheckd: false }
        newItem.name = this.input.current.state.value
        if (newItem.name === '' || newItem.name === undefined) {
            message.error('待办内容不能为空');
            return
        }

        this.setState({
            list: [...this.state.list, newItem]
        })
        this.input.current.state.value = ""
    }
    delItem = (index) => {
        this.state.list.splice(index, 1)
        this.setState({
            list: this.state.list
        })
    }
    isCheckdChange = (list_index) => {
        const newList = this.state.list.map((item, index) => {
            if (index === list_index) {
                item.isCheckd = !item.isCheckd
            }
            return item
        })
        this.setState({
            list: newList
        })
    }
    render() {
        const { list } = { ...this.state }
        return (
            <div>
                <Row justify="center">
                    <Col span={8}>
                        <div>
                            <div style={{ backgroundColor: '#5dceb2' }}>
                                <span style={{ display: 'block', textAlign: 'center', fontSize: '20px', fontWeight: 'bold', color: 'white' }}>待办列表</span>
                                <Input ref={this.input} className="todo-list-ipt" placeholder="输入待办" onPressEnter={this.add} suffix={<Button onClick={this.add}>添加待办</Button>} />
                            </div>
                            <div>
                                {
                                    list.map((item, index) => {
                                        return (<Item key={item.id} item={{ index: ++index, name: item.name, isCheckd: item.isCheckd }} delItem={this.delItem} isCheckdChange={this.isCheckdChange} />)
                                    })
                                }
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row justify="center">
                    <Col span={8}>
                        <div style={{ backgroundColor: 'rgb(235 235 235)' }}>
                            <span>待办总数:{list.length}件</span>
                            <br />
                            <span>
                                未完成数:
                                {
                                    list.filter(item => {
                                        if (!item.isCheckd) {
                                            return item
                                        }
                                    }).length
                                }
                                件
                            </span>
                            <br />
                            <span>已完成数:
                                {
                                    list.filter(item => {
                                        if (item.isCheckd) {
                                            return item
                                        }
                                    }).length
                                }
                                件
                            </span>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default TodoList