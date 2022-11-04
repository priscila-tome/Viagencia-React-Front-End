function post(url, myJson) {

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: myJson,
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error('Error:', error);
    })
}

export default post;