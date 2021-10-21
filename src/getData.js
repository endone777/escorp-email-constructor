const getData = (url, method, body) => fetch(url, {
  method,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  body: JSON.stringify(body),
});

const test = {
  'mjml': '<mjml><mj-body><mj-section><mj-column><mj-text>Hello Pizduk! How do you do?</mj-text></mj-column></mj-section></mj-body></mjml>',
};
const requestUrl = 'http://82.148.31.206/api/mjml';
getData(requestUrl, 'POST', test)
  .then((data) => document.write(data.message))
  .catch((err) => { throw new Error(err); });
