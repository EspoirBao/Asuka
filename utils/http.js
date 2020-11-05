export function get(url, params) {
    let body = JSON.stringify(params)
    return fetch(url, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body,
    })
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                // alert("服务器繁忙，请稍后再试！");
            }
        })

}


export function post(url, params) {
    let body = JSON.stringify(params)
    return fetch(url, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body,
    })
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                // alert("服务器繁忙，请稍后再试！");
            }
        })
}