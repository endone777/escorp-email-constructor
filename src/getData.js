const getData = (url, content) => fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  body: JSON.stringify(content),
})
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      const e = new Error('Ошибка');
      throw e;
    }
  });

const test = {
  'mjml': '<mjml><mj-body><mj-section><mj-column><mj-text>Hello Pizduk! How do you do?</mj-text></mj-column></mj-section></mj-body></mjml>',
};
const requestUrl = 'http://82.148.31.206/api/mjml';
getData(requestUrl, test)
  .then((data) => document.write(data.message))
  .catch((err) => console.error(err));
