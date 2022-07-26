using UnityEngine;
using System.Collections;

public class MoveKTM : MonoBehaviour {
	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
	Hashtable hash = iTween.Hash("x",52,"time",5.0f,"islocal", true, "easetype", iTween.EaseType.easeInOutCubic);

		
		if(Input.GetButtonDown("Jump")){
			iTween.MoveTo(gameObject, hash);
		}
	}
}