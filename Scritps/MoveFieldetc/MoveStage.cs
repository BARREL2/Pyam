using UnityEngine;
using System.Collections;

public class MoveStage : MonoBehaviour {

	// Use this for initialization
	void Start () {
		 iTween.MoveTo(gameObject,iTween.Hash("path",iTweenPath.GetPath("np1"),"time",10,"looptype", iTween.LoopType.loop,"easetype",iTween.EaseType.linear));
	}
	
	// Update is called once per frame
	void Update () {

    }
}