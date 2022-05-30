const {request} = require(`./request`)

request(`SELECT * FROM films`)
.then(data => console.log(data))
.catch(error => console.log(error) )