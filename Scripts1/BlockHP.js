#pragma strict
var blockHP : float = 4; //ブロックの基本HP
var size : float;

function Start ()
{

}

function Update ()
{

}

function OnCollisionEnter (other : Collision)
{
	if (other.gameObject.tag == "Bullet")
	{
		blockHP -= PlayerBullet.hitCounter;
		
		if (blockHP <= 0)
		{
			Destroy(gameObject);
		//	this.GetComponent(ParticleSystem).Emit(size);
		}
		renderer.material.color = Color.red;
		yield;
		renderer.material.color = Color.blue;
		yield;
		renderer.material.color = Color.red;
		yield;
		renderer.material.color = Color.blue;
	}	
}