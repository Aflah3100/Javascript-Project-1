function agedays(){

    var birthyear=prompt("Enter your Date Of Birth");
    
    let day=new Date();
    let year=day.getFullYear()

    ageinyear=year-birthyear;

    ageindays=ageinyear*365;

   let h1= document.createElement('h1');
    
   let outputage=document.createTextNode("You are "+ageindays+" days old");

   h1.setAttribute('id','outputtext')
   h1.setAttribute('class','text-info')

   h1.appendChild(outputage);

   document.getElementById('output').appendChild(h1);



}


function reset(){
    document.getElementById("outputtext").remove();
}