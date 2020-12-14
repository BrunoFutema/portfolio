import express from 'express';

import '../typeorm';

const app = express();

app.get('/', (request, response) => {
  return response.json({ message: 'Hello Portfolio!' });
});

app.listen(3333, () => {
  console.info('🚀 Server started on port 3333!');
});
