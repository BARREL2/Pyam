using UnityEngine;
using System.Collections;

public class MoveField9 : MonoBehaviour {

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
	Hashtable hash = iTween.Hash("y",-11.5,"time",5.0f,"looptype", iTween.LoopType.pingPong,"islocal", true, "easetype", iTween.EaseType.easeInOutCubic);

		
	iTween.MoveTo(gameObject, hash);
	
	}
}
