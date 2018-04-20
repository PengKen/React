import React, { Component } from 'react';
import '../../App.css';
import './Menu.css';
import { Layout,Menu } from 'element-react';
import { Link } from 'react-router';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class Menus extends Component{

    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render(){
        return(
                <Layout.Col span={5}>
                    <Menu className="el-menu-vertical-demo" defaultOpeneds={['1']} uniqueOpened = "true" >
                        <Menu.SubMenu className={this.props.className} index="1" title="首页">
                            <Menu.SubMenu index='2' title={<span>系统管理</span>}>
                                <Menu.SubMenu index='3' title={<p>用户与权限管理</p>}>
                                    <Menu.Item index="3-1"><Link to='/contents/ApartmentManage'>部门管理</Link></Menu.Item>
                                    <Menu.Item index="3-2"><Link to='/contents/UserManage'>用户管理</Link></Menu.Item>
                                    <Menu.Item index="3-3"><Link to='/contents/UserGroupManage'>用户组管理</Link></Menu.Item>
                                    <Menu.Item index="3-4"><Link to='/contents/RoleManage'>角色管理</Link></Menu.Item>
                                    <Menu.Item index="3-5"><Link to='/contents/ModulesManage'>模块管理</Link></Menu.Item>
                                </Menu.SubMenu>
                            </Menu.SubMenu>
                            <Menu.SubMenu index="4" title={<span>数据管理</span>}>
                                <Menu.Item index="1-1">选项3</Menu.Item>
                            </Menu.SubMenu>
                            <Menu.SubMenu index="5" title={<span>基本分析工具</span>}>
                                <Menu.Item index="1-1">选项3</Menu.Item>
                            </Menu.SubMenu>
                            <Menu.SubMenu index="6" title={<span>模型配置</span>}>
                                <Menu.Item index="1-1">选项3</Menu.Item>
                            </Menu.SubMenu>
                            <Menu.SubMenu index="7" title={<span>主题分析</span>}>
                                <Menu.Item index="1-1">选项3</Menu.Item>
                            </Menu.SubMenu>
                            <Menu.SubMenu index="8" title={<span>景气预测</span>}>
                                <Menu.Item index="1-1">选项3</Menu.Item>
                            </Menu.SubMenu>
                            <Menu.SubMenu index="9" title={<span>展示层配置</span>}>
                                <Menu.Item index="1-1">选项3</Menu.Item>
                            </Menu.SubMenu>
                        </Menu.SubMenu>
                    </Menu>
                </Layout.Col>
        );
    }
}


export default Menus;