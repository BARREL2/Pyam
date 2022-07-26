#pragma strict

public var fadeOutTexture : Texture2D;
public var fadeSpeed = 0.3; 
var drawDepth = -1000;

private var alpha = 1.0;  
private var fadeDir = -1;

var rotateX : float = 0;
var rotateY : float = 0;
var rotateZ : float = 0;
var timer : int = 0;

function Start () {
	alpha = 1;
	fadeIn();
}

function Update () {
	//$B;~4V7P2a$G2sE>$9$k8~$-$rJQ$($k(B
	timer++;
	if(timer == 1 || (timer % 200) == 0 || (timer%500) == 0){ 
	rotateX = Random.Range(1,50);
	rotateY = Random.Range(1,50);
	rotateZ = Random.Range(1,50);
	}
	
	if(timer > 10000){
		timer = 0;
	}
$B!!(B 	//$B2sE>(B
	transform.Rotate(Time.deltaTime*rotateX,Time.deltaTime*rotateY,Time.deltaTime*rotateZ);
}

function OnGUI(){
	//$B%"%k%U%!=hM}(B
	alpha += fadeDir * fadeSpeed * Time.deltaTime;	
	alpha = Mathf.Clamp01(alpha);	
 
	GUI.color.a = alpha;
	GUI.depth = drawDepth;
 
	GUI.DrawTexture(Rect(0, 0, Screen.width, Screen.height), fadeOutTexture);
}

function fadeIn(){
	fadeDir = -1;	
}
  
function fadeOut(){
	fadeDir = 1;	
}