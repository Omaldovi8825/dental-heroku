import NewDiagnosis from "./components/NewDiagnosis"

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

export function deleteDiagnosis(url){
    return new Promise((resolve, reject) => {
        fetch(url, {
            method: 'DELETE'
        })
        .then(data => data.json())
        .then(data => resolve(data))
        .catch(err => reject(err))
    })
}

export function postNewDiagnosis(url, newDiagnosis){
    return new Promise((resolve, reject) => {
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(newDiagnosis),
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            }
        })
        .then(data => data.json())
        .then(data => resolve(data))
        .catch(err => reject(err))
    })
}




