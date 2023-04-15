import { useState, useEffect } from 'react';

interface columnProps {
    price: number;
    hour: number;
    day: number;
    month: number;
};

export default function Columns() {
    const [columns, setColumns] = useState<columnProps[]>([])

    const api_URL = 'http://localhost:8888';
    useEffect(() => {
        async function GetData() {
            const data = await (await fetch(api_URL)).json();
            
            setColumns(data);
        };
    GetData();
    }, []);
    
    const columnArray = columns.map(column => {
            return (<div
                className='column'
                key={ column.month.toString()+column.day.toString()+column.hour.toString() }
                style={{ height: column.price*100 }}
            >
                {column.price}
            </div>);
        });
    return (
        <div className='columns'>{columnArray}</div>

    );
};