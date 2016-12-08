import * as React from 'react';
import { Nav } from './Nav';

export const Main = (props) =>
  <div>
    <Nav></Nav>
    <h2>Main Component</h2>
    {props.children}
  </div>;