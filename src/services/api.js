
export const client = (url, token) => 
    fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json',
        },
    })
        .then(response => response.json())
        .then(jsondata => jsondata)
        .catch(error => error)