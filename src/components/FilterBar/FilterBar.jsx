import React, {useState} from 'react';
import {logDOM} from "@testing-library/react";

const FilterBar = (props) => {
    // console.log(props.onNewData())
    const [newTest,setNewTest] = useState(props.dataSort);
    const changeOrder= (e)=>{
        // console.log(e.target.value)
        // console.log(props.dataSort.map((e)=>(e.price)))
        // props.dataSort.sort((a,b)=>(a.price-b.price))
        setNewTest(props.dataSort.sort((a,b)=>(a.price-b.price)));
        // console.log(newTest)
        props.validTest = newTest;
        if (e.target.value ==='Highest'){
            const test = props.dataSort.map((e)=>(e));
            // console.log(test)
        }

    }
    return (
        <div className={'w-full flex justify-between border-b border-zinc-400 p-4 mb-4'}>
            <p>6 Products</p>
            <div>
                <label htmlFor="selectOrder">Order</label>
                <select onChange={changeOrder} name="" id="selectOrder" className={'border border-zinc-400'}>
                    <option value="Lowest">Lowest</option>
                    <option value="Highest">Highest</option>
                </select>
            </div>
            <div>
                <label htmlFor="selectClothes">Filter</label>
                <select name="" id="selectClothes" className={'border border-zinc-400'}>
                    <option value="All">All</option>
                    <option value="XS">XS</option>
                    <option value="All">All</option>
                    <option value="XS">S</option>
                    <option value="All">M</option>
                    <option value="XS">XL</option>
                    <option value="XS">XXL</option>
                </select>
            </div>


        </div>
    );
};

export default FilterBar;