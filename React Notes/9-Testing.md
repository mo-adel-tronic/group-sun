# Enzyme

## install with jest

yarn add -D enzyme enzyme-adapter-react-16 jest jest-enzyme

## Start

- create file > setupTests.js
- import packeges
    - import Enzyme from 'enzyme';
    - import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({
    adapter: new Adapter(),
    disableLifecycleMethods: true
})

- create test file for component [](../src/components/test/logo.test.js)