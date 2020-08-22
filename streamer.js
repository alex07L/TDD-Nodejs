const axios = require('axios');

class Streamer{
    constructor(s){
        this.zipcode = s
    }
    async getContent(){
        // get data from request and convert to an html
        return await this.getCall().then((response) =>{return "<div>"+response.current.temp_c+"</div>"});
    }

    async getCall(){
        //do an http request
        return axios.get('http://api.weatherapi.com/v1/forecast.json?key=2b23e7071c304d53b82160733203007&q='+this.zipcode+'&day=1').then(resp=>{return resp.data})
    }
}
//test the streamer class
new Streamer("07112").getContent().then(resp =>{console.log(resp)})

module.exports = Streamer;