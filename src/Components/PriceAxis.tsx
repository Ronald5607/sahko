import { useState, useEffect } from "react"
import '../Styles/PriceAxis.css';


interface AxisProps {
    MaxPrice: number;
    data: number[]
}

export default function PriceAxis(Props: AxisProps) {

    let AxisNumbers = [];
    for (let i=Props.MaxPrice; i>=1; i--) {
        AxisNumbers.push(i);
    }
    AxisNumbers = AxisNumbers.map(number => {return <div className="axisnumber" key={number}>{number}-</div>});

    return <div className="priceaxis">
        <div className="priceinfo">c/kwh</div>
        <div className="numbers">
        {AxisNumbers}
        </div>
        <div className="verticalline"></div>
    </div>

}