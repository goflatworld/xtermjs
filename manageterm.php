<!doctype html>
<html>
    <head>
        <title>Stingray Solution</title>
        <link rel="stylesheet" href="xterminal.js/build/xterm.css" />
        <link rel="stylesheet" href="xterminal.js/addons/fullscreen/fullscreen.css" />
        <link rel="stylesheet" href="style.css" />
        <script>
		var hash= "<?php echo $_REQUEST['id']; ?>\n";
	</script>	
		
	<script src="xterminal.js/dist/xterm.js" ></script>
        <script src="xterminal.js/addons/attach/attach.js" ></script>
        <script src="xterminal.js/addons/fit/fit.js" ></script>
        <script src="xterminal.js/addons/fullscreen/fullscreen.js" ></script>
    </head>
    <body>
        <div id="terminal-container"></div>
        <script src="main.js" defer ></script>
    </body>
</html>
