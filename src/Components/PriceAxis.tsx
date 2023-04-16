import { useState, useEffect } from "react"
import '../Styles/PriceAxis.css';


interface AxisProps {
    data: number[]
}

export default function PriceAxis(Props: AxisProps) {
    const [MaxPrice, setMaxPrice] = useState(0);
    useEffect(() => {
        try {
            // max price in the array
            let price = Props.data.reduce((current, price) => { return Math.max(current, price) });
            price = Math.round(price * 1.1);
            setMaxPrice(price);
        } catch (error) {console.log(error)}
    },[Props.data]);

    let AxisNumbers = [];
    for (let i=MaxPrice; i>=1; i--) {
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