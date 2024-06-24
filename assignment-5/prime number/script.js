
// function getnumber() {

//     let starting_num=parseInt(prompt("enter your starting number"));
//     let ending_num=parseInt(prompt("enter your ending number",0));
//     // let i=1;
//     while(starting_num<=ending_num){
//         if(starting_num%2==0){
//             console.log("Display the even number",+starting_num);
           

//   }
//         starting_num++;
//     }
     
// }
// alert("hey checkout console");

    
//  // referring elements//
   
function getprime () {
    


let starting_num=parseInt(prompt("enter your starting number"));
let ending_num=parseInt(prompt("enter your ending number",0));

let i,j;
for(j=starting_num;j<=ending_num;j++)
    {
        for(i=1;i<=j;i++){
if(j%i==0)
    starting_num++;

    }
    

if(starting_num==2)
   console.log("Display the prime number",+j);
   
starting_num=0;
}
}


const number = document.getElementById("click-btn");
console.log(number);

number.addEventListener("click",getprime);
    

   
