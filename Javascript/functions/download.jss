var str= "hello world",	arr= new Uint8Array(str.length);
str.split("").forEach(function(a,b){
	arr[b]=a.charCodeAt();
});
   
download( arr, "textUInt8Array.txt", "text/plain" );
