var select : AudioClip;
var audioBool : boolean = true;

function Update () {
	if (this.gameObject == SelMouse.selectedGameObject) {
		transform.localScale = Vector3(4, 4, 4);
		if(audioBool){
			audio.PlayOneShot(select);
			audioBool = false;
		}
		if(Input.GetButtonDown("Fire1")){
			Application.LoadLevel("Tutorial");
		}
	} else {
		transform.localScale = Vector3(3, 3, 3);
				audioBool = true;
	}
}
