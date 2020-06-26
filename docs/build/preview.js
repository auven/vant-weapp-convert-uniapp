const port = 9527;

const chalk = require('chalk');
const connect = require('connect');
const serveStatic = require('serve-static');
const app = connect();

app.use(
  serveStatic('./dist', {
    index: ['index.html', '/'],
  })
);

app.listen(port, function () {
  console.log(chalk.green(`> Preview at  http://localhost:${port}`));
});
