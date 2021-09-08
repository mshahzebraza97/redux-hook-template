// !NOTE: This File contains all the dependencies needed for setting up a reducer hook. For example, initial state, action generators (to be used for possible state manipulation signals), and even the reducer itself.
// !NOTE: You cna add to it by importing dispatchFn and exporting customized dispatchAction Hooks. like useAddTable, useRemoveTable etc.

export const ADD_BOOKING = "APP/BOOK_TABLE/ADD_BOOKING";
export const REMOVE_BOOKING = "APP/REMOVE_TABLE";

export const initialState = {
  bookings: [],
};

// Returns the Action Object carrying 1.type of action and 2.data, which is essentially a argument of dispatch Fn.
// This means one of many actions can be performed be calling this function inside a dispatchFn call.

// adds the action.type=add_booking and assigns the arguments(booking info) to action.payload
export const addBooking = (booking) => ({
  type: ADD_BOOKING,
  booking,
});

// adds the action.type=remove_booking and assigns the arguments(bookingID) to action.payload
export const removeBooking = (bookingID) => ({
  type: REMOVE_BOOKING,
  bookingID,
});

export const bookTableReducer = (state = initialState, action) => {
  // Match the type of action object with the condition
  if (action.type === ADD_BOOKING) {
    console.log(
      `Booking # ${action.booking.id} is now registered against Mr.${action.booking.name}`
    );
    // Return an updated state customized to the condition
    return {
      ...state,
      bookings: state.bookings.concat(action.booking),
    };
  }

  if (action.type === REMOVE_BOOKING) {
    console.log(`Booking # ${action.bookingID} is now removed`);
    // Return the bookings whose ID doesn't match the action.ID
    return {
      ...state,
      bookings: state.bookings.filter((booking) => {
        return booking.id != action.bookingID;
      }),
    };
  }
};
