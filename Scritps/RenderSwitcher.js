var target : GameObject;
var atari : boolean = false;

	//プッシュボタンから送られてきた判定を元に、オブジェクトを描画する。
function Update(){
		var other = target.GetComponent("PushButton");
		atari = other.hantei;
		
		if(atari){
		renderer.enabled = true;	
		}
		
}
