import React, {Component} from 'react';
import {Layout,Icon } from 'antd'

class Header extends Component{

    render(){
        return(
            <Layout.Header style={{ background: '#f0f2f5', padding:0}}  >
                <Icon style={{ fontSize:'30px'}}
                  className="trigger"
                  type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
                  onClick={this.props.onToggle}
                />
              </Layout.Header>
        )
    }
}

export default Header;