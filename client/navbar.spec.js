import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';

import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() });

describe('test function', function() {
  it('passing test', function() {
    expect(true).to.equal(true);
  });
});