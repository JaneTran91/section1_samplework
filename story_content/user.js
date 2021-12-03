function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6Gf33VuxBRh":
        Script1();
        break;
      case "6OxKo047uTq":
        Script2();
        break;
      case "5b2VDQta0RM":
        Script3();
        break;
      case "5obQU0j4fFd":
        Script4();
        break;
      case "5rhzdnvmvzh":
        Script5();
        break;
      case "6PUhPohQNyt":
        Script6();
        break;
      case "6YW5S0QMq6n":
        Script7();
        break;
      case "6Zp5pVjUU4L":
        Script8();
        break;
      case "629EGcG1LgE":
        Script9();
        break;
      case "6jb4zAKnOyI":
        Script10();
        break;
      case "5qlpQlOdbVZ":
        Script11();
        break;
      case "5cUNyeITHOr":
        Script12();
        break;
      case "63KiHLJ0pTh":
        Script13();
        break;
      case "6O7wLxtrIBe":
        Script14();
        break;
      case "6dgdvhKGDw6":
        Script15();
        break;
      case "67PnyX58WU8":
        Script16();
        break;
      case "6VlR9SY8mCh":
        Script17();
        break;
      case "6kEAyhDLXIS":
        Script18();
        break;
      case "6C4kCT42B7O":
        Script19();
        break;
      case "6iRoJ8j71bV":
        Script20();
        break;
      case "6n1h7l9bNh8":
        Script21();
        break;
      case "6CkhmrZxPtH":
        Script22();
        break;
  }
}

function Script1()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoInFullscreen($("#preso").get(0));

}

function Script2()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

function Script3()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoInFullscreen($("#preso").get(0));

}

function Script4()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

function Script5()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoInFullscreen($("#preso").get(0));

}

function Script6()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoInFullscreen($("#preso").get(0));

}

function Script7()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoInFullscreen($("#preso").get(0));

}

function Script8()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

function Script9()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoInFullscreen($("#preso").get(0));

}

function Script10()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

function Script11()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoInFullscreen($("#preso").get(0));

}

function Script12()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

function Script13()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoInFullscreen($("#preso").get(0));

}

function Script14()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

function Script15()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoInFullscreen($("#preso").get(0));

}

function Script16()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

function Script17()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoInFullscreen($("#preso").get(0));

}

function Script18()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

function Script19()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoInFullscreen($("#preso").get(0));

}

function Script20()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

function Script21()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoInFullscreen($("#preso").get(0));

}

function Script22()
{
  function add_script(scriptURL,oID) {
     var scriptEl = document.createElement("script");
     var head=document.getElementsByTagName('head')[0];
      scriptEl.type = "text/javascript";      
      scriptEl.src = scriptURL;      
      scriptEl.id=oID;      
      head.appendChild(scriptEl);}

//only want to add these once!
if(document.getElementById('jquery')==null){
add_script("https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js","jquery");

}


/* Get into full screen */
function GoInFullscreen(preso) {
	if(preso.requestFullscreen)
		preso.requestFullscreen();
	else if(preso.mozRequestFullScreen)
		preso.mozRequestFullScreen();
	else if(preso.webkitRequestFullscreen)
		preso.webkitRequestFullscreen();
	else if(preso.msRequestFullscreen)
		preso.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_preso = document.fullscreenpreso || document.webkitFullscreenpreso || document.mozFullScreenpreso || document.msFullscreenpreso || null;
	
	// If no preso is in full-screen
	if(full_screen_preso === null)
		return false;
	else
		return true;
}

GoOutFullscreen();

}

