import React from "react";
import { shallow } from "enzyme";
import Logo from "./Logo";

describe('Logo Component', () => {
    it('should render without error', () => {
        const component = shallow(<Logo />)
        const logo = component.find('.logo')
        expect(logo.length).toBe(1)
    })
})