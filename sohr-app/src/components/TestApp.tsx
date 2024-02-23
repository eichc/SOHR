import React from "react";
import Message from "./Newthing.tsx";
import ListGroup from "./ListGroup.tsx";
import Alert from "./Alert.tsx";

export default function App() {
  let cities = ["Boston", "New York", "Chicago", "Los Angeles", "London"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  }

  return (
    <>
      <ListGroup items={cities} heading="Cities" onSelectItem={handleSelectItem}/>
      <Alert />
    </>
  );
}
