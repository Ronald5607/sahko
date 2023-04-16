import '../Styles/Columns.css';

interface ColumnProps {
    MaxPrice: number;
    PriceArray: number[]
};

export default function Columns(Props: ColumnProps) {
    
    const columnArray = Props.PriceArray.map((column, index) => {
        const height = (column / Props.MaxPrice) * 100 + '%';
            return (<div
                className='column' key={index}
                style={{ height: height }}
            ></div>);
        });
    return <>{columnArray}</>
}