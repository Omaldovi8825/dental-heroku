export function getPacienteData(url){   
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(data => data.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
    })
}

export function getPacienteDiagnosis(url){
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(data => data.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
    })
}




