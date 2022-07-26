function OnCollisionEnter(collision : Collision){
	collision.gameObject.rigidbody.AddForce(Vector3.up * 150.0, ForceMode.Impulse);
	print("ok");
}