import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import MyForm from './MyForm';
import Adapter from 'enzyme-adapter-react-16';
 
Enzyme.configure({ adapter: new Adapter() })

describe('Form Testing', () => {
  test('Find error', () => {
    const component = shallow(<MyForm />);
    expect(component.find("#title").text());
    // component.find("#submitForm").simulate("click", { target: { name: 'title', value: 'Sandip' } });
    // component.find(".title").simulate("change", { target: { name: 'title', value: 'Sandip' } });
    // component.find('input').at(0).simulate('change', { target: { name: 'title', value: 'sandip' } });
  })
})