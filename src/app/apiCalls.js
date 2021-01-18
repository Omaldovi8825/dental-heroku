export function getPacienteData(url){
    let datos 

    fetch(url)
        .then(data => data.json())
        .then(data => datos = data)
        .catch(err => console.log('algo salio mal'))
       
    console.log(datos)  
}



