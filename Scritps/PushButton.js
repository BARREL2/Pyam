var hantei : boolean = false;

	//プレイヤーが接触するとボタンを押したかのように下がり、判定が下る
function OnCollisionEnter(collision : Collision){
		if (collision.gameObject.tag == "Player"){
			transform.Translate(0,-1,0);
			hantei = true;
			enabled = false;
		}
}