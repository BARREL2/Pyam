#pragma strict

var posX : float = 0;
var posY : float = 0;
var Xstate : int = 1;

var BlockPref : Transform;
var BlockPrefRed : Transform;
var BlockPrefBlue : Transform;
var BlockPrefGreen : Transform;
var BlockPrefPurple : Transform;
var BlockPrefBlack : Transform;

var Timer :int = 0; 
var RedTimer : int = 0;
var BlueTimer : int = 0;
var GreenTimer : int = 0;
var PurpleTimer : int = 0;
var BlackTimer : int = 0;

function Start () {

}


function Update () {
	
	posY = Random.Range(9.0, 10.0);
	
	if(Xstate == 1){
		posX += 0.3;
		transform.position = Vector3(posX, 14, 0);
			if(posX > 7.6){
				posX = 7.6;
				Xstate = 2;
			}
	}
	if(Xstate == 2){
		posX -= 0.3;
		transform.position = Vector3(posX, 14, 0);
			if(posX < -7.6){
				posX = -7.6;
				Xstate = 1;
			}
	}
	
	Timer++;
	if ((Timer % 3)==0) {
        Instantiate (BlockPref, transform.position, transform.rotation);
    }
    
    RedTimer = Random.Range(1,32);
    if(RedTimer == 1){
    	Instantiate (BlockPrefRed, transform.position, transform.rotation);
    }
    
    BlueTimer = Random.Range(1,32);
    if(BlueTimer == 1){
    	Instantiate (BlockPrefBlue, transform.position, transform.rotation);
    }
    
    GreenTimer = Random.Range(1,32);
    if(GreenTimer == 1){
    	Instantiate (BlockPrefGreen, transform.position, transform.rotation);
    }
    
    PurpleTimer = Random.Range(1,32);
    if(PurpleTimer == 1){
    	Instantiate (BlockPrefPurple, transform.position, transform.rotation);
    }
    
    BlackTimer = Random.Range(1,64);
    if(BlackTimer == 1){
    	Instantiate (BlockPrefBlack, transform.position, transform.rotation);
    }
}