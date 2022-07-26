var timer : float = 0;
var isJump : boolean = false;
var uP : float;
var miss : boolean = false;

	//Miss…の描画
var misstex : Texture2D;
var timers : float;
var scene : float;

	//トゲに当たってからシーンを読みなおすまでのフレーム数（60/秒）
function Awake(){
	timers = 110; //1.8s
}


function Update () {
	
	transform.Rotate(5,8,15);
	
	timer++;
	//Fieldに接地してから70フレーム毎にトゲ玉が上昇する	
	if(timer == 70){
	rigidbody.velocity = Vector3(0,uP,0);
	isJump = true;
	
	}//上昇中は重力を強くする
	if(isJump){
		Physics.gravity = Vector3(0, -20.0, 0);
	}
	
	//トゲに当たってからタイマーを減らす
	if(miss){
		timers--;	
	}
	
	//タイマーが0以下でシーンを読みなおす
	if(timers < 0){
		 Application.LoadLevel(scene);	
	}
}

	//トゲ玉にプレイヤーが接触するとミス判定をONにする
function OnCollisionEnter(other : Collision){
	if(other.gameObject.tag == "Player"){
		miss = true;
		print("replay");
		rigidbody.velocity = Vector3(60,160,100);
	}	//トゲ玉がFieldに接触するとタイマーを0に戻す
	if(other.gameObject.tag == "Field"){
		timer = 0;
		isJump = false;	
	}	
}

// Miss...の描画位置
function OnGUI(){
	//描画位置
	if(miss){
		GUI.Label(new Rect(320, 103, misstex.width, misstex.height), misstex);
	}
}