#pragma strict
private var time : float;

var display : GUIText;
var maxTime : float = 60;

function Start () {

}

function OnEnable(){
	UpdateTime();
}


function UpdateTime(){
	//タイムアタックの時間を描画
	time = maxTime;
	while( time > 0){
		display.text = Mathf.Floor( time / 60 ) + ":" + time % 60;
		yield WaitForSeconds(1);
		time -= 1;	
	}
	display.text = "0:0";
	yield WaitForSeconds(5);
	Application.LoadLevel("Title");
	
}