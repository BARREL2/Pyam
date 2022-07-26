#pragma strict

function Start () {

}

function Update () {
        	switch(BulletShot.bulletState) {
				case 0 :
					transform.renderer.material.SetColor ("_Color",Color.red);
					break;
				case 1: 
					transform.renderer.material.SetColor ("_Color",Color.green);
					break;
				case 2: 
					transform.renderer.material.SetColor ("_Color",Color.blue);
					break;
		}
}