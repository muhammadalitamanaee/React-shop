import React from "react";
import {useState} from "react";
import HeaderAndFooter from "./components/header&footer/Header";
import FilterBar from "./components/FilterBar/FilterBar";
import Card from "./components/card/card";
const dataBase = [
    {
        "id": 1,
        "email": "george.bluth@reqres.in",
        "first_name": "George",
        "price": 25.6,
        "avatar": "https://reqres.in/img/faces/1-image.jpg"
    }, {
        "id": 2,
        "email": "janet.weaver@reqres.in",
        "first_name": "Janet",
        "price": 18.9,
        "avatar": "https://reqres.in/img/faces/2-image.jpg"
    }, {
        "id": 3,
        "email": "emma.wong@reqres.in",
        "first_name": "Emma",
        "price": 14.9,
        "avatar": "https://reqres.in/img/faces/3-image.jpg"
    }, {
        "id": 4,
        "email": "eve.holt@reqres.in",
        "first_name": "Eve",
        "price": 10.9,
        "avatar": "https://reqres.in/img/faces/4-image.jpg"
    }, {
        "id": 5,
        "email": "charles.morris@reqres.in",
        "first_name": "Charles",
        "price": 25.9,
        "avatar": "https://reqres.in/img/faces/5-image.jpg"
    }, {
        "id": 6,
        "email": "tracey.ramos@reqres.in",
        "first_name": "Tracey",
        "price": 49.9,
        "avatar": "https://reqres.in/img/faces/6-image.jpg"
    },
]
function App() {
   const [data,setData] = useState(dataBase);
   const [a,setA] = useState()

    return (
        <div>
            <HeaderAndFooter><h2 className={'text-white'}>React Shopping Cart</h2></HeaderAndFooter>
            <div className={'w-[50vw] m-auto gap-4'}>
                <FilterBar validTest={setA(a)}   dataSort ={data} />
                <div className={'w-max] flex gap-4'}>
                <Card validTest={''}  item ={data}/>

                <div className=" p-4">
                    <h1 className={'border-b border-black pb-2 text-center'}>You have 1 in the Cart</h1>
                </div>

                </div>
            </div>
            <HeaderAndFooter><h2 className={'text-white text-center'}>React Shopping Cart</h2></HeaderAndFooter>
        </div>
    )
}

export default App;
