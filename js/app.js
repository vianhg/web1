var sections = ["home", "aboutme", "skills", "portfolio","blog"];

function getWidth() {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  );
}


function displayMenu() {
	document.getElementById("cardMenu").style.display = "block";
}

function hideMenu() {
	var m = document.getElementById("cardMenu");
	m.style.display = "none";
}

function initMenu() {
	if (getWidth() < 767) {
		hideMenu();		
	}
}

initMenu();

function nav(p) {
	var w = getWidth();
	var actualSection = -1;
	var bgcolor = "#f1f1f1";
	var bgmenucolor = "white";
	var targ, menu;
	menu = document.getElementById("cardMenu");

	for (var i = 0; i < sections.length; i++) {
		if (document.getElementById(sections[i]).style.display == "block") {
			actualSection = i;
		}
		document.getElementById(sections[i]).style.display = "none";
	}

	//Si es texto, es el id de la sección, si no es un número
	if (isNaN(p)) {
		targ = document.getElementById(p);
	} else {
		i = (actualSection+p)%sections.length;
		targ = document.getElementById(sections[i]);
	}

	if (p == "home" || i == 0) {
		bgcolor = "#233D58";
		bgmenucolor = "#233D58";
	}
	if (w < 767) {
		hideMenu();
	}
	else {
		bgmenucolor = "#233D58";	
	}

	targ.style.display = "block";
	targ.style.background = bgcolor;
	menu.style.background = bgmenucolor;
	
}


function displayContact() {
	document.getElementById("contact").style.display = "block";
}
function hideContact() {
	document.getElementById("contact").style.display = "none";
}