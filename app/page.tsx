'use client';
import type { Metadata } from "next";
import { Counter } from "./components/counter/Counter";
import React from "react";
import { useSelector, useDispatch } from 'react-redux';

import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store'


import { addItem } from './actions';
let selectCount = 0;


export default function Home() {
 

  const count = useSelector(selectCount)
  const dispatch = useDispatch()
  
return(<div>
  
  <input type="text" id="todo" name="todo" placeholder="Enter here"/>
  <button onClick={Enter}>Enter</button></div>
);

function Enter(props: any){

}

}
