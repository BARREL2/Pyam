#pragma strict
var text : String;

function Start () {

}

function Update () {
	
	if(LockOnSystem.lockOnMessage) {
			GetComponent(TextMesh).text = "Lock ON!";
	}
}

