function firstNonRepeatedChar(str) {
 // Write your code here
	let obj ={};
	for(let  c of str){
		if(obj[c]){
			obj[c]=obj[c]+1;
		}else{
			obj[c]=1;
		}
	}
	for(let c of obj){
		if(obj[c]===1){
			return c;
		}
	}
	
}
// const input = prompt("Enter a string");
// alert(firstNonRepeatedChar(input)); 
