#pragma strict

var titleMode : boolean = false; //$B%?%$%H%kMQ(B EndGrid$B$+$i=i4|CME@$X%o!<%W(B

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
			//$B%?%0(B"Respawn"$B$,@_Dj$5$l$F$$$k%*%V%8%'%/%H$N0LCV$r<hF@(B
			var respawn : GameObject = GameObject.FindWithTag("StartGrid");
			//$B%?%0(B"Respawn"$B$,@_Dj$5$l$F$$$k%*%V%8%'%/%H$N0LCV$K%?%0(B"Ball"$B$,@_Dj$5$l$F$$$k%*%V%8%'%/%H$r0\F0(B
			other.gameObject.transform.position = respawn.transform.position;		
		}
	}	
}