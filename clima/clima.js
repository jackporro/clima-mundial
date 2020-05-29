const axios = require('axios').default;

const getLugar  = async (lat , lng) => {
    const respuesta =  await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=803167c702c3aa36442e9766710b4bbf&units=metric`);

    return respuesta.data.main.temp;
}



module.exports={
    getLugar
}