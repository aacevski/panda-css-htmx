import { html } from '@elysiajs/html'
import { Elysia } from 'elysia';
import * as elements from 'typed-html';
import Card from './components/card';
import { css } from '../styled-system/css';

const BaseHtml = ({ children }: elements.Children) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>🐼 panda + htmx</title>
    <script src="https://unpkg.com/htmx.org@1.9.5"></script>
    <link href="/styles.css" rel="stylesheet">
    <link href="/reset.css" rel="stylesheet">
    <link href="/global.css" rel="stylesheet">
    <link href="/tokens/index.css" rel="stylesheet">
    <link href="/tokens/keyframes.css" rel="stylesheet">
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    </style>
  </head>
  ${children}
</html>
`

const app = new Elysia()
  .use(html())
  // @ts-expect-error https://github.com/elysiajs/elysia/issues/94
  .get("/", ({ html }) => html(
    <BaseHtml>
      <body class={css({
        background: "linear-gradient(to right, #3a1c71, #d76d77, #ffaf7b)",
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        margin: 0,
        fontFamily: "Poppins, sans-serif",
      })}>
        <Card />
      </body>
    </BaseHtml>
  ))
  .get("/styles.css", () => Bun.file('./styled-system/styles.css'))
  .get("/reset.css", () => Bun.file('./styled-system/reset.css'))
  .get("/global.css", () => Bun.file('./styled-system/global.css'))
  .get("/tokens/index.css", () => Bun.file('./styled-system/tokens/index.css'))
  .get("/tokens/keyframes.css", () => Bun.file('./styled-system/tokens/keyframes.css'))
  .listen(3000)

console.log(`🐼 panda + htmx server is running at http://${app?.server?.hostname}:${app?.server?.port}`);

