var sum = 0;

for (var i = 2; i <= process.argv.length-1; i++){
	sum += Number(process.argv[i]);
}

console.log(sum)
