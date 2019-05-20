import React,{Component} from 'react';
import {Layout,Menu,Icon} from 'antd';
import store from '../../store';
import {Link} from 'react-router-dom';

class Sider extends Component{
  constructor(props){
    super(props);
    this.state = {
      menus:store.getState().commen.menus,
      defaultMenus:store.getState().commen.defaultMenus
    }
    store.subscribe(() => {
      this.setState(() => ({
        menus: store.getState().commen.menus,
        defaultMenus:store.getState().commen.defaultMenus
      }))
    })
  }
    render(){
        return(
          <Layout.Sider trigger={null} collapsible collapsed={this.props.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={this.state.defaultMenus}>
          {
            this.state.menus.map((item,index) => {
                return (
                  <Menu.Item key={index+1}>
                  <Link to={item.href}>
                    <Icon type={item.Icon} />
                    <span>{item.name}</span>
                    </Link>
            </Menu.Item>
           
                )
            })                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
          }
            
          </Menu>
        </Layout.Sider>
     )
    }
}

export default Sider;