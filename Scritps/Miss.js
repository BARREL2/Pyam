var col : boolean = false;
var scene : float = 0;
var scenes : float = 0;
private var sChange : SceneChanges;

//ゴール判定の取得準備
var target : GameObject;
var golhan : boolean = false;

//Miss…の描画
var misstex : Texture2D;
var timer : float;

//シーンを読みなおすまでの時間(数値/秒）
function Awake(){
	timer = 180;	
}

//プレイヤーがミスしたときにreplayを表示
function OnCollisionEnter(collision : Collision){
		if (collision.gameObject.tag == "Player"){
			col = true;
			print("replay");
		}
}

//SceneChangesからゴール判定を取得
function Update(){
	//SceneChangesへアクセス
	 sChange = target.GetComponent("SceneChanges"); 
     golhan = sChange.goalhan;
     
     //bool変数colがONになった場合
	if(col){
		timer -= 1;
		if(timer<0){
	    Application.LoadLevel(scene);
		}
	}
	//bool変数golhan(ゴール判定の略）がONになった場合
	if(golhan){
		enabled = false;
	}	 
}

// Miss...の描画位置とボタン
function OnGUI(){
	//描画位置
	if(col){
		GUI.Label(new Rect(320, 103, misstex.width, misstex.height), misstex);
	}
	//タイトルへ戻るボタンとリスタートボタン
	if (GUI.Button(Rect(10, 10, 100, 25), "ToTitleScene")) {       Application.LoadLevel("Title");
	}
	if (GUI.Button(Rect(10, 40, 70, 30), "ReStart!")) {       Application.LoadLevel(scenes);
	}
}