const axios = require('axios').default;



const getLugarLatLng = async (dir ) =>{

    const encodeUrl = encodeURI(dir);
    console.log(encodeUrl);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: {'x-rapidapi-key': '7dbd362a01mshcf78ee48bac3f1ep1e96d8jsna686e96cf750'}
    });

    const resp = await instance.get();
  
    if(resp.data.Results.length === 0 ){
        throw new Error(`No hay resultado para ${dir} `);

    }
    
    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;
    
       
    return {
        direccion,
        lat,
        lng
    }
}

module.exports ={
    getLugarLatLng
}