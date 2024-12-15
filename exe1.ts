enum StatusEnum {
    on = "ON",
    off = "OFF"
}

enum FanSpeed {
    slow = "SLOW",
    medium = "MEDIUM",
    fast = "FAST"
}

enum DoorStatus {
    locked = "LOCKED",
    unlocked = "UNLOCKED"
}

enum LightColorEnum {
    w = "WHITE",
    y = "YELLOW",
    ww = "WARMWHITE"
}

interface Device {
    status:StatusEnum;
    needUpdate:boolean;
    turnOn():void,
    turnOf():void,
    update():void 
}

class EDevice implements Device {
    status: StatusEnum;
    needUpdate: boolean;
    turnOn() {
        this.status = StatusEnum.on
    }

    turnOf() {
        this.status = StatusEnum.off
    }

    update() {
        if (this.needUpdate==false)
            return
        //do update
        this.needUpdate = false;
    }

    public constructor(status:StatusEnum,needUpdate:boolean) {
        this.needUpdate = needUpdate;
        this.status = status;
    }
}

class Fan extends EDevice {
    private speed:FanSpeed;

    public constructor(speed:FanSpeed, status:StatusEnum, needUpdate:boolean) {
        super(status, needUpdate)
        this.speed = speed
    }

    public getSpeed():FanSpeed {
        return this.speed;
    }

    public setSpeed(newSpeed:FanSpeed) {
        this.speed = newSpeed;
    }

}

class camera extends EDevice {
    public startRecording() {
        //
        return;
    }
    public stopRecording() {
        //
        return;
    }
    public saveVideoFile():string {
        return "";
    }
    public constructor(status:StatusEnum, needUpdate:boolean) {
        super(status, needUpdate);
    }
}

class DoorLock extends EDevice {
    locked:DoorStatus;
    public lockDoor() {
        this.locked = DoorStatus.locked
    }

    public unlockDoor() {
        this.locked = DoorStatus.unlocked
    }
    public constructor(status:StatusEnum, needUpdate:boolean, locked:DoorStatus) {
        super(status, needUpdate);
        this.locked = locked;
    }
}

class Light extends EDevice {
    private brightness:number;
    private color:LightColorEnum;

    public constructor(status:StatusEnum, needUpdate:boolean, brightness:number, color:LightColorEnum) {
        super(status, needUpdate);
        this.brightness = brightness;
        this.color = color;
    }

    public getBrightness():number {
        return this.brightness;
    }

    public setBrightness(newbrightness:number) {
        this.brightness = newbrightness;
    }

    public setColor(newColor:LightColorEnum) {
        this.color = newColor;
    }

    public getColor():LightColorEnum {
        return this.color;
    }
}

let livingRoomFan:Fan = new Fan(FanSpeed.slow,StatusEnum.off,false);
console.log(livingRoomFan.getSpeed());

let verandaLight:Light = new Light(StatusEnum.off,false,50,LightColorEnum.ww);
console.log(verandaLight.setColor(LightColorEnum.y))
console.log("The veranda light's brightness = " + verandaLight.getBrightness() + " and the color is: " + verandaLight.getColor() );
