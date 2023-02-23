const https = require('https');

function getQuote(){
    const request = https.get(
        'https://animechan.vercel.app/api/random',
        (response) => {
            console.log(response.statusCode);
            let body='';
            response.on("data", (data) =>{
                body+= data.toString();

                response.on('end', () =>{
                    console.log(JSON.parse(body));
                })
                
            })
        }
    );
}
getQuote();