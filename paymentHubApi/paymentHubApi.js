const fetch = require('node-fetch')

const body = {token: 'eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MjQ1MTgyNzMsInN1YiI6IlZRUjJvRW5BdTFSUnloR250L2RBeEtlaWRZa3RuMVpwZCtSekpocThBUHhkMDQzaHNZZnVrWDAzLzZXZ2x6aFBpSm1vYlJkbWY5Kyt4Nkx4Ym1KemZqWGtZWXU0aHUyYzNhQnd3eXhmTmthSkNSSHNjUk5JM21MdkdOWFMyU01CL3JtQy8vOFFQRkdUNHRCZlFEL3lHK3hVZFVjbzM0MVZ4TlpKUENhckEyMGlQaWVhVXhCRmRLRnF3ajBBdktTQ3ozdGRORkRWTVA2cmFPYlYwR1lka3ptMHYzOHloYk9sRzRudmM0UUM1bk1FS2RML2VuZXdVQVJVU0tudEpOQzgiLCJpc3MiOiJNQkJhbmsiLCJleHAiOjI1MjQ1MTgyNzN9.EZmEkobBrq0cQOzAbfsFeZRgZyLswUY9X01N9jPD6wU'};

// const response = await fetch('https://httpbin.org/post', {
// 	method: 'post',
// 	body: JSON.stringify(body),
// 	headers: {'Content-Type': 'application/json','MERCHANT_CODE':'BEERICH','MERCHANT_SECRET':'MjRiZWY2YmEtZDBiNy00NWExLTg2YmUtMTE3NTRjZWI4ZDZm'}
// });
// const data = await response.json();


async function verify(){
    try{
        const response = await fetch('https://paymenthub-api-test.azurewebsites.net/api/merchant/v1/session/verify', {
            method: 'post',
            body: body,
            headers: {'Content-Type': 'application/json','MERCHANT_CODE':'BEERICH','MERCHANT_SECRET':'MjRiZWY2YmEtZDBiNy00NWExLTg2YmUtMTE3NTRjZWI4ZDZm'}
        })
    
        const data = await response.json()

        console.log('====data===', data)
    }catch(err){
        console.log('===err when call paymentHub verify===', err)
    }

}

module.exports = verify