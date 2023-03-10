import React from "react";
import { render } from "@testing-library/react";
import Button from ".";
import { Router } from "react-router-dom";

test("should not allowed to click button if isDisabled present", () => {
  const { container } = render(<Button isDisabled></Button>);

  expect(container.querySelector("span.disabled")).toBeInTheDocument();
});

test("should render loading/spinner", () => {
  const { container, getByText } = render(<Button isLoading></Button>);

  expect(getByText(/loading/i)).toBeInTheDocument();

  expect(container.querySelector("span")).toBeInTheDocument();
});

test("should render <a> tag when isExternal is enabled", () => {
  const { container, getByText } = render(
    <Button type="link" isExternal></Button>
  );

  expect(container.querySelector("a")).toBeInTheDocument();
});

test("should render <Link>", () => {
  const { container } = render(
    <Router>
      <Button href="" type="link"></Button>
    </Router>
  );

  expect(container.getByRole("a")).toBeInTheDocument();
});
