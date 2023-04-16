import '../Styles/dateaxis.css';

interface DateProp{
    hour: number;
    day: number;
    month: number
}

interface AxisProps {
    data: DateProp[]
}

export default function DateAxis(Props: AxisProps) {

    const hours = Props.data.map((hour, index) => {
        return (
            <div className="hour" key={index}>
                {hour.hour}
            </div>
        )
    });
    const dates = Props.data.map((date, index) => {
        return (
            <div className="date" key={index}>
                {date.day + '.' + date.month}
            </div>
        )
    });

    return (
    <div className="dateaxis">
        <div className='horizontalline'></div>
        <div className='hours'>
            {hours}
        </div>
        <div className='dates'>
            {dates}
        </div>
    </div>)
}