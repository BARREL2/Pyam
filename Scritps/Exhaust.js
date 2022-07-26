var size : float;
//右矢印を押したときに排気ガスのエフェクトを出す
function Update () {
	if(Input.GetKey(KeyCode.RightArrow)){
		this.GetComponent(ParticleSystem).Emit(size);
	}
}