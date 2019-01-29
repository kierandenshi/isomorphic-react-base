import Express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '@components/App';

const app = Express();

app.use(Express.static('public'));

app.get('*', (req, res) => {
  const markup = renderToString(<App />);

  res.send(`
    <html>
      <head>
        <title>SSR</title>
        <script src="/client.js" defer></script>
      </head>

      <body>
        <div id="app">${markup}</div>
      </body>
    </html>
  `);
});

app.listen(9003, () => {
  console.log('Server listening on port 9003');
});
