import React from "react";
import { shallow } from "enzyme";
import { App } from "../src/components/App";

describe("<App />", () => {
    it("should shallowly render without errors", () => {
        const wrapper = shallow(
            <App seat={"this is seat"} info={{ nimi: "Rias-Chan~" }} />
        );
        expect(wrapper.find(".App")).toHaveLength(1);
    });
});
