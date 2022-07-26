var timer : float;
static var gameStart : boolean = false;
var sw : int;
var sh : int;
var labelStyle : GUIStyle;

//開始までの時間
function Start(){
	timer = 3.2;
	sw = Screen.width;
	sh = Screen.height;
}

//タイマーが0以下になったら動けるようになる
function Update(){
	timer -= Time.deltaTime;
	if(timer <= 0.0){
		gameStart = true;
	}
}

//秒数の描画とアルファブレンド
function OnGUI(){
	if(timer > 0.0){	
		var text : String = Mathf.CeilToInt(timer).ToString();
		GUI.color = Color(1,1,1, timer - Mathf.FloorToInt(timer));
		GUI.Label(Rect(sw/3, sh/2, sh/4, sh/2),text,labelStyle);
	}	
}