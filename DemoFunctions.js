function FirstExecution()
{
    let a=10;
    let b=55;
    let c=a+b;//10+55 =65
    alert(" my a values is :"+a+"\n my b value is :"+b+"\n a  + b value is :"+c);
}


function WithArguments( fruit , veg , nv)
{
    var favfruitname = fruit ;   //Apple
    let favvegdish = veg;          //Pannir
    const favNonvegdish =nv ;      //Japan Chicken

    document.write ( favfruitname +" \n"+ favvegdish+"\n" +favNonvegdish) ;
}

// let sam=89;
 
let Sample=()=>
{
    console.log(" currently working Fat arrow function")
}