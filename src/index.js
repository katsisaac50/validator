import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';

const styles = {
};

const App = () => (
  <div style={styles}>
    <Hello name="CodeSandbox" />
  </div>
);

render(<App />, document.getElementById('root'));
