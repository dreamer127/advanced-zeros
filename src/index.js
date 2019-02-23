module.exports = function getZerosCount(number, base) {
 
let count=Infinity;
let bases=[];
for (j=2;j<base;){
    if(base%j==0){
      bases.push(j);
      base/=j;
    }
    else {
       j++;
    }
}

bases.push(base);
let length=bases.length;
do{
    newBase=bases[length-1];
    let counter=0;
        for(i=0;i<length;i++){
          if(bases[i]==newBase){
            counter++;
            bases.splice(i,1);
            length--;
            i--;
          }
        }
    let n = number;
    let zeros=0;
        while (Math.floor(n)>0){
          n /=newBase;
          zeros+=Math.floor(n);
        }
    zeros/=counter;
        if (zeros<count){
          count=Math.floor(zeros);
        }
 }
  while(length>0);

return count;
}