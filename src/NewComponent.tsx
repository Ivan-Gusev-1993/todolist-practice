import React from "react";
import {MoneyType} from "./App";
import {FilterType} from "./App";

type NewComponentType = {
    money: MoneyType[]
    onClickHandler: (nameButton: FilterType)=> void
}

export const NewComponent = (props: NewComponentType) => {
    return (
        <>
            <ul>
                {props.money.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span>{objFromMoneyArr.banknote}</span>
                            <span>{objFromMoneyArr.nominal}</span>
                            <span>{objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: '35px'}}>
                <button onClick={() => props.onClickHandler('all')}>All</button>
                <button onClick={() => props.onClickHandler('ruble')}>Ruble</button>
                <button onClick={() => props.onClickHandler('dollar')}>Dollar</button>
            </div>
        </>
    )
}