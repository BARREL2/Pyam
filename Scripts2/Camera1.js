#pragma strict
var originalPositionY : float ;
function Start () {
	originalPositionY= transform.localPosition.y;
}

function Update () {
if(GameStarter.gameStart){			
 		//矢印上が押されたらカメラを上げる
	if(Input.GetKey(KeyCode.UpArrow)) {
		transform.localPosition.y += 0.03;
	}else {
		if(transform.localPosition.y >= originalPositionY) {
			transform.localPosition.y -= 0.06;
		}
	}
	
	//矢印下が押されたらカメラを下げる
	if(Input.GetKey(KeyCode.DownArrow)) {
		transform.localPosition.y -= 0.03;
	}else {
		if(transform.localPosition.y <= originalPositionY) {
			transform.localPosition.y += 0.06;
		}
	}
}	
}