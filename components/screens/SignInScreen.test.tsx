import "@testing-library/jest-dom";
import SignInScreen from "./SignInScreen";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";

const generalAnnouncements = [
  {
    id: 1,
    date: "12-12-20010T",
    title: "TIME TO TAKE A BATH",
    content: "It`&apos`s ythat time of the day where you take a bath guys",
  },
];

const providers = [
  {
    id: 1,
    name: "Google",
  },
];

describe("Sign in Screen test", () => {
  beforeEach(() => {
    render(<SignInScreen providers={providers} generalAnnouncements={generalAnnouncements} />);
  });
  test("Check if Google Sign In button exists", () => {
    expect(screen.getByText("Sign In With Google")).toBeInTheDocument();
  });
});
