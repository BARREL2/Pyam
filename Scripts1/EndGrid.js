#pragma strict

var titleMode : boolean = false; //タイトル用 EndGridから初期値点へワープ

function Start ()
{

}

function Update ()
{
	Rolling ();
}

function Rolling ()
{
	
	var rotation : float = Time.deltaTime * 12;
	rotation *= 10;
	transform.Rotate(0,0,rotation);	
}

function OnTriggerEnter (other : Collider)
{
	if (titleMode)
	{
		if (other.gameObject.tag == "Player")
		{
			//タグ"Respawn"が設定されているオブジェクトの位置を取得
			var respawn : GameObject = GameObject.FindWithTag("StartGrid");
			//タグ"Respawn"が設定されているオブジェクトの位置にタグ"Ball"が設定されているオブジェクトを移動
			other.gameObject.transform.position = respawn.transform.position;		
		}
	}	
}