var timer : float;
var sw : int = Screen.width;
var sh : int = Screen.height;
var labelStyle : GUIStyle;
		
//開始までの時間
function Start(){
	timer = 3.2;
}

//タイマーが0以下になったら動けるようになる
function Update(){
	timer -= Time.deltaTime;
	if(timer <= 0.0){
		BroadcastMessage("StartGame");
		enabled = false;
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