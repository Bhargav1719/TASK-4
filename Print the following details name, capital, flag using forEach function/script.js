var request = new XMLHttpRequest ();
request . open ( 'GET' , 'https://restcountries.eu/rest/v2/all' , true );
request . send ();
request . onload = function (){
var data = JSON . parse ( this . response );
var name = function (){
for ( let i in data )
{
console . log ( "name:" + data [ i ]. name );
console . log ( "flag:" + data [ i ]. flag );
console . log ( "capital:" + data [ i ]. capital );
}
}
name ();
}