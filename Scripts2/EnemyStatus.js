var locked : boolean = false; 
var se1 : AudioClip;

static var redCount : float = 0;
static var greenCount : float = 0;
static var blueCount : float = 0;

function OnCollisionEnter(other : Collision) {
if(other.gameObject.tag != "Player"){

		switch(BulletShot.bulletState) {
				case 0 :
					this.renderer.material.SetColor ("_Color",Color.red);
					redCount++;
					break;
				case 1: 
					this.renderer.material.SetColor ("_Color",Color.green);
					greenCount++;
					break;
				case 2: 
					this.renderer.material.SetColor ("_Color",Color.blue);
					blueCount++;
					break;
		}

		if (other.gameObject.tag == "bullet") {
        	CharacterMove.enemyCount--;
        	collider.enabled = false;
        }
        
        if (other.gameObject.tag == "Hbullet") {
        	CharacterMove.enemyCount--;
        	collider.enabled = false;
        	audio.PlayOneShot(se1);
        }
        

}    
}