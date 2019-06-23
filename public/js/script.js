$(document).ready(function(){
socket = io.connect("http://localhost:8080");
socket.on("test",function(data){
alert(data);
});

});