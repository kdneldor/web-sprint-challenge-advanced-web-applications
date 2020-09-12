import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";



test("Fetches data and renders the bubbles", () => {
  const { getByText } = render(<BubblePage />);
  const loading = getByText(/bubbles/i)
  expect(loading).toBeInTheDocument();
});







// const {queryAllByTestId, getAllByTestID, rerender} = render(
//   <Bubbles colors={[]} />
// )
// const initialColors = queryAllByTestId(/colors/i);
// expect(initialColors).toHaveLength(1);
// expect(initialColors).toEqual([]);

// rerender(<Bubbles error="" colors={data}/>)
// const colors = getAllByTestID(/colors/i)

// expect(colors).toHaveLength(10)


// const data = [
//   {
//     color: "aliceblue",
//     code: {
//       hex: "#f0f8ff"
//     },
//     id: 1
//   },
//   {
//     color: "limegreen",
//     code: {
//       hex: "#99ddbc"
//     },
//     id: 2
//   },
//   {
//     color: "aqua",
//     code: {
//       hex: "#00ffff"
//     },
//     id: 3
//   },
//   {
//     color: "aquamarine",
//     code: {
//       hex: "#7fffd4"
//     },
//     id: 4
//   },
//   {
//     color: "lilac",
//     code: {
//       hex: "#9a99dd"
//     },
//     id: 5
//   },
//   {
//     color: "softpink",
//     code: {
//       hex: "#dd99ba"
//     },
//     id: 6
//   },
//   {
//     color: "bisque",
//     code: {
//       hex: "#dd9a99"
//     },
//     id: 7
//   },
//   {
//     color: "softyellow",
//     code: {
//       hex: "#dcdd99"
//     },
//     id: 8
//   },
//   {
//     color: "blanchedalmond",
//     code: {
//       hex: "#ffebcd"
//     },
//     id: 9
//   },
//   {
//     color: "blue",
//     code: {
//       hex: "#6093ca"
//     },
//     id: 10
//   },
//   {
//     color: "blueviolet",
//     code: {
//       hex: "#8a2be2"
//     },
//     id: 11
//   }
// ];