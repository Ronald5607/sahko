

const api_URL = 'https://api.porssisahko.net/v1/latest-prices.json'
async function GetData() {
    const data = await (await fetch(api_URL)).json()
    
    const mappedData = data.prices.map((element) => {
        const date = new Date(element.startDate);
        const hour = date.getHours();
        const day = date.getDate();
        const month = date.getMonth()+1;
        
        return {
            price: element.price,
            hour: hour,
            day: day,
            month: month
        }
    });
    return mappedData;
}

GetData().then(a => {
    console.log(a)
})