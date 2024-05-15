1.//!compare two json have the same properties without order:
/*let obj1={name:"person1",age:5};
let obj2={age:5,name:"person"};
*/

let obj1={name:"person1",age:5};
let obj2={age:5,name:"person"};
console.log(JSON.stringify(obj1)=== JSON.stringify(obj2));


2.//!use the rest countires API URL display all the country flags :

var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all","true")
request.send();
request.onload=function(){
    var digital=request.response;
    //console.log(digital);
    var data =JSON.parse(digital)
    //console.log(data);
    for(var i=0;i<data.length;i++){
        console.log(data[i].flags.png);
    }
}


3.//!print all country names,region,sub regions and population:

var result=new XMLHttpRequest();
result.open("GET","https://restcountries.com/v3.1/all","true")
result.send();
result.onload=function(){
    var digital=result.response;
    //console.log(digital);
    var data =JSON.parse(digital)
    //console.log(data);
    for(var i=0;i<data.length;i++){
        console.log("countryname:"+" "+data[i].countryname,"region:"+" "+data[i].region,"subregion:"+" "+data[i].subregion,"population:"+" "+data[i].population);
    }
}

    





