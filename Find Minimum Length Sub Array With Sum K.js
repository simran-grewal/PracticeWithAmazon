var arr = [2,3,1,2,4,3];
var k = 8;
var start = -1;
var end = -1;
var min = Number.MAX_SAFE_INTEGER;
for(var i = 0; i < arr.length; i++)
{
    var curr = 0;
    
    for(var j = i; j < arr.length && (j - i + 1) < min; j++)
    {
        curr += arr[j];
        
        if(curr == k)
        {
           start = i;
           end = j;
           min = end - start + 1;
           break;
        }
    }
}


for(var i = start; i <= end; i++)
{
  console.log(arr[i]);
}
