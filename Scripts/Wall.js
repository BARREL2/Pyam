#pragma strict
function Update () {

}
//$BJI$K%V%m%C%/$,Ev$?$k$H>CLG(B
function OnCollisionEnter(other : Collision){
		if(other.gameObject.tag == "Block"){
			Destroy(other.gameObject);
		}
		if(other.gameObject.tag == "RedBlock"){
			Destroy(other.gameObject);
		}
		if(other.gameObject.tag == "BlueBlock"){
			Destroy(other.gameObject);
		}
		if(other.gameObject.tag == "GreenBlock"){
			Destroy(other.gameObject);
		}
		if(other.gameObject.tag == "PurpleBlock"){
			Destroy(other.gameObject);
		}
		if(other.gameObject.tag == "BlackBlock"){
			Destroy(other.gameObject);
		}
}