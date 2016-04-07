var humanContainer = new render.DisplayObjectContainer();
var human=new render.DisplayObjectContainer();
human.x=-50;
human.y=-65;
var head = new render.Bitmap();
head.x = 30;
head.y = 5;
var trunk = new render.Bitmap();
trunk.x = 55;
trunk.y = 65;
var right_leg = new render.Bitmap();
right_leg.x = 55;
right_leg.y = 175;
var left_leg = new render.Bitmap();
left_leg.x = 70;
left_leg.y = 175;
var right_arm = new render.Bitmap();
right_arm.x = 33;
right_arm.y= 72;
var left_arm = new render.Bitmap();
left_arm.x = 82;
left_arm.y= 65;

head.source = "head.png";
trunk.source = "body.png";
left_leg.source = "left leg.png";
right_leg.source = "right leg.png";
left_arm.source = "left arm.png";
right_arm.source = "right arm.png";

humanContainer.addChild(human);
human.addChild(head)
human.addChild(left_leg)
human.addChild(right_leg)
human.addChild(left_arm)
human.addChild(right_arm)
human.addChild(trunk)

var renderCore = new render.RenderCore();
renderCore.start(humanContainer, ["body.png"]);
renderCore.start(humanContainer, ["head.png"]);
renderCore.start(humanContainer, ["left arm.png"]);
renderCore.start(humanContainer, ["right arm.png"]);
renderCore.start(humanContainer, ["left leg.png"]);
renderCore.start(humanContainer, ["right leg.png"]);

class HumanBody extends Body {
    
    
    vx:number = 5;
    vrotation = Math.PI/2;

    onTicker(duringTime: number) {
        this.x += this.vx*duringTime;
        this.rotation += this.vrotation*duringTime;

    }
}

var ticker = new Ticker();
var body = new HumanBody(humanContainer);
body.vx = 5;
body.y = 200;
ticker.start([body]);


var eventCore = new events.EventCore();
eventCore.init();

var isHead = 0;
var ClickedHead = false;
var isLeg = 0;
var ClickedLeg = false;

var headHitTest = (localPoint:math.Point,displayObject:render.DisplayObject) =>{
    //alert (`点击位置为${localPoint.x},${localPoint.y}`);
    console.log(localPoint);

    if(localPoint.x <= Math.abs(displayObject.x * 6) && localPoint.y <= Math.abs(displayObject.y)&&
    localPoint.x > 0 && localPoint.y > 0){
        isHead += 1;
        ClickedHead = true;
}
    return ClickedHead;
}

var LegHitTest = (localPoint:math.Point,displayObject:render.DisplayObject) =>{
   // alert (`点击位置为${localPoint.x},${localPoint.y}`);
   console.log(localPoint);

   if(localPoint.x > 0 && localPoint.x <=  Math.abs(displayObject.x * 2) && localPoint.y > 0 && localPoint.y < Math.abs(displayObject.y * 2)){
        isLeg += 1;
        ClickedLeg = true;
}
    return ClickedLeg;
}
var HeadOnClick = () => {

    if(isHead == 1){
        if(body.vx!=0){
            body.vx *= -1;
            body.vrotation *= -1;
        }
        if(body.vx == 0){
            isHead = 0;
        }        
    }

    if(isHead != 1){
        body.vx = 5;
        body.vrotation = Math.PI/2;
        isHead = 0;
    }
    ClickedHead = false;
    console.log("clickhead:"+isHead);
}

var LegOnClick = () => {
   
    if(isLeg == 1){
        body.vx = 0;
        body.vrotation = 0;
        body.rotation = 0;
    }
    if(isLeg >= 1){       
        isLeg = 0;
    }
    ClickedLeg = false;
    console.log("clickleg:"+ isLeg);
}

eventCore.register(head,headHitTest,HeadOnClick);
eventCore.register(left_leg,headHitTest,LegOnClick);
eventCore.register(right_leg,headHitTest,LegOnClick);










