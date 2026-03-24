

export const fetchTodo = async () => {
    const response = await fetch('http://localhost:5000/api/todo/')
    const json = await response.json()
    return json
}

export const pushMutation = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    const json = await response.json()
    return console.log(json)
}