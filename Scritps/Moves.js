var speed : float = 10.0;
var rotationSpeed : float = 100.0;
var jumpup : float = 10;
var isJump : boolean = false;
var select : AudioClip;

function Update () {
	
	//HorizontalはWASDのADとテンキー←→に対応している
    var translation : float = Input.GetAxis ("Horizontal") * speed;
 	//VerticalはWASDのWSとテンキー↑↓に対応している
    var rotation : float = Input.GetAxis ("Vertical") * rotationSpeed;
    
    
    translation *= Time.deltaTime;
    rotation *= Time.deltaTime;
    
	//X軸方向に傾く
    transform.Rotate (rotation, 0, 0);
    
    //ジャンプ中じゃなければ左右へ移動できる
   if(!isJump){
		transform.Translate (0, 0, -translation);
   }
   //ジャンプ中は右方向に力がかかるため左に移動できない
   if(isJump){
   		transform.Translate(0,0,18*Time.deltaTime);
   }
}

	//ジャンプ中ではない状態でスペースキー（Jumpキー）を押すと上方向に力がかかりジャンプっぽい動きができる
function FixedUpdate () {
	    if (!isJump && Input.GetButtonDown ("Jump")) {
	    	isJump = true; //ジャンプ中であるbool変数
	    	audio.PlayOneShot(select); //ジャンプした時の効果音
        rigidbody.velocity = Vector3(0,jumpup,0);
    }
}

	//Fieldタグがついたオブジェクトにプレイヤーが接触すると再度ジャンプできるようになる（2段ジャンプ防止策）
function OnCollisionEnter(collision : Collision){
		if (collision.gameObject.tag == "Field"){
			isJump = false;
		}
}

	//GameStarterから送られてくる
function StartGame(){
	enabled = true;	
}
