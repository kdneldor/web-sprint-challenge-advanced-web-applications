import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";

test("Fetches data and renders the bubbles", () => {
  // This test currently works for some reason, don't forget to uncomment id in ColorList.js
  const { asFragment } = render(<BubblePage text="bubbles" />);
  expect(asFragment()).toMatchSnapshot();

  // const { getByText } = render(<BubblePage />);
  // const loaded = getByText(/bubbles/i)
  // expect(loaded).toBeInTheDOM();

  // const { getAllByTestID, rerender } = render(<BubblePage colors={[]} />);
  // expect(getAllByTestID(/colors/i)).toHaveLength(0);

  // rerender(<BubblePage error="" colors={data} />);
  // const colors = getAllByTestID(/colors/i);

  // expect(colors).toHaveLength(11);
});

// let data = [
//   {
//     color: "aliceblue",
//     code: {
//       hex: "#f0f8ff",
//     },
//     id: 1,
//   },
//   {
//     color: "limegreen",
//     code: {
//       hex: "#99ddbc",
//     },
//     id: 2,
//   },
//   {
//     color: "aqua",
//     code: {
//       hex: "#00ffff",
//     },
//     id: 3,
//   },
//   {
//     color: "aquamarine",
//     code: {
//       hex: "#7fffd4",
//     },
//     id: 4,
//   },
//   {
//     color: "lilac",
//     code: {
//       hex: "#9a99dd",
//     },
//     id: 5,
//   },
//   {
//     color: "softpink",
//     code: {
//       hex: "#dd99ba",
//     },
//     id: 6,
//   },
//   {
//     color: "bisque",
//     code: {
//       hex: "#dd9a99",
//     },
//     id: 7,
//   },
//   {
//     color: "softyellow",
//     code: {
//       hex: "#dcdd99",
//     },
//     id: 8,
//   },
//   {
//     color: "blanchedalmond",
//     code: {
//       hex: "#ffebcd",
//     },
//     id: 9,
//   },
//   {
//     color: "blue",
//     code: {
//       hex: "#6093ca",
//     },
//     id: 10,
//   },
//   {
//     color: "blueviolet",
//     code: {
//       hex: "#8a2be2",
//     },
//     id: 11,
//   },
// ];
