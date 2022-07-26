
function OnCollisionEnter(collision : Collision){
		if (collision.gameObject.tag == "Player"){
			collision.gameObject.transform.Translate(-327.9881, 28.00208, 3.39154);
		}
}
