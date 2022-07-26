#pragma strict

function Start () {

}

var mode : float = 0;
function Update () {
	transform.Translate(0,0,Player.speed*-1);
	
	Fi();
}

function Fi() {
		if(mode == 0) {
			for(var i : float = 0;i<2;i++) {
			transform.position += (Vector3(0.02,0,0));	
			}
			yield WaitForSeconds(1);
			mode = 1;
		}else if(mode == 1) {
			for(var j : float = 0;j<2;j++) {
			transform.position += (Vector3(-0.02,0,0));	
			}
			yield WaitForSeconds(1);
			mode = 0;
			}
}