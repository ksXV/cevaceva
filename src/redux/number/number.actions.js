export const incrementNumber = (number) => ({
  type: "INCREMENT",
  payload: number + 1,
});
export const decrementNumber = (number) => ({
  type: "DECREMENT",
  payload: number - 1,
});
