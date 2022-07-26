var size : float;
//排気ガスを出す
function Update(){
this.GetComponent(ParticleSystem).Emit(size);
}