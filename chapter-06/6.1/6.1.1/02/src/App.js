import React from "react";
import StartRating from "./StarRating";

export default function App() {
  return <StartRating onDoubleClick={e => alert('double click')} />;
}
