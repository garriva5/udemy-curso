//objetos
const mascota = {
    nombre: 'pedro',
    años: 20,
    vivo: true,
    caracteristicas: ['peludo', 'grande', 'feo' ]
}

// console.log(mascota.caracteristicas[2]);
// console.log(mascota.años);
// console.log(mascota.vivo);

// mascota.id = 1

// console.log(mascota.id);




//practica

const web = {
    nombre: 'hoalmmmre',
    lincks: {
        enlace: 'www.com.mx.ss'
    },
    redessocuales: {
        yutube: {
            enlace: 'yutube.com/hola',
            nombre: 'hola de ytb'
        },
        facebook:{
            enlace: 'facebook.com/bluuweb',
            nombre: 'bluuweb fb'
          }
    }
};

// console.log(web.redessocuales.yutube.enlace);

const {enlace, nombre} = web.redessocuales.yutube
console.log(enlace)
console.log(nombre)




