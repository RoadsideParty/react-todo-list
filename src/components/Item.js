import React from "react";
import { Checkbox, Row, Col, Space, Popconfirm } from "antd";
class Item extends React.Component {
    confirm = () => {
        this.props.delItem(this.props.item.index - 1)
    }
    onChange = () => {
        this.props.isCheckdChange(this.props.item.index - 1)
    }
    render() {
        const item = this.props.item
        return (
            <Row style={{ backgroundColor: 'skyblue', padding: '10px', borderBottom: '1px solid #ccc' }} justify="space-between">
                <Col>
                    <Space size='middle'>
                        <span>{item.index}</span>
                        <span style={item.isCheckd ? { textDecoration: 'line-through' } : {}}>{item.name}</span>
                    </Space>
                </Col>
                <Col>
                    <Space size='middle'>
                        <Checkbox onChange={this.onChange} />
                        <Popconfirm
                            title="确定要删除该条待办吗?"
                            onConfirm={this.confirm}
                            okText="确定"
                            cancelText="取消"
                            okButtonProps={{ danger: true }}
                        >
                            <span style={{ cursor: 'pointer' }}>删除</span>
                        </Popconfirm>
                    </Space>
                </Col>
            </Row>
        )
    }
}

export default Item