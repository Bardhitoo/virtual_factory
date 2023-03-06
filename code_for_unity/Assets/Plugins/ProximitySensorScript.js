#pragma strict

public var processDelay : float = 0.4;
public var afterProcessDelay : float = 0.5;
public var particleObject : ParticleSystem;
public var machineNumber : String = "Machine";
public var spawnerNumber : String = "Spawn";

function OnTriggerEnter ( other : Collider ) {

	Invoke("startDispensing", 0);
	GameObject.Find("/sd/" + machineNumber + "/" + spawnerNumber).GetComponent.<SpawnerScript>().spawnObject();

}

function Update () {

	if ( GetComponent.<ConveyorBeltScript>().isPaused == true && GetComponent.<ConveyorBeltScript>().isRunning == true && !particleObject.isEmitting ) {

		Invoke("stopDispensing", afterProcessDelay);

	}

}

function startDispensing () {

	GetComponent.<ConveyorBeltScript>().isPaused = true;

	particleObject.Play();

}

function stopDispensing () {

	GetComponent.<ConveyorBeltScript>().isPaused = false;

	particleObject.Stop();

}