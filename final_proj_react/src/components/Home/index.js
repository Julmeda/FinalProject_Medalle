import React, { useState } from "react";
import CustomNav from "../CustomNav";
import { userData } from "../../helpers";
import  Card  from "./Card";
import axios from "axios";

const Home = () => {
  const { username } = userData();
  const [search,setSearch]=useState("");
  const [bookData,setData]=useState([]);
  const searchBook=(evt)=>{
    if(evt.key==="Enter")
    {
      axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyC33D1iv0fDt9eAcpdH-CTQ28qZ0NGyRag'+'&maxResults=40')
      .then(res=>setData(res.data.items))
      .catch(err=>console.log(err))
    }
  }
  return (
    <div>
      <CustomNav />
      <div className="home">
        <h2 style={{ color: '#f9ed9b' }}>Welcome {username}</h2>
        <>
          <div className="header">
            <div className="row1">
              <h1>"Discover your literary journey <br/> within the pages of your book" </h1>
            </div>
            <div className="row2">
              <h2>Find Your Book</h2>
              <div className="search">
                  <input type="text" placeholder="Enter Your Book Name" 
                  value={search} onChange={e=>setSearch(e.target.value)}
                  onKeyPress={searchBook} />
                  <button><i class="fas fa-search"></i></button>
              </div>
              <img src="./images/bg2.png" alt="" />
            </div>
          </div>
          <div className="containers">
            {
              <Card book={bookData} />
            } 
          </div>
        </>
      </div>
    </div>
  );
};

export default Home;
