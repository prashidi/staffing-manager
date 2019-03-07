import React from 'react';
import { Link } from 'react-router-dom';

import { Layout, Menu, Breadcrumb, Icon} from 'antd';

const { Header, Content, Footer } = Layout;



const CustomLayout = (props) => {
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

                {
                    props.isAuthenticated ?
    
                    <Menu.Item key="2" onClick={this.props.logout}>
                        Logout
                    </Menu.Item>
    
                    :
    
                    <Menu.Item key="2">
                        <Link to="/login">Login</Link>
                    </Menu.Item>
                }           
                    <Menu.Item key="1">
                        <Link to="/"><Icon type="home" />Home</Link>
                    </Menu.Item>
                </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                    <Breadcrumb.Item><Link to="/">Functions</Link></Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                    {props.children}
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                Patrick Rashidi ©2018 Created by <Link to="http://www.intelliware.co.nf">IntelliWare</Link>
            </Footer>
        </Layout>
    )
}
export default CustomLayout;



  