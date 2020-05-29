

const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require ('yargs').options({
    direccion:{
        alias: 'd' , 
        desc: 'Direccion de la ciudad para obtener el clima',
        demand : true
    }
}).argv;

/*lugar.getLugarLatLng(argv.direccion)
.then(console.log);


clima.getLugar(40.750000 , -74.000000 )
    .then(console.log)
    .catch(console.log)

*/
const getInfo = async (direccion) => {

    try {
        
        const coord = await lugar.getLugarLatLng(direccion);
        const temperatura = await clima.getLugar(coord.lat , coord.lng);

        return `El Clima de ${coord.direccion} es de ${temperatura}`;
    }catch (error) {
        return `No se pudo determinar el clima de ${direccion} grados`;
    }
    

}


getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)
