var socket = io("http://192.168.1.127:6677", { forceNew: true });
socket.on("messages", function(data) {
    render(data);
});

function render(data) {
    var html = data
        .map(function(message, index) {
            return ` 
                    <div class="message">
                    <strong>${message.nickname}</strong> dice: 
                    <p>${message.text}</p>
                    </div> 
                `;
        })
        .join(" ");
    let divMsg = document.getElementById("messages");
    divmsg.innerHTML = html;
    divMsg.scrollTop = divMsg.scrollHeight;
}

function addMessage(e) {
    console.log(e);

    let message = {
        nickname: document.getElementById("nickname").value,
        text: document.getElementById("text").value
    };
    document.getElementById("nickname").style.display = "none";
    socket.emit("add-message", message);
    return false;
}