const web = {
    nombre: 'Javier',
    link: {
        enlace: ' www.bluuweb.cl'
    },
    redesSociales: {
        youtube:{
            enlace: 'www.youtube.com',
            nombre: 'youtube'
        }
    }

}

//destructurando
const {enlace, nombre} = web.redesSociales.youtube

console.log(enlace);
console.log(nombre);

