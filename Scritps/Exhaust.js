var size : float;
//$B1&Lp0u$r2!$7$?$H$-$KGS5$%,%9$N%(%U%'%/%H$r=P$9(B
function Update () {
	if(Input.GetKey(KeyCode.RightArrow)){
		this.GetComponent(ParticleSystem).Emit(size);
	}
}