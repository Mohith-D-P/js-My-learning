// var a =10+"20";
// console.log(a);

// console.log(typeof(a));

//2 bug 
// var a =9-"5";
// console.log(a); it is a bug

// console.log(typeof(a));

//3 bug

// var a ="java"+"script";
// console.log(a);

// console.log(typeof(a));

// var a =" "+" ";
// console.log(a);

// console.log(typeof(a));

// var a ="vinod"+"Thaapa";
// console.log(a);

// console.log(typeof(a));

// var a =true+true;
// console.log(a);

// console.log(typeof(a));

// console.log(NaN===NaN);not a number=true

// console.log(Number.NaN===NaN);

//control constructs

var tomm='sunny';
if(tomm=='rain')
{
console.log('take rain coat');
}
else{
    console.log('raincoat not necessary');
}

// checking whether a year is a leap year or not ??

var year=2021;

if(year%4===0)
{
    if(year % 100===0)
    {
        if(year%400===0)
        {
            console.log("year "+year+" is a leap year ");
        }
        else{
            console.log("year "+year+" is not leap year ");
        }
    }else{
        console.log("year "+year+" is a leap year ");
    }
}else{
    console.log("year "+year+" is not a leap year ");
}
