import { useState, useEffect } from "react";
import Columns from "./Columns";
import PriceAxis from "./PriceAxis";
import DateAxis from './DateAxis';
import '../Styles/Graph.css';


interface GraphProps {
    price: number;
    hour: number;
    day: number;
    month: number;
};

export default function Graph() {
    const [GraphData, setGraphData] = useState<GraphProps[]>([])

    const api_URL = 'http://localhost:8888';
    useEffect(() => {
        async function GetData() {
            const data = await (await fetch(api_URL)).json(); 
            setGraphData(data);
        };
    GetData();
    }, []);

    const columndata = GraphData.map((column, index) => {
        return {
            id: index,
            height: column.price * 100
        }
    });

    const PriceAxisData = GraphData.map(column => { return column.price });
    const DateAxisData = GraphData.map(column => {
        return { hour: column.hour,
            day: column.day,
            month: column.month }
    });
    return (<>
    <div className="graph">
        <PriceAxis data={PriceAxisData}/>
        <div className='columns'>
            <Columns ColumnArray={columndata}/>
        </div>
        <div className="info">
            <div>Tunti:</div>
            <div id="day">Päivä:</div>
        </div>
        <DateAxis data={DateAxisData}/>
    </div>
    </>)
}