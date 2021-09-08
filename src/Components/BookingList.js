import React from "react";
import { useStore } from "../store/StoreCtx";
import { removeBooking } from "../store/bookTableReducer";

const BookingList = () => {
  const [state, dispatch] = useStore();
  const { bookings } = state;

  // A Dispatch function specific to remove booking
  const handleOnClickABooking = (id) => {
    console.log(`This is the ID: ${id}`);
    dispatch(removeBooking(id));
  };

  const Booking = ({ item }) => (
    <>
      <div
        key={item.id}
        onClick={() => {
          handleOnClickABooking(item.id);
        }}
      >
        <div>
          <b>Guest name:</b> {item.name}
        </div>
        <div>
          <b>Number of Contact:</b> {item.numberOfContact}
        </div>
        <div>
          <b>Number of Guests:</b> {item.numberOfPeople}
        </div>
        <div>
          <b>Date and Time:</b> {new Date(item.dateTime).toString()}
        </div>
        <hr />
      </div>
    </>
  );

  return (
    <>
      <h2>Bookings List</h2>
      {/* {console.log(bookings)} */}
      {bookings.map((booking) => (
        <Booking key={booking.id} item={booking} />
      ))}
    </>
  );
};

export default BookingList;
