import React from 'react';
import { shallow } from 'enzyme';

import { Grid } from '../src'

describe('Grid.Column', () => {

  test('It renders a child when passed in', () => {
    const wrapper = shallow(
      <Grid.Column>
        <div />
      </Grid.Column>
    )

    expect(wrapper.contains(<div />)).toBe(true);
  })

  test('It has a class', () => {
    const wrapper = shallow(<Grid.Column />)

    expect(wrapper.hasClass('o-grid__col')).toBe(true);
  })

  test('It accepts extra classes', () => {
    const wrapper = shallow(<Grid.Column className="test" />)

    expect(wrapper.hasClass('test')).toBe(true);
  })

  test('It adds extra classes to base classes', () => {
    const wrapper = shallow(<Grid.Column className="test" />)

    expect(wrapper.hasClass('o-grid__col')).toBe(true);
  })

})
