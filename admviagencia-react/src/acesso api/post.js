function post(url, myJson) {

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: myJson,
  })
    .then(
      (Response) => {
        const statusSolic = Response.status;
        if (statusSolic == 200) {
          return ("Enviado com sucesso")
        }
      })

    .catch((error) => {
      console.error('Error:', error);
    });

}

export default post;