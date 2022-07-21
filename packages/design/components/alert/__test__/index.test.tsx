import renderer from 'react-test-renderer';
import Alert from '../alert';

it('renders correctly', () => {
  const component = renderer.create(<Alert>Facebook</Alert>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
