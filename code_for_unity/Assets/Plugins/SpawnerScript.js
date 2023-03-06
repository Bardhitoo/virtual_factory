#pragma strict

var spawnInterval : float = 3;
var spawnedObject : GameObject; 

function Start () {

	// InvokeRepeating("spawnObject", 0, spawnInterval);
	spawnObject();
	
}

function spawnObject () {

	Instantiate(spawnedObject, spawnedObject.transform.position, spawnedObject.transform.rotation);

}