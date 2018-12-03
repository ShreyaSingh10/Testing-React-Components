import React from 'react';
import App from './App';
import { shallow }  from 'enzyme';
import { mount }  from 'enzyme';
import Enzyme from 'enzyme';
//import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Container from './components/Container.js';
import Addtodo from './components/Addtodo.js';
import Todos from './components/Todos.js';
import renderer from 'react-test-renderer'

Enzyme.configure({ adapter: new Adapter() });

//writing tests
describe('<Container />', () => {
  //snapshot testing is a great way to check if the output of
  //your component has changed.
  it('matches the snapshot', () => {
    const tree = renderer.create(<Container />).toJSON()
    expect(tree).toMatchSnapshot()
  });

  it('renders the container', ()=> {
    const editor = shallow(<Container />);
    //expect(editor.find('input')).toHaveLength(1);
    //expect(editor.find('button')).toHaveLength(1);
  });

  it("formats Container correctly", () => {
  const wrapper = mount(<Container />);
  expect(wrapper.find('div'));

  });
  it('has an array', () => {
    const wrapper = shallow(<Container />);
    const arr = wrapper.state().tasks;
    expect(arr).toHaveLength(0);
  });

  it('has a heading', () => {
    const wrapper = shallow(<Container />);
    const block = wrapper.find('div');
    const heading = block.find('h1').text();
    expect(heading).toEqual('Todo List');
  });

  it('has a heading', () => {
    const wrapper = shallow(<Container />);
    const block = wrapper.find('div');
    const heading = block.find('h2').text();
    expect(heading).toEqual('Todos');
  });

  it('renders Child component', () => {
    const wrapper = shallow(<Container />);
    expect(wrapper.find('Addtodo').length).toEqual(1);
  });
});
//snapshot test for Addtodo component
describe('<Addtodo />', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(<Addtodo />).toJSON()
    expect(tree).toMatchSnapshot()
  });
});
//snapshot test for Todo component
describe('<Todos />', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(<Todos />).toJSON()
    expect(tree).toMatchSnapshot()
  });
});
