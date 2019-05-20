import React , {Component} from 'react';
import {Input,Table,Button} from 'antd';
import  {BookWrap,MainWrap} from  './style';
import http from '../../utils/http';




const dataSource = [
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '2',
      name: '刘德华',
      age: 15,
      address: '西湖区湖底公园1号',
    },
    {
      key: '3',
      name: '薛之谦',
      age: 25,
      address: '西湖区湖底公园1号',
    },
    {
      key: '4',
      name: '白敬亭',
      age: 48,
      address: '西湖区湖底公园1号',
    },
    {
      key: '5',
      name: '钟小江',
      age: 23,
      address: '西湖区湖底公园1号',
    },
    {
      key: '6',
      name: '嘻嘻',
      age: 23,
      address: '西湖区湖底公园1号',
    },
    {
      key: '7',
      name: '哈哈',
      age: 23,
      address: '西湖区湖底公园1号',
    },
    {
      key: '8',
      name: '哼哼',
      age: 23,
      address: '西湖区湖底公园1号',
    },
    {
      key: '9',
      name: '啦啦',
      age: 23,
      address: '西湖区湖底公园1号',
    },
  ];

const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '学号',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    },
  ];

class Book extends Component{
  constructor(props){
    super(props);
    this.state = {
      list:[],
      inputVal:'',
      pageNum:1,
      pageSize:1.
    }
    this.getBookList = this.getBookList.bind(this);
    this.onChange = this.onInputChange.bind(this);
    this.onPageChange = this.onPageChange.bind(this);
  }
    render() {
        return(
            <BookWrap>
            <div className="top">
             <Input 
             placeholder="请输入姓名..." 
             value ={this.state.inputVal}
             />
              <Button  type="primary" onClick={this.getBookList} onChange={this.onInputChange} > 搜索</Button>
            </div>
            <MainWrap>
             <Table 
             dataSource={dataSource} 
             columns={columns}
             rowKey="name"
             pagination={{position:'bottom', total:100,defaultPageSize:4 ,onPageChange:this.onPageChange}}
             ></Table>
            </MainWrap>
            </BookWrap>
        )
    }
    componentDidMount(){
     this.getBookList();
    }
    onPageChange(page,pageSize){
     this.setState(() => ({
       pageSize:pageSize,
       pageNum:page
     }))
     this.getBookList();
    }
    onInputChange(e){
      let value = e.target.value;
      this.setState(() => ({
        inputVal:value
      }))
    } 

    getBookList(){
      let { inputVal,pageNum,pageSize} = this.state;
       http.get('/api/book',{
         params:{
           bookName:inputVal,
           pageNum,
           pageSize,
         }
       })
      .then(res => {
        if(res.code === 0) {
           this.setState(() => ({
             list:res.data.list
           }))
        }
      })
    }
}
export default Book; 