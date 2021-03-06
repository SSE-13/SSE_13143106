var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var humanContainer = new render.DisplayObjectContainer();
var human = new render.DisplayObjectContainer();
human.x = -50;
human.y = -65;
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
right_arm.y = 72;
var left_arm = new render.Bitmap();
left_arm.x = 82;
left_arm.y = 65;
head.source = "head.png";
trunk.source = "body.png";
left_leg.source = "left leg.png";
right_leg.source = "right leg.png";
left_arm.source = "left arm.png";
right_arm.source = "right arm.png";
humanContainer.addChild(human);
human.addChild(head);
human.addChild(left_leg);
human.addChild(right_leg);
human.addChild(left_arm);
human.addChild(right_arm);
human.addChild(trunk);
var renderCore = new render.RenderCore();
renderCore.start(humanContainer, ["body.png"]);
renderCore.start(humanContainer, ["head.png"]);
renderCore.start(humanContainer, ["left arm.png"]);
renderCore.start(humanContainer, ["right arm.png"]);
renderCore.start(humanContainer, ["left leg.png"]);
renderCore.start(humanContainer, ["right leg.png"]);
var HumanBody = (function (_super) {
    __extends(HumanBody, _super);
    function HumanBody() {
        _super.apply(this, arguments);
        this.vx = 5;
        this.vrotation = Math.PI / 2;
    }
    HumanBody.prototype.onTicker = function (duringTime) {
        this.x += this.vx * duringTime;
        this.rotation += this.vrotation * duringTime;
    };
    return HumanBody;
}(Body));
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
var headHitTest = function (localPoint, displayObject) {
    //alert (`点击位置为${localPoint.x},${localPoint.y}`);
    console.log(localPoint);
    if (localPoint.x <= Math.abs(displayObject.x * 6) && localPoint.y <= Math.abs(displayObject.y) &&
        localPoint.x > 0 && localPoint.y > 0) {
        isHead += 1;
        ClickedHead = true;
    }
    return ClickedHead;
};
var LegHitTest = function (localPoint, displayObject) {
    // alert (`点击位置为${localPoint.x},${localPoint.y}`);
    console.log(localPoint);
    if (localPoint.x > 0 && localPoint.x <= Math.abs(displayObject.x * 2) && localPoint.y > 0 && localPoint.y < Math.abs(displayObject.y * 2)) {
        isLeg += 1;
        ClickedLeg = true;
    }
    return ClickedLeg;
};
var HeadOnClick = function () {
    if (isHead == 1) {
        if (body.vx != 0) {
            body.vx *= -1;
            body.vrotation *= -1;
        }
        if (body.vx == 0) {
            isHead = 0;
        }
    }
    if (isHead != 1) {
        body.vx = 5;
        body.vrotation = Math.PI / 2;
        isHead = 0;
    }
    ClickedHead = false;
    console.log("clickhead:" + isHead);
};
var LegOnClick = function () {
    if (isLeg == 1) {
        body.vx = 0;
        body.vrotation = 0;
        body.rotation = 0;
    }
    if (isLeg >= 1) {
        isLeg = 0;
    }
    ClickedLeg = false;
    console.log("clickleg:" + isLeg);
};
eventCore.register(head, headHitTest, HeadOnClick);
eventCore.register(left_leg, headHitTest, LegOnClick);
eventCore.register(right_leg, headHitTest, LegOnClick);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxJQUFJLGNBQWMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO0FBQ3pELElBQUksS0FBSyxHQUFDLElBQUksTUFBTSxDQUFDLHNCQUFzQixFQUFFLENBQUM7QUFDOUMsS0FBSyxDQUFDLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQztBQUNaLEtBQUssQ0FBQyxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUM7QUFDWixJQUFJLElBQUksR0FBRyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUMvQixJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUNaLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ1gsSUFBSSxLQUFLLEdBQUcsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDaEMsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDYixLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUNiLElBQUksU0FBUyxHQUFHLElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ3BDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQ2pCLFNBQVMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0FBQ2xCLElBQUksUUFBUSxHQUFHLElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ25DLFFBQVEsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQ2hCLFFBQVEsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0FBQ2pCLElBQUksU0FBUyxHQUFHLElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ3BDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQ2pCLFNBQVMsQ0FBQyxDQUFDLEdBQUUsRUFBRSxDQUFDO0FBQ2hCLElB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QUM7UUFDWixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFFLENBQUMsQ0FBQyxDQUFBLENBQUM7WUFDWCxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2QsSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN6QixDQUFDO1FBQ0QsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQSxDQUFDO1lBQ2IsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNmLENBQUM7SUFDTCxDQUFDO0lBRUQsRUFBRSxDQUFBLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFBLENBQUM7UUFDWixJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNaLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBQyxDQUFDLENBQUM7UUFDM0IsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNmLENBQUM7SUFDRCxXQUFXLEdBQUcsS0FBSyxDQUFDO0lBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxHQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3JDLENBQUMsQ0FBQTtBQUVELElBQUksVUFBVSxHQUFHO0lBRWIsRUFBRSxDQUFBLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFBLENBQUM7UUFDWCxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNaLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFDRCxFQUFFLENBQUEsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUEsQ0FBQztRQUNYLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDZCxDQUFDO0lBQ0QsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRSxLQUFLLENBQUMsQ0FBQztBQUNwQyxDQUFDLENBQUE7QUFFRCxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksRUFBQyxXQUFXLEVBQUMsV0FBVyxDQUFDLENBQUM7QUFDakQsU0FBUyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUMsV0FBVyxFQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ3BELFNBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFDLFdBQVcsRUFBQyxVQUFVLENBQUMsQ0FBQyJ9