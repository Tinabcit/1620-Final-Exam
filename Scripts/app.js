
// Add the following array that was given to us in the instruction.
const albums = [
    { name: "Album 1", price: 12.99, inCart: false }, 
    { name: "Album 2", price: 14.99, inCart: false }, 
    { name: "Album 3", price: 9.99, inCart: false }, 
    { name: "Album 4", price: 19.99, inCart: false }
];
//Trying make the Albums listed out when you clicked on it.
function Album1(){
    Album1= document.getElementsById("Album1").value;
    document.getElementById("image").innerHTML = Album1
}
function Album2(){
    Album2= document.getElementsById("Album2").value;
    document.getElementById("image").innerHTML = Album2
}
function Album3(){
    Album3= document.getElementsById("Album3").value;
    document.getElementById("image").innerHTML = Album3
}
function Album4(){
    Album4= document.getElementsById("Album3").value;
    document.getElementById("image").innerHTML = Album4
}
// Added and tryed to add a alert function to my javascript tag format description.
function myFunction() {
    alert("Hello! I am an alert box!");
  }

