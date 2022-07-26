var Scene : int = 0;
var select : AudioClip;
var audioBool : boolean = true;

//$B%l%$!J(BRay$B!K$,Ev$?$C$?%*%V%8%'%/%H$N%9%1!<%k!JBg$-$5!K$r3HBg$9$k(B
function Update () {
	if (this.gameObject == SelMouse.selectedGameObject) {
		transform.localScale = Vector3(4, 4, 4);
		if(audioBool){
			audio.PlayOneShot(select);
			audioBool = false;
		}
		if(Input.GetButtonDown("Fire1")){
			Application.LoadLevel(Scene);
		}
	} else {//$B%l%$$,Ev$?$C$F$J$1$l$PIaDL$N%9%1!<%k!JBg$-$5!K(B
		transform.localScale = Vector3(3, 3, 3);
		audioBool = true;
	}
}
