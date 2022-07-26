var pos : float = -1;
var col : boolean = false;
function OnTriggerStay(target : Collider){
		transform.Translate(0,pos,0);
		col = true;
}
