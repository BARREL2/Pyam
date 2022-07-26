using UnityEngine;
using System.Collections;

public class MoveLift1 : MonoBehaviour {

	// Use this for initialization
	void Start () {
		 iTween.MoveTo(gameObject,iTween.Hash("path",iTweenPath.GetPath("ml1"),"time",15,"looptype", iTween.LoopType.loop,"easetype",iTween.EaseType.linear));
	}
	
	// Update is called once per frame
	void Update () {

    }
}
