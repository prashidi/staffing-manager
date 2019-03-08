import React from 'react';
import { NavLink, Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../store/actions/auth';

import { Layout, Menu, Breadcrumb, Icon} from 'antd';

const { Header, Content, Footer } = Layout;

class CustomLayout extends React.Component {
    render() {
        return (
            <Layout className="layout">
                <Header className>
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['1']}
                        style={{ width: 256, lineHeight: '64px'}}
                    >           
                        <Menu.Item key="1">
                            <Link to="/"><Icon type="home" />Home</Link>
                        </Menu.Item>
                        {
                            this.props.isAuthenticated ?
            
                            <Menu.Item key="2" onClick={this.props.logout}>
                                Logout
                            </Menu.Item>
            
                            :
            
                            <Menu.Item key="2">
                                <Link to="/login"><Icon type="user" />Login</Link>
                            </Menu.Item>
                        }
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                        {
                            this.props.isAuthenticated ?
                                <Breadcrumb.Item><Link to="/shifts/">Functions</Link></Breadcrumb.Item>
                            :
                            <Breadcrumb.Item></Breadcrumb.Item>
                        }
                    </Breadcrumb>
                    <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                        {this.props.children}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Patrick Rashidi ©2018 Created by <NavLink to="http://www.intelliware.co.nf">IntelliWare</NavLink>
                </Footer>
            </Layout>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.logout()) 
    }
}

export default withRouter(connect(null, mapDispatchToProps)(CustomLayout));



  