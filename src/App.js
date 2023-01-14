import { useState } from 'react';
import './App.css';
function App() {
  const [state,setState]=useState({item:"",quantity:"",price:""});
  let [item,setItem]=useState([]);
  let [quantity,setQuantity]=useState([]);
  let [price,setPrice]=useState([]);
  let [totatprice,setTotalprice]=useState([0]);
  let [delItem,setDelItem]=useState();
  let [count,setCount]=useState(0);
  const handleInputs=(e)=>{
    const value=e.target.value;
    const name=e.target.name;
    setState({...state,[name]:value});
  }
  function pushItem(){
    let val=false;
    if(!state.item || !state.quantity || !state.price){
      alert("please fill all inputs");
      return;
    }
      item.forEach((elem)=>{
        if(elem===state.item){
          val=true;
        }
      })
      if(val===true){
      alert("item already exist in list");
      return;
    }
      setItem([...item,state.item]);
      setQuantity([...quantity,state.quantity]);
      setPrice([...price,state.price]);
      setTotalprice([...totatprice,state.quantity*state.price]);      
      setState({item:"",quantity:"",price:""});
      setCount(count+1);

  }
  const delet=(e)=>{
    const value=e.target.value;
    setDelItem(value);
  }
  const deletItem=()=>{
    let val=false;
    item.forEach((elem,index)=>{
      if(delItem===elem){
        val=true;
        delete item[index];
        delete quantity[index];
        delete price[index];
        delete totatprice[index+1];
        setCount(count-1);
      }
    setDelItem("");
    })
    if(val===true){
      alert("item deleted from list");
      return;
    }else{alert("Item don't exist");}
  }
  function Listindex(props){
    if(props.id===0){
    return <h5 className="totalprice">₹{props.value}</h5>;}
    else if(props.value===undefined){
      return;
    }
    else{
      return <h5>{props.value}</h5>;
    }
  }
  function List(props){
    if(props.value===undefined){
      return;
    }else{
    return <h5>{props.value}</h5>;}
  }
  return (
    <>
    <div className="container">
      <input type="text" placeholder="Add Item Name..." name="item" onChange={handleInputs} value={state.item}/>
      <input type="number" placeholder="Add Item Quantity..." name="quantity" onChange={handleInputs} value={state.quantity}/>
      <input type="number" placeholder="Add Item Price(₹)..." name="price" onChange={handleInputs} value={state.price}/>
    </div>
    <div className='deleteItem'>
      <input type="text" placeholder='Add Item Name To Be Deleted...' onChange={delet}
      value={delItem}/>
    </div>
    <button onClick={pushItem} className="btn1">Push Item </button>
    <button onClick={deletItem} className="btn2">Delete Item </button>
    <div className='flexbox'>
    <div>
      <h2>Items</h2>
      {item.map((val)=>{return <List value={val}/>})}
      </div>
    <div>
      <h2>Quantity</h2>
      {quantity.map((val)=>{return <List value={val}/>})}
      </div>
    <div>
      <h2>Price</h2>
      {price.map((val)=>{return <List value={val}/>})}
      </div>
    <div>
      <h2>Total Price</h2>
      {totatprice.map((val,index)=>{return <Listindex id={index} value={val}/>})}
      </div>
    </div>
    <div className='bottom'>Sum Of All Total Price:- ₹{totatprice.reduce((x=0,y=0)=>{return x+y})}</div>
    <div className='bottom'>Total Item In List:- {count}</div>
    </>
  );
}

export default App;
