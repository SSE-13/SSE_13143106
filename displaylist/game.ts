module game {


}

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


    onTicker(duringTime: number) {

         this.x = this.x + this.vx*duringTime;
         this.rotation = this.rotation+Math.PI*duringTime;
    }
}

var ticker = new Ticker();
var body = new HumanBody(humanContainer);
body.vx = 5;
body.y = 200; 
ticker.start([body]);







