# get-traffic-light
A function that takes a string as an argument representing the current state of the street light and returns a string representing the state the light should change to.

I found a switch statement in code wars examples that used the deffault to throw an errow message:

function updateLight(current) {

  switch (current) {
    case 'green':
      return 'yellow';
      break;
    case 'yellow':
      return 'red';
      break;
    case 'red':
      return 'green';
      break;
    default:
      throw 'Error: wrong input';
      break;
  }
  
}
