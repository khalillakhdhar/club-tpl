/*
a=15 b=6 =>PGCD
a=a-b=15-6=9 b=6 
a=a-b=9-6=3 b=6
b=b-a=6-3=3 a=3
a=b=3 => PGCD 15,6 = 3
*/
function pgcd(a,b){
    while(a!=b){
        if(a>b){
            a=a-b;
        }else{
            b=b-a;
        }
    }
    return a;
}