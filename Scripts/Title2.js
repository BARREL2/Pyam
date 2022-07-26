#pragma strict

var rotateX : float = 0;
var rotateY : float = 0;
var rotateZ : float = 0;
var timer : int = 0;

function Start () {

}

function Update () {
	timer++;
	if(timer == 1 || (timer % 200) == 0 || (timer%600) == 0){ 
	rotateX = Random.Range(1,50);
	rotateY = Random.Range(1,50);
	rotateZ = Random.Range(1,50);
	}
	
	if(timer > 10000){
		timer = 0;
	}

	transform.Rotate(Time.deltaTime*rotateX,Time.deltaTime*rotateY,Time.deltaTime*rotateZ);
}