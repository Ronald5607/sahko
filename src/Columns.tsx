import { useState, useEffect } from 'react';

interface columnProps {
    price: number;
    hour: number;
    date: string
};

export default function Columns() {
    const [column, setColumn] = useState()

    const api_URL = 'https://api.porssisahko.net/v1/latest-prices.json';
    useEffect(() => {
        async function GetData() {
            const data = await (await fetch(api_URL)).json()
            
            const mappedData = data.prices.map((element: any) => {
                const date = new Date(element.startDate)
                const hour = date.getHours()
                const day = `${date.getDay()}.${date.getMonth()}`
                
                return {
                    price: element.price,
                    hour: hour,
                    date: day
                }
            });
            setColumn(mappedData);
        };
    GetData();
    }, []);
    return (
        <div>column</div>
    );
}