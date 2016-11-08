var term,
    protocol,
    socketURL,
    socket,
    pid,
    charWidth,
    charHeight;

var terminalContainer = document.getElementById('terminal-container');

createTerminal();

function createTerminal() {

  while (terminalContainer.children.length) {
    terminalContainer.removeChild(terminalContainer.children[0]);
  }

  term = new Terminal({
    cursorBlink: true 
  });
  protocol = 'wss://';
  socketURL = 'wss://www.flatworld.com:443';

  term.open(terminalContainer);
  term.fit();
  
  var initialGeometry = term.proposeGeometry(),
	cols = 80,
	rows = 30;

    charWidth = Math.ceil(term.element.offsetWidth / cols);
    charHeight = Math.ceil(term.element.offsetHeight / rows);

      if (window.WebSocket === undefined)
      {
        state.innerHTML = "sockets not supported";
        state.className = "fail";
      }
      socket = new WebSocket(socketURL);
      socket.onopen = runRealTerminal;
      socket.onclose = onClose;
      socket.onerror = onError;
}


function runRealTerminal() {
  term.attach(socket);
  term._initialized = true;
  socket.send("C");

  term.on('key', function (key, ev) {
    var printable = (
      !ev.altKey && !ev.altGraphKey && !ev.ctrlKey && !ev.metaKey
    );
 
    var message ="A" + key;

    socket.send(message);

  });

  term.on('paste', function (data, ev) {
    socket.send(data);
  });
}


function onClose()
{
  term.write("\rDisconnected from server.");       
}
  

function onError()
{ 
  term.write("\rFail: ");
  term.write("Communication error");
}
