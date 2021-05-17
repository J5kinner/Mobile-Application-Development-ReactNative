import React from "react";
import renderer from "react-test-renderer";

import AppText from "../components/AppText.js";
import AppCard from "./AppCard.js";

jest.mock("react-native/Libraries/Animated/src/NativeAnimatedHelper");

describe("Testing react rendering of components", () => {
  test("renders correctly", async () => {
    const json = renderer.create(<AppText />).toJSON();
    expect(json).toMatchSnapshot();
  });
  test("App Cards are rendered correctly with corresponding content", async () => {
    const component = renderer
      .create(
        <AppCard
          category="adventure"
          title="Adventure Park"
          subtitle="Forest theme park for exploring the wilderness"
          image="./assets/user4.jpg"
        />
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});

test("AppText rendering", () => {
  const json = renderer.create(<AppText />).toJSON();
  expect(json.props.style[0].fontSize).toBe(21);
  expect(json.props.style[0].fontFamily).toBe("Avenir-Roman");
});

test("AppText contains text", () => {
  const json = renderer.create(<AppText>Hello World</AppText>).toJSON();
  expect(json.props.style[0].fontSize).toBe(21);
  expect(json.props.style[0].fontFamily).toBe("Avenir-Roman");
  expect(json.children.includes("Hello World"));
});
