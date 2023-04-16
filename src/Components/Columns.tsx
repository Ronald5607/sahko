import '../Styles/Columns.css';

interface ColumnProps {
    id: number;
    height: number
};

interface ColumnPropArray {
    ColumnArray: ColumnProps[]
}

export default function Columns(Props: ColumnPropArray) {
    
    const columnArray = Props.ColumnArray.map((column) => {
            return (<div
                className='column' key={column.id} style={{ height: column.height }}
            ></div>);
        });
    return <>{columnArray}</>
}