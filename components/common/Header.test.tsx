import "@testing-library/jest-dom";
import Header from "./Header";
import client, { useSession } from "next-auth/react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";

jest.mock("next-auth/react");

describe("Check basic Header functionality", () => {
  test("Check if Grades Link exists when authenticated", async () => {
    (useSession as jest.Mock).mockReturnValueOnce({
      data: {},
      status: "authenticated",
    });
    render(<Header />);
    expect(screen.getByTestId("grades-link")).toBeInTheDocument();
  });
  test("Check if Grades link doesn't exist when unathenticated", async () => {
    (useSession as jest.Mock).mockReturnValueOnce({
      data: {},
      status: "unauthenticated",
    });
    render(<Header />);
    const gradesLink = screen.queryByTestId("grades-link");
    expect(gradesLink).not.toBeInTheDocument();
  });
});
