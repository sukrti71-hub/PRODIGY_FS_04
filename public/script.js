const socket = io();

function sendMessage(){

    const input = document.getElementById("message");

    if(input.value==="") return;

    socket.emit("chat message",input.value);

    input.value="";
}

socket.on("chat message",(msg)=>{

    const div=document.createElement("div");

    div.className="msg";

    div.innerText=msg;

    document.getElementById("messages").appendChild(div);

});