var hit : RaycastHit;
var homingBullet0 : GameObject;
var homingBullet1 : GameObject;
var homingBullet2 : GameObject;
var homingBullet3 : GameObject;
var homingBullet4 : GameObject;
static var  locked  =  new Array(5);
static var targetindex : int = 0;
var target : GameObject;
var speed : float = 100;
var lockonTime : float = 0;

var se1 : AudioClip;
static var lockOnMessage : boolean = false;

function Start () {
	locked = [0,0,0,0,0];
}

function Update () {

	var ray = Camera.main.ScreenPointToRay (Input.mousePosition);
    // ?????N?????????????????????????????Ê????????’??????
    if (Physics.Raycast(transform.position, transform.forward, hit, 1000)) {
        // ??????????????????????????????????????N??????
      Debug.DrawLine (ray.origin, hit.point);
      
        if( hit.collider.gameObject.tag == 'enemy'){
        target = hit.transform.gameObject;
        		
        		//not locked target
 			 if(target.GetComponent(EnemyStatus).locked == false){
 			 		lockonTime += Time.time;
 			 		//targeting
   					if(lockonTime > 60){
   						locked[targetindex]= hit.transform.gameObject;
   						targetindex++;
   						lockOnMessage = true;
   						audio.PlayOneShot(se1);
//   						Debug.Log(locked[targetindex-1]);
   						target.GetComponent(EnemyStatus).locked = true;
  						lockonTime = 0;
   					}
   					
   			}
    	}
  	}
  	//launch homingbullet
    	if(Input.GetKeyDown(KeyCode.C)) {
			
		if(locked[4]){
			Instantiate(homingBullet4, transform.position, transform.rotation);
			targetindex--;
		}
		if(locked[3]){
			Instantiate(homingBullet3, transform.position, transform.rotation);
			targetindex--; 
		}
		if(locked[2]){
			Instantiate(homingBullet2, transform.position, transform.rotation); 
			targetindex--;
		}
		if(locked[1]){
			Instantiate(homingBullet1, transform.position, transform.rotation); 
			targetindex--;
		}
		if(locked[0]){
			Instantiate(homingBullet0, transform.position, transform.rotation);
		}
		
		//Debug.Log("HomingShot");
    }
}
