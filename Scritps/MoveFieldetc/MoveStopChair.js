var target : GameObject;
var Col : boolean = false;

function Start () {

}
function OnCollisionEnter(collision : Collision){
	
		var other = target.GetComponent("MoveDram");
		Col = other.col;
		other.col = false;
		if(other.col == false){
 			transform.Translate(0,0,0);
 		}
 		transform.Translate(0,1,0);
}