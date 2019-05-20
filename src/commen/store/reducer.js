const defautlState = {
    menus:[
        {id:1 , name:'系统管理', Icon:'book',href:'/'},
        {id:2 , name:'学生名单', Icon:'usergroup-add',href:'/user'},

    ],
    defaultMenus:['1']
}


export default ( state = defautlState,action) => {
  let newState = JSON.parse(JSON.stringify(state));

  switch(action.type){

   default:
   break;
  }
  return newState;
}