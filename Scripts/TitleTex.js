#pragma strict
var titleTex : Texture2D;

function Start () {

}

function Update () {

}
function OnGUI(){
	//$B%F%/%9%A%cIA2h(B
	GUI.DrawTexture(Rect(0, 0, Screen.width, Screen.height), titleTex);
}