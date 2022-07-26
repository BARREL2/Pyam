var target : GameObject;
var Col : boolean = false;

function Update () {
	var other = target.GetComponent("MoveDram");
	Col = other.col;
	 if(Col){
			transform.Translate(0,1,0);
 		}else{
 			transform.Translate(0,0,0);
 		}		
}