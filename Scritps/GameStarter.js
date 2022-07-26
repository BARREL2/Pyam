var timer : float;
var sw : int = Screen.width;
var sh : int = Screen.height;
var labelStyle : GUIStyle;
		
//$B3+;O$^$G$N;~4V(B
function Start(){
	timer = 3.2;
}

//$B%?%$%^!<$,(B0$B0J2<$K$J$C$?$iF0$1$k$h$&$K$J$k(B
function Update(){
	timer -= Time.deltaTime;
	if(timer <= 0.0){
		BroadcastMessage("StartGame");
		enabled = false;
	}
}

//$BIC?t$NIA2h$H%"%k%U%!%V%l%s%I(B
function OnGUI(){
	if(timer > 0.0){	
		var text : String = Mathf.CeilToInt(timer).ToString();
		GUI.color = Color(1,1,1, timer - Mathf.FloorToInt(timer));
		GUI.Label(Rect(sw/3, sh/2, sh/4, sh/2),text,labelStyle);
	}	
}