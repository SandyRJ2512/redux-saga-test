import React from 'react';
import { shallow } from 'enzyme';
import Search from './Search';

describe('Open modal', () => {
  test('Contains edit button', () => {
    const component = shallow(<Search />);
    // expect(wrapper.find(".edit").text()).toBe("Edit");
    // expect(component.find(".edit").text()).toContain("Edit")
    expect(component.find("#search").text())
    // expect(component.exists('#search')).to.equal(true);
    // expect(component.find('#search').exists()).to.equal(false);
  })
})