#pragma strict
var titleTex : Texture2D;

function Start () {

}

function Update () {

}
function OnGUI(){
	//テクスチャ描画
	GUI.DrawTexture(Rect(0, 0, Screen.width, Screen.height), titleTex);
}