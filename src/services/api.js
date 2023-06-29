const sendToApi = (data)=>{
    return fetch('https://dev.adalab.es/api/projectCard', {
        method: 'POST',
        body: JSON.stringify(data),
        header: { 'content-type': 'application/json' },
      })
    .then((response)=> response.json())
    .then((result)=>{
      return result
    })
  }
  export default sendToApi;