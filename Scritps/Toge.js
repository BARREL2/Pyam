var timer : float = 0;
var isJump : boolean = false;
var uP : float;
var miss : boolean = false;

	//Miss$B!D$NIA2h(B
var misstex : Texture2D;
var timers : float;
var scene : float;

	//$B%H%2$KEv$?$C$F$+$i%7!<%s$rFI$_$J$*$9$^$G$N%U%l!<%`?t!J(B60/$BIC!K(B
function Awake(){
	timers = 110; //1.8s
}


function Update () {
	
	transform.Rotate(5,8,15);
	
	timer++;
	//Field$B$K@\CO$7$F$+$i(B70$B%U%l!<%`Kh$K%H%26L$,>e>:$9$k(B	
	if(timer == 70){
	rigidbody.velocity = Vector3(0,uP,0);
	isJump = true;
	
	}//$B>e>:Cf$O=ENO$r6/$/$9$k(B
	if(isJump){
		Physics.gravity = Vector3(0, -20.0, 0);
	}
	
	//$B%H%2$KEv$?$C$F$+(B$B$i%?%$%^!<$r8:$i$9(B
	if(miss){
		timers--;	
	}
	
	//$B%?%$%^!<$,(B0$B0J2<$G%7!<%s$rFI$_$J$*$9(B
	if(timers < 0){
		 Application.LoadLevel(scene);	
	}
}

	//$B%H%26L$K%W%l%$%d!<$,@\?($9$k$H%_%9H=Dj$r(BON$B$K$9$k(B
function OnCollisionEnter(other : Collision){
	if(other.gameObject.tag == "Player"){
		miss = true;
		print("replay");
		rigidbody.velocity = Vector3(60,160,100);
	}	//$B%H%26L$,(BField$B$K@\?($9$k$H%?%$%^!<$r(B0$B$KLa$9(B
	if(other.gameObject.tag == "Field"){
		timer = 0;
		isJump = false;	
	}	
}

// Miss...$B$NIA2h0LCV(B
function OnGUI(){
	//$BIA2h0LCV(B
	if(miss){
		GUI.Label(new Rect(320, 103, misstex.width, misstex.height), misstex);
	}
}