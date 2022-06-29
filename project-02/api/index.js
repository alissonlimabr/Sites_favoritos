const fs = require('http')
const data = require('./urls.json')
const URL = require('url')

fs.createServer((req, res) => { 

    // const dados = JSON.stringify(data)

    const {name, url, del} = URL.parse(req.url, true).query
    
    if (!name || !url)
        return res.end('show')

    if (del)
        return res.end('delete')

    return res.end('create')



}).listen(3000, () => console.log('API is running.'))