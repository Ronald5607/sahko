import { useState } from 'react';
import '../Styles/Columns.css';

interface ColumnProps {
    MaxPrice: number;
    PriceArray: number[]
};

export default function Columns(Props: ColumnProps) {

    const [ShowPrice, setShowPrice] = useState(-1);

    const columnArray = Props.PriceArray.map((column, index) => {
        const height = (column / Props.MaxPrice) * 100 + '%';
            return (<div
                className='column'
                key={index} style={{ height: height }}
                onMouseEnter={() => {setShowPrice(index)}}
                onMouseLeave={() => {setShowPrice(-1)}}
                >
                    <div className='price' style={{display: index === ShowPrice ? 'block':'none'}}>
                        {Math.round(column * 10) / 10}
                    </div>
            </div>);
        });
    return <>{columnArray}</>
}