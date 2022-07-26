var speed : float = 10.0;
var rotationSpeed : float = 100.0;
var jumpup : float = 10;
var isJump : boolean = false;
var select : AudioClip;

function Update () {
	
	//Horizontal$B$O(BWASD$B$N(BAD$B$H%F%s%-!<"+"*$KBP1~$7$F$$$k(B
    var translation : float = Input.GetAxis ("Horizontal") * speed;
 	//Vertical$B$O(BWASD$B$N(BWS$B$H%F%s%-!<","-$KBP1~$7$F$$$k(B
    var rotation : float = Input.GetAxis ("Vertical") * rotationSpeed;
    
    
    translation *= Time.deltaTime;
    rotation *= Time.deltaTime;
    
	//X$B<4J}8~$K79$/(B
    transform.Rotate (rotation, 0, 0);
    
    //$B%8%c%s%WCf$8$c$J$1$l$P:81&$X0\F0$G$-$k(B
   if(!isJump){
		transform.Translate (0, 0, -translation);
   }
   //$B%8%c%s%WCf$O1&J}8~$KNO$,$+$+$k$?$a:8$K0\F0$G$-$J$$(B
   if(isJump){
   		transform.Translate(0,0,18*Time.deltaTime);
   }
}

	//$B%8%c%s%WCf$G$O$J$$>uBV$G%9%Z!<%9%-!<!J(BJump$B%-!<!K$r2!$9$H>eJ}8~$KNO$,$+$+$j%8%c%s%W$C$]$$F0$-$,$G$-$k(B
function FixedUpdate () {
	    if (!isJump && Input.GetButtonDown ("Jump")) {
	    	isJump = true; //$B%8%c%s%WCf$G$"$k(Bbool$BJQ?t(B
	    	audio.PlayOneShot(select); //$B%8%c%s%W$7$?;~$N8z2L2;(B
        rigidbody.velocity = Vector3(0,jumpup,0);
    }
}

	//Field$B%?%0$,$D$$$?%*%V%8%'%/%H$K%W%l%$%d!<$,@\?($9$k$H:FEY%8%c%s%W$G$-$k(B$B$h$&$K$J$k!J(B2$BCJ%8%c%s%WKI;_:v!K(B
function OnCollisionEnter(collision : Collision){
		if (collision.gameObject.tag == "Field"){
			isJump = false;
		}
}

	//GameStarter$B$+$iAw$i$l$F$/$k(B
function StartGame(){
	enabled = true;	
}
