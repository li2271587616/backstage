import React,{Component} from 'react';
import { Layout,} from 'antd';
import Sider from './commen/components/sider';
import Header from './commen/components/header';
import {HashRouter,Route} from 'react-router-dom';
import BookPage from './pages/book';
import StudentPage from './pages/student';




class App extends Component {

      state = {
        collapsed: false,
      }
      toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      };

      render() {
        return (
          <HashRouter>
          <Layout>
            <Layout>
             <Sider collapsed={this.state.collapsed} />
             <Header collapsed={this.state.collapsed} onToggle={this.toggle.bind(this)} />
             <Layout.Content  style={{background: '#fff',  minHeight: 1000,margin:'12px'}}>
                <Route path="/" exact component={BookPage}></Route> 
                <Route path="/user" exact component={StudentPage}></Route>
                  
               
             </Layout.Content>
            </Layout>
          </Layout>
          </HashRouter>
        )
      }
    }


export default App;
