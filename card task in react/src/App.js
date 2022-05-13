import './App.css';
import React,{useState} from "react"
import Card from "./cards"


function App() {
const [arr,setArr] = useState([
  {

    Image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSUKSSZporXS17-TXCQQkxw1EmUJfKKNRCAA&usqp=CAU",
    Title: "MEN'S SHIRT",
    Size: "MEDIUM",
    Price : 350,
    Quantity : 100 ,
    key : 1
  },

  {
    Image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfJtqFptvFOuKUfGskXS1CMiWfYIsychYMZQ&usqp=CAU",
    Title : " KID'S SHIRT",
    Size: " SMALL ",
    Price : 800,
    Quantity : 130,
    key : 2
  },

  {
    Image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4uWa8uQQnE9qSLb7o5EcnJ1BhF_nG9b0WjQ&usqp=CAU",
    Title : "KURTA",
    Size: " LARGE",
    Price : 150,
    Quantity : 200,
    key : 3
  },


  {
    Image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKpqlnneIOtumWC5UkiNH4Jy_NOMT9_aAGbA&usqp=CAU",
    Title : "KID'S SHORT",
    Size: " MEDIUM & LARGE",
    Price : 300,
    Quantity : 350,
    key : 4
  },
])






  return (
    <div className="App">
      <header className="App-header">
         {arr.map((store,index)=>{
           return(
             <div key={index}>
                <Card data={store}/>
             </div>
           )
         })}
      </header>
    </div>
  );
}

export default App;
