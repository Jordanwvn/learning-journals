/* CALCULATE AVERAGE ***********************************************************
Write function avg which calculates average of numbers in given list.
*******************************************************************************/

function find_average(array) {
  return (array.reduce( (acc, cur) => acc + cur) / array.length);
}
