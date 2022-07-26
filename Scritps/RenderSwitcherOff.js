var target : GameObject;
var atari : boolean = false;
var timer : float;

	//オブジェクトが消されるまでのフレーム数
function Awake(){
tiemr = 30;	
}

	//プッシュボタンから送られてきた判定を元に、オブジェクトの描画を消す。
function Update(){
		var other = target.GetComponent("PushButton");
		atari = other.hantei;
		
		if(atari){
		renderer.enabled = false;
		timer -= 1;	
		}
		
		if(timer<0){
		Destroy(gameObject);	
		}		
}
