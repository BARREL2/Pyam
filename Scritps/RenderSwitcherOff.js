var target : GameObject;
var atari : boolean = false;
var timer : float;

	//$B%*%V%8%'%/%H$,>C$5$l$k$^$G$N%U%l!<%`?t(B
function Awake(){
tiemr = 30;	
}

	//$B%W%C%7%e%\%?%s$+$iAw$i$l$F$-$?H=Dj$r85$K!"%*%V%8%'%/%H$NIA2h$r>C$9!#(B
function Update(){
		var other = target.GetComponent("PushButton");
		atari = other.hantei;
		
		if(atari){
		renderer.enabled = false;
		timer -= 1;	
		}
		
		if(timer<0){
		Destroy(gameObject);	
		}		
}
