var request = new XMLHttpRequest ();
request . open ( 'GET' , 'https://restcountries.eu/rest/v2/all' , true );
request . send ();
request . onload = function (){
var data = JSON . parse ( this . response );
var currency = data . filter (( item ) => item . currencies [ 0 ]. name === "United States dollar" );
console . log ( currency );
}