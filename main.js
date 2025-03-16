// function updateLight(current) {
  
//   //Setup an if statement to run through the options and provide the corresponsing response
//   if(current === "green"){
//     return "yellow";
//   } else if(current === "yellow"){
//     return "red";
//   } else {
//     return "green";
//   }
// }

function updateLight(current) {
  //Setup a switch statement that returns a value based on the argument matching a case
  switch (current) {
    case "green":
      return "yellow";
    case "yellow":
     return "red";
    default:
      return "green";
  }

}