"use strict";
var StatusEnum;
(function (StatusEnum) {
    StatusEnum["on"] = "ON";
    StatusEnum["off"] = "OFF";
})(StatusEnum || (StatusEnum = {}));
var FanSpeed;
(function (FanSpeed) {
    FanSpeed["slow"] = "SLOW";
    FanSpeed["medium"] = "MEDIUM";
    FanSpeed["fast"] = "FAST";
})(FanSpeed || (FanSpeed = {}));
var DoorStatus;
(function (DoorStatus) {
    DoorStatus["locked"] = "LOCKED";
    DoorStatus["unlocked"] = "UNLOCKED";
})(DoorStatus || (DoorStatus = {}));
var LightColorEnum;
(function (LightColorEnum) {
    LightColorEnum["w"] = "WHITE";
    LightColorEnum["y"] = "YELLOW";
    LightColorEnum["ww"] = "WARMWHITE";
})(LightColorEnum || (LightColorEnum = {}));
class EDevice {
    turnOn() {
        this.status = StatusEnum.on;
    }
    turnOf() {
        this.status = StatusEnum.off;
    }
    update() {
        if (this.needUpdate == false)
            return;
        //do update
        this.needUpdate = false;
    }
    constructor(status, needUpdate) {
        this.needUpdate = needUpdate;
        this.status = status;
    }
}
class Fan extends EDevice {
    constructor(speed, status, needUpdate) {
        super(status, needUpdate);
        this.speed = speed;
    }
    getSpeed() {
        return this.speed;
    }
    setSpeed(newSpeed) {
        this.speed = newSpeed;
    }
}
class camera extends EDevice {
    startRecording() {
        //
        return;
    }
    stopRecording() {
        //
        return;
    }
    saveVideoFile() {
        return "";
    }
    constructor(status, needUpdate) {
        super(status, needUpdate);
    }
}
class DoorLock extends EDevice {
    lockDoor() {
        this.locked = DoorStatus.locked;
    }
    unlockDoor() {
        this.locked = DoorStatus.unlocked;
    }
    constructor(status, needUpdate, locked) {
        super(status, needUpdate);
        this.locked = locked;
    }
}
class Light extends EDevice {
    constructor(status, needUpdate, brightness, color) {
        super(status, needUpdate);
        this.brightness = brightness;
        this.color = color;
    }
    getBrightness() {
        return this.brightness;
    }
    setBrightness(newbrightness) {
        this.brightness = newbrightness;
    }
    setColor(newColor) {
        this.color = newColor;
    }
    getColor() {
        return this.color;
    }
}
let livingRoomFan = new Fan(FanSpeed.slow, StatusEnum.off, false);
console.log(livingRoomFan.getSpeed());
let verandaLight = new Light(StatusEnum.off, false, 50, LightColorEnum.ww);
console.log(verandaLight.setColor(LightColorEnum.y));
console.log("The veranda light's brightness = " + verandaLight.getBrightness() + " and the color is: " + verandaLight.getColor());
