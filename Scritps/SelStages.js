var Scene : int = 0;
var select : AudioClip;
var audioBool : boolean = true;

//レイ（Ray）が当たったオブジェクトのスケール（大きさ）を拡大する
function Update () {
	if (this.gameObject == SelMouse.selectedGameObject) {
		transform.localScale = Vector3(4, 4, 4);
		if(audioBool){
			audio.PlayOneShot(select);
			audioBool = false;
		}
		if(Input.GetButtonDown("Fire1")){
			Application.LoadLevel(Scene);
		}
	} else {//レイが当たってなければ普通のスケール（大きさ）
		transform.localScale = Vector3(3, 3, 3);
		audioBool = true;
	}
}
