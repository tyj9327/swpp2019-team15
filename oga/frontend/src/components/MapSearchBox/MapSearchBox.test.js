import React from "react";
import { shallow, mount } from "enzyme";
import SearchBox from "./MapSearchBox";
import configureMockStore from "redux-mock-store";
import TextField from "@material-ui/core/TextField";

configureMockStore();

describe("<MapSearchBox/>", () => {
    let box;
    let map = jest.mock();
    let mapApi = jest.mock();
    mapApi.places = jest.mock();

    let mockClearInstanceListeners = jest.fn(() => {});
    mapApi.event = { clearInstanceListeners: mockClearInstanceListeners };

    let mockGetPlaces = jest.fn(() => ["home"]);
    mapApi.places.SearchBox = jest.fn(() => ({
        addListener: jest.fn(() => {}),
        bindTo: jest.fn(() => {}),
        getPlaces: mockGetPlaces
    }));

    let addplace = jest.fn();
    beforeEach(() => {
        box = <SearchBox map={map} mapApi={mapApi} addplace={addplace} />;
    });
    it("should render without errors", () => {
        const component = shallow(box);
        const wrapper = component.find(".MapSearchBox");
        expect(wrapper.length).toBe(1);
    });

    it("should handle inputs", () => {
        const component = shallow(box);
        const wrapper = component.find(".input");
        wrapper.value = "seoul";
        expect(wrapper.value).toBe("seoul");
    });

    it("should call mock upon unmount ", () => {
        const component = mount(box);
        component.instance().componentWillUnmount();
        expect(mockClearInstanceListeners).toHaveBeenCalledTimes(1);
    });

    it("should call places changed ", () => {
        const component = mount(box);
        component.instance().onPlacesChanged();
        expect(mockGetPlaces).toHaveBeenCalledTimes(1);
    });

    it("Should render TextField", () => {
        const component = mount(box);
        const wrapper = component.find(TextField);
        wrapper.getDOMNode().value = "test";
        expect(wrapper).toHaveLength(1);
        expect(wrapper.getDOMNode().value).toBe("test");
    });

    it("should clear Searchbox when clear button clicked", () => {
        const component = mount(box);
        const wrapper = component.find(TextField);

        const button = component.find("#clear-search-button");
        button.hostNodes().simulate("click");
        expect(wrapper.getDOMNode().value).toBe(undefined);
    });
});
