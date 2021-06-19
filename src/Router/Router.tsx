import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Main from '../components/Main/Main';
import Video from '../components/Video/Video';
import Header from '../components/Header/Header';

const Router: React.FC = () => (
  <BrowserRouter>
    <Route path="*" component={Header} />
    <Route exact path="/" component={Main} />
    <Route path="/videos/:date/:video" component={Video} />
  </BrowserRouter>
);

export default Router;
