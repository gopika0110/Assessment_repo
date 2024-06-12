function compareTriplets(a,b) {
  var aScore = 0;
  var bScore = 0;
  for (let i =0 ; i<3 ; i++){
    if(a[i]>b[i]){
      aScore += 1;
    }else if(a[i]<b[i]) {
      bScore +=1;
    }
  }
  return[aScore,bScore];
}
var a = [1,2,3]
var b = [3,2,1]
result = compareTriplets(a,b)
console.log(result)