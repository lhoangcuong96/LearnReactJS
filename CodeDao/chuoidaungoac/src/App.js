import React ,{Component}from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
  }
  chuoidaungoac=()=>{
    var stack= [];
    var  chuoi=['(',')','(',')','{','}'];// kiểm tra chuỗi đóng mở ngoặc đúng hay k
                                        // vd {}[]()=> ok
                                        //    ({[]})=>ok
                                        // ()[]{] => sai
    var openArray=['{','(','[']
    var closeArray=['}',')',']'];
    var back=true;
    chuoi.map((item,index)=>{
    if(openArray.includes(item)){
      stack.push(item); 
    }
    else{
      var getItem=stack.pop();// lấy phần tử ngoặc mở trên cùng của stack
      if(openArray.indexOf(getItem)!= closeArray.indexOf(item)){// kiểm tra bị trí của 2 ngoặc có cùng k 
                                                                // k cùng số => 2 ngoăc khác nhau =? sai 
        //return false => do trong if nên k nhận dc => đẩy ra ngoài   
        back=false
      }
    }
    })
    return back
  }
  render()
  {
    return (
     <p>{this.chuoidaungoac()==false?"false":"true"}</p>
    );
  }
  
}

export default App;
