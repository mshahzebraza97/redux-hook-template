import React from "react";
// import { useStore } from "./store/StoreCtx";
import BookingForm from "./Components/BookingForm";
import BookingList from "./Components/BookingList";

function App() {
  // const { logoColor } = useStore();
  return (
    <>
      <h1>Booking Form</h1>;
      <BookingForm />
      <BookingList />
    </>
  );
}

export default App;
