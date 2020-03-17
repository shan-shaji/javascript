

var sum =  0;
s = process.argv;
for( i = 2;i < s.length;i++){
    sum  = sum + Number(s[i]);
}

console.log(sum);

