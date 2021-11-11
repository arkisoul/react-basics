import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import App from './App';

describe('App Component', () => {
  test('should render the component', () => {
    const wrapper = shallow(<App />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
})
