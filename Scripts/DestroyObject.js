#pragma strict
var touchObject : GameObject; // タッチしたオブジェクトを代入
var explosionEffect : GameObject; // 消滅エフェクト(パーティクル)

var hit : RaycastHit;
var posX : float = 0;
var posY : float = 0;

var sabun : int = 0;
var sabunscore : int = 0;

//タッチされたモノを判定して得点を加える
function TouchObject(){

	touchObject = hit.transform.gameObject;
	if(hit.transform.gameObject.tag == "Untagged"){
		return;
	}
	if(hit.transform.gameObject.tag == "Title"){
		Application.LoadLevel("Main");
		return;
	}
	if(hit.transform.gameObject.tag == "Title2"){
		Application.LoadLevel("Main");
		return;
	}	
	if(hit.transform.gameObject.tag == "Block"){
		sabunscore = Score.score;
		Score.score += 1;
	}
	if(hit.transform.gameObject.tag == "RedBlock"){
		sabunscore = Score.score;
		Score.score += 5;
	}
	if(hit.transform.gameObject.tag == "BlueBlock"){
		sabunscore = Score.score;
		Score.score += 10;
	}
	if(hit.transform.gameObject.tag == "GreenBlock"){
		sabunscore = Score.score;
		Score.score += 50;
	}
	if(hit.transform.gameObject.tag == "PurpleBlock"){
		sabunscore = Score.score;
		Score.score += 100;
	}
	if(hit.transform.gameObject.tag == "BlackBlock"){
		sabunscore = Score.score;
		Score.score += 1000;
	}
	
	//スコア描画
	sabun = (Score.score - sabunscore) * 2;
	guiText.text = "+"+ sabun.ToString();
	
	//爆発エフェクト
	var explosion = Instantiate( explosionEffect, touchObject.transform.position, Quaternion.identity );//爆発エフェクト
	Destroy(touchObject); 
	Destroy(explosion, 1.1);
	touchObject = null;
}

function Update () {
	//Ray処理
	var ray = Camera.main.ScreenPointToRay (Input.mousePosition);

		//カメラから不可視レーザーを出す　デバッグ時は可視状態
	if (Physics.Raycast (ray, hit, 100)) {
  		Debug.DrawLine (ray.origin, hit.point);
   	 		if(Input.GetButtonDown("Fire1")){
				TouchObject();
  	 		}
  	}
}