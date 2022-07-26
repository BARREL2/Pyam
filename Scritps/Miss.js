var col : boolean = false;
var scene : float = 0;
var scenes : float = 0;
private var sChange : SceneChanges;

//$B%4!<%kH=Dj$N<hF@=`Hw(B
var target : GameObject;
var golhan : boolean = false;

//Miss$B!D$NIA2h(B
var misstex : Texture2D;
var timer : float;

//$B%7!<%s$rFI$_$J$*$9$^$G$N;~4V(B($B?tCM(B/$BIC!K(B
function Awake(){
	timer = 180;	
}

//$B%W%l%$%d!<$,%_%9$7$?$H$-$K(Breplay$B$rI=<((B
function OnCollisionEnter(collision : Collision){
		if (collision.gameObject.tag == "Player"){
			col = true;
			print("replay");
		}
}

//SceneChanges$B$+$i%4!<%kH=Dj$r<hF@(B
function Update(){
	//SceneChanges$B$X%"%/%;%9(B
	 sChange = target.GetComponent("SceneChanges"); 
     golhan = sChange.goalhan;
     
     //bool$BJQ?t(Bcol$B$,(BON$B$K$J$C$?>l9g(B
	if(col){
		timer -= 1;
		if(timer<0){
	    Application.LoadLevel(scene);
		}
	}
	//bool$BJQ?t(Bgolhan($B%4!<%kH=Dj$NN,!K$,(BON$B$K$J$C$?>l9g(B
	if(golhan){
		enabled = false;
	}	 
}

// Miss...$B$NIA2h0LCV$H%\%?%s(B
function OnGUI(){
	//$BIA2h0LCV(B
	if(col){
		GUI.Label(new Rect(320, 103, misstex.width, misstex.height), misstex);
	}
	//$B%?%$%H%k$XLa$k%\%?%s$H%j%9%?!<%H%\%?%s(B
	if (GUI.Button(Rect(10, 10, 100, 25), "ToTitleScene")) {       Application.LoadLevel("Title");
	}
	if (GUI.Button(Rect(10, 40, 70, 30), "ReStart!")) {       Application.LoadLevel(scenes);
	}
}