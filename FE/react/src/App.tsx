import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import NewIssue from '@Page/NewIssue/NewIssue';
import Main from '@Page/Main/Main';
import Label from '@Page/Label/Label';
import Detail from '@Page/Detail/Detail';
import Header from '@Components/Header/Header';
import { Global, css } from '@emotion/core';

const App = () => {
  return (
    <BrowserRouter>
      <Global styles={resetCSS} />
      <Header />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/new-issue" exact component={NewIssue} />
        <Route path="/label" component={Label} />
        <Route path="/detail" component={Detail} />
        <Redirect path="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
};

const resetCSS = css`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;

export default App;
