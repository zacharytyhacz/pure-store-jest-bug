import React from "react";
import { render, configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import Page from "../home";

configure({ adapter: new Adapter() });

describe("Test Page", () => {
  it("should display correctly", async () => {
    const wrapper = render(<Page/>);
    expect(wrapper.find('button').length).toBe(1);
  })
})
