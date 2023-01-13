import React, {useState} from 'react';
import Button from "./Button";
import FilterBar from "../FilterBar/FilterBar";

const Card = (props) => {
    console.log(props.validTest())
       return (
        <div>
            <div className={'grid grid-cols-3  gap-4 w-full text-center '}>
                {props.item.map((elem) => (
                    <div className={'flex flex-col gap-4'}>
                    <div key={elem.id} className={"w-full h-full"}>
                        <img src={elem.avatar} className={'bg-cover w-full h-full'} alt=""/>
                    </div>
                    <p>{elem.email}</p>
                    <div className={'flex justify-between items-center'}>
                    <p>${elem.price}</p>
                    <Button>Add to Card</Button>
                    </div>
                    </div>
                    ))}
            </div>
        </div>
    );
};

export default Card;