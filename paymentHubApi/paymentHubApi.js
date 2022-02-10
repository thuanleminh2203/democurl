const fetch = require('node-fetch')

// const response = await fetch('https://httpbin.org/post', {
// 	method: 'post',
// 	body: JSON.stringify(body),
// 	headers: {'Content-Type': 'application/json','MERCHANT_CODE':'BEERICH','MERCHANT_SECRET':'MjRiZWY2YmEtZDBiNy00NWExLTg2YmUtMTE3NTRjZWI4ZDZm'}
// });
// const data = await response.json();


async function verify(body){
    const headers = {  
        'Content-Type': 'application/json',
        'MERCHANT_CODE':'PHZHOMEBOX',
        'MERCHANT_SECRET':'MThjZDQ2ODMtZjZhYy00MjcxLWFmZDAtY2M1YjJjNzYwOWVk'
    }
    try{
        const response = await fetch('https://paymenthub-api-test.azurewebsites.net/api/merchant/v1/session/verify', {
            method: 'POST',
            body : JSON.stringify(body),
            headers
        })
        const data = await response.json()
        return data
    }catch(err){
        console.log('===err when call paymentHub verify===', err)
        throw err
    }

}

module.exports = verify