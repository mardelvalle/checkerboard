
for (var i=0;i<8;i++){
  //      i and k are logallin scoped to the for loop so they don't need to be defined elsewhere
//      creates the rows
  for ( var j=0;j<8;j++){
//   builds 8 blocks as it will keep adding for each row making columns
//  so one row with first block is made and then completed and then moves to the next row
    var black="<div class='black'></div>"
    var red="<div class='red'></div>"
    if(i%2===0){
      //     chekcs which row is being made: an odd or even one
      if(j%2===0){

        //       if i is event start with white
        $("#board").append(red)
      }else{
        $("#board").append(black)
       // if(var i=0;i<2;i++)&&(class="red"){
             // this is code for the checkards to be added

  //       if(i===0||i===6){
  //  $("#board").append("<div class='black'-row='"+i+"'><div>'"
  // }
  // else{
  //   $("#board").append("<div class='black'-row='"+i+"'><div>'"
  // }
       }
    }else{
      if(j%2===0){
                 // if divisible by 2
        $("#board").append(black)
      }else{
        //       if not
        $("#board").append(red)
        //   the outer for loop allows you to be able to run sever al times
//         for checkards
  //       if(i===0||i===7){
  //  $("#board").append("<div class='black'-row='"+i+"'><div>'"
  // }
  // else{
  //   $("#board").append("<div class='black'-row='"+i+"'><div>'"
  // }
      }
    }
  }
}
