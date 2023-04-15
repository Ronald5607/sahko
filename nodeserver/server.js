
const http = require('http')

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
    return JSON.stringify(mappedData);
};

const dummy = [{"price":2.95,"hour":0,"day":15,"month":4},{"price":3.121,"hour":23,"day":14,"month":4},{"price":3.244,"hour":22,"day":14,"month":4},{"price":3.499,"hour":21,"day":14,"month":4},{"price":3.736,"hour":20,"day":14,"month":4},{"price":4.002,"hour":19,"day":14,"month":4},{"price":3.929,"hour":18,"day":14,"month":4},{"price":3.743,"hour":17,"day":14,"month":4},{"price":3.703,"hour":16,"day":14,"month":4},{"price":3.691,"hour":15,"day":14,"month":4},{"price":3.865,"hour":14,"day":14,"month":4},{"price":4.048,"hour":13,"day":14,"month":4},{"price":4.343,"hour":12,"day":14,"month":4},{"price":4.874,"hour":11,"day":14,"month":4},{"price":5.366,"hour":10,"day":14,"month":4},{"price":5.42,"hour":9,"day":14,"month":4},{"price":4.853,"hour":8,"day":14,"month":4},{"price":3.755,"hour":7,"day":14,"month":4},{"price":3.031,"hour":6,"day":14,"month":4},{"price":2.914,"hour":5,"day":14,"month":4},{"price":2.594,"hour":4,"day":14,"month":4},{"price":2.23,"hour":3,"day":14,"month":4},{"price":1.65,"hour":2,"day":14,"month":4},{"price":0.451,"hour":1,"day":14,"month":4},{"price":1.196,"hour":0,"day":14,"month":4},{"price":1.826,"hour":23,"day":13,"month":4},{"price":2.261,"hour":22,"day":13,"month":4},{"price":2.62,"hour":21,"day":13,"month":4},{"price":2.768,"hour":20,"day":13,"month":4},{"price":2.757,"hour":19,"day":13,"month":4},{"price":2.761,"hour":18,"day":13,"month":4},{"price":2.589,"hour":17,"day":13,"month":4},{"price":2.426,"hour":16,"day":13,"month":4},{"price":2.3,"hour":15,"day":13,"month":4},{"price":2.69,"hour":14,"day":13,"month":4},{"price":2.71,"hour":13,"day":13,"month":4},{"price":2.857,"hour":12,"day":13,"month":4},{"price":3.005,"hour":11,"day":13,"month":4},{"price":3.086,"hour":10,"day":13,"month":4},{"price":3.211,"hour":9,"day":13,"month":4},{"price":3.051,"hour":8,"day":13,"month":4},{"price":2.784,"hour":7,"day":13,"month":4},{"price":0.438,"hour":6,"day":13,"month":4},{"price":0.002,"hour":5,"day":13,"month":4},{"price":0.001,"hour":4,"day":13,"month":4},{"price":0,"hour":3,"day":13,"month":4},{"price":0,"hour":2,"day":13,"month":4},{"price":0.001,"hour":1,"day":13,"month":4}];
const server = http.createServer(async function serve(req, res) {
    res.writeHead(200, {'content-type': 'application/json'});
    res.writeHead(200, {'Access-Control-Allow-Origin': 'http://localhost:3000'});
    // res.write(await GetData());
    res.write(JSON.stringify(dummy));
    res.end()
    console.log('sent');
})

server.listen(8888);
console.log('server listening on port 8888')