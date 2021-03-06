import '../../setupTests'
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import App from '../index';

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  test('snapshots', () => {
    const component = renderer.create(
      <App></App>
    );
  
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
