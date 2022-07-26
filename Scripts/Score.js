#pragma strict
static var score : int;
function Start () {
	score = 0;
}
	//スコアを描画
function Update () {
	guiText.text = "SCORE : " + score.ToString();
}
