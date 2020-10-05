/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'Text',
                type: 'text',
                rect: ['14px', '30px','66px','49px','auto', 'auto'],
                text: "до ",
                align: "left",
                font: ['\'Arial Black\', Gadget, sans-serif', 20, "rgba(255,0,0,1.00)", "400", "none", "normal"]
            },
            {
                id: 'l1',
                type: 'image',
                rect: ['-690px', '-3019px','1629px','6249px','auto', 'auto'],
                clip: ['rect(2835.05419921875px 1629px 3467.010498046875px 266.6666564941406px)'],
                fill: ["rgba(0,0,0,0)",im+"l1.svg",'0px','0px'],
                transform: [[],[],[],['0.21','0.21']]
            },
            {
                id: 'l1Copy',
                type: 'image',
                rect: ['-667px', '-3081px','1629px','6249px','auto', 'auto'],
                clip: ['rect(2835.05419921875px 291.8580627441406px 3467.010498046875px -87.61626434326172px)'],
                fill: ["rgba(0,0,0,0)",im+"l1.svg",'0px','0px'],
                transform: [[],[],[],['0.14','0.14']]
            },
            {
                id: 'l2',
                type: 'image',
                rect: ['37px', '-3252px','150px','6810px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"l2.svg",'0px','0px'],
                transform: [[],['90'],[],['0.05','0.03123']]
            },
            {
                id: '_270_2123',
                type: 'image',
                rect: ['150px', '56px','155px','122px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"270_2123.jpg",'0px','0px']
            },
            {
                id: 't4',
                type: 'image',
                rect: ['auto', '-170px','1321px','424px','-736px', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"t4.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: 'Text3',
                type: 'text',
                rect: ['14px', '30px','712px','72px','auto', 'auto'],
                text: "– 30%",
                align: "left",
                font: ['Arial Black, Gadget, sans-serif', 40, "rgba(247,12,12,1.00)", "400", "none", "normal"]
            },
            {
                id: '_270_212',
                type: 'image',
                rect: ['151px', '56px','155px','122px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"270_212.jpg",'0px','0px']
            },
            {
                id: 't1',
                type: 'image',
                rect: ['-759px', '-170px','1321px','424px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"t1.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: '_270_2121',
                type: 'image',
                rect: ['150px', '58px','155px','122px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"270_2121.jpg",'0px','0px']
            },
            {
                id: 't2',
                type: 'image',
                rect: ['-375px', '-170px','1321px','424px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"t2.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: '_270_2122',
                type: 'image',
                rect: ['153px', '56px','139px','119px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"270_2122.jpg",'0px','0px'],
                transform: [[],[],[],['0.8','0.8']]
            },
            {
                id: 't3',
                type: 'image',
                rect: ['-738px', '-170px','1321px','424px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"t3.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: 'l3',
                type: 'image',
                rect: ['-197px', '-1593px','730px','3250px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"l3.svg",'0px','0px'],
                transform: [[],['90'],[],['0.05','0.05']]
            },
            {
                id: 'Text2',
                type: 'text',
                rect: ['-56px', '58px','636px','282px','auto', 'auto'],
                text: "на тротуарну <br>плитку",
                align: "left",
                font: ['Arial Black, Gadget, sans-serif', 26, "rgba(255,0,0,1.00)", "400", "none", "normal"],
                transform: [[],[],[],['0.79483','0.80851']]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${__270_2122}": [
                ["style", "top", '56px'],
                ["transform", "scaleY", '0.8'],
                ["transform", "scaleX", '0.8'],
                ["style", "height", '119px'],
                ["style", "opacity", '0'],
                ["style", "left", '153px'],
                ["style", "width", '139px']
            ],
            "${_l1}": [
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '0.21'],
                ["style", "opacity", '0'],
                ["style", "left", '-690px'],
                ["style", "width", '1629px'],
                ["style", "top", '-3019px'],
                ["transform", "scaleY", '0.21'],
                ["style", "height", '6249px'],
                ["style", "clip", [2835.05419921875,1629,3467.010498046875,266.6666564941406], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_t4}": [
                ["style", "top", '-170px'],
                ["style", "height", '424px'],
                ["style", "right", '-748px'],
                ["style", "left", 'auto'],
                ["style", "width", '1321px']
            ],
            "${_Text3}": [
                ["transform", "rotateZ", '0deg'],
                ["color", "color", 'rgba(247,12,12,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '14px'],
                ["style", "font-size", '40px'],
                ["style", "top", '30px'],
                ["style", "text-align", 'left'],
                ["style", "height", '72px'],
                ["style", "font-family", 'Arial Black, Gadget, sans-serif'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1']
            ],
            "${_l3}": [
                ["style", "top", '-1649px'],
                ["transform", "scaleY", '0.05'],
                ["transform", "rotateZ", '90deg'],
                ["transform", "scaleX", '0.05'],
                ["style", "opacity", '0'],
                ["style", "left", '-197px']
            ],
            "${_Text2}": [
                ["transform", "rotateZ", '0deg'],
                ["color", "color", 'rgba(255,0,0,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '-56px'],
                ["style", "font-size", '26px'],
                ["style", "top", '58px'],
                ["style", "text-align", 'left'],
                ["transform", "scaleX", '0.79483'],
                ["style", "font-family", 'Arial Black, Gadget, sans-serif'],
                ["style", "clip", [0,30,282,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["transform", "scaleY", '0.80851']
            ],
            "${__270_2121}": [
                ["style", "top", '58px'],
                ["transform", "scaleY", '0'],
                ["style", "height", '122px'],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '0'],
                ["style", "left", '150px'],
                ["style", "width", '155px']
            ],
            "${_t3}": [
                ["style", "height", '424px'],
                ["style", "top", '-170px'],
                ["style", "left", '-273px'],
                ["style", "width", '1321px']
            ],
            "${_l1Copy}": [
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '0.14'],
                ["style", "opacity", '0'],
                ["style", "left", '-667px'],
                ["style", "width", '1629px'],
                ["style", "top", '-3081px'],
                ["transform", "scaleY", '0.14'],
                ["style", "height", '6249px'],
                ["style", "clip", [2835.05419921875,291.8580627441406,3467.010498046875,-87.61626434326172], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${__270_2123}": [
                ["style", "top", '56px'],
                ["transform", "scaleY", '0'],
                ["transform", "scaleX", '0'],
                ["style", "height", '122px'],
                ["style", "opacity", '0'],
                ["style", "left", '150px'],
                ["style", "width", '155px']
            ],
            "${__270_212}": [
                ["style", "top", '56px'],
                ["transform", "scaleY", '0'],
                ["transform", "scaleX", '0'],
                ["style", "height", '122px'],
                ["style", "opacity", '0'],
                ["style", "left", '151px'],
                ["style", "width", '155px']
            ],
            "${_l2}": [
                ["style", "top", '-3252px'],
                ["transform", "scaleY", '0.04219'],
                ["transform", "rotateZ", '90deg'],
                ["transform", "scaleX", '0.05'],
                ["style", "opacity", '1'],
                ["style", "left", '78px'],
                ["style", "clip", [7177.77783203125,150,6810,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_t1}": [
                ["style", "height", '424px'],
                ["style", "top", '-170px'],
                ["style", "left", '-273px'],
                ["style", "width", '1321px']
            ],
            "${_Text}": [
                ["style", "top", '30px'],
                ["color", "color", 'rgba(255,0,0,1.00)'],
                ["style", "width", '66px'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '49px'],
                ["style", "opacity", '0'],
                ["style", "left", '14px'],
                ["style", "font-size", '20px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '180px'],
                ["style", "width", '300px']
            ],
            "${_t2}": [
                ["style", "height", '424px'],
                ["style", "top", '-170px'],
                ["style", "left", '-273px'],
                ["style", "width", '1321px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 10250,
            autoPlay: true,
            timeline: [
                { id: "eid158", tween: [ "style", "${_Text2}", "clip", [0,342.21282958984375,81.63142395019531,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,30,282,0]}], position: 2641, duration: 305 },
                { id: "eid259", tween: [ "style", "${_Text2}", "clip", [0,636,282,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,342.21282958984375,81.63142395019531,0]}], position: 2946, duration: 287 },
                { id: "eid78", tween: [ "style", "${_t1}", "left", '-441px', { fromValue: '-273px'}], position: 3888, duration: 468 },
                { id: "eid125", tween: [ "transform", "${__270_212}", "scaleY", '1', { fromValue: '0'}], position: 4121, duration: 383 },
                { id: "eid231", tween: [ "style", "${_t4}", "right", '-580px', { fromValue: '-748px'}], position: 2438, duration: 435, easing: "easeOutQuad" },
                { id: "eid156", tween: [ "style", "${_Text2}", "opacity", '1', { fromValue: '0'}], position: 2642, duration: 591 },
                { id: "eid88", tween: [ "style", "${_t3}", "left", '-441px', { fromValue: '-273px'}], position: 7750, duration: 464, easing: "easeOutQuad" },
                { id: "eid51", tween: [ "style", "${__270_2121}", "opacity", '1', { fromValue: '0'}], position: 5583, duration: 917 },
                { id: "eid140", tween: [ "style", "${__270_2121}", "opacity", '0', { fromValue: '1'}], position: 7250, duration: 917 },
                { id: "eid132", tween: [ "style", "${__270_212}", "opacity", '1', { fromValue: '0'}], position: 3888, duration: 1052 },
                { id: "eid128", tween: [ "style", "${__270_212}", "opacity", '0', { fromValue: '1'}], position: 5354, duration: 917 },
                { id: "eid85", tween: [ "style", "${_t2}", "left", '-441px', { fromValue: '-273px'}], position: 5583, duration: 455, easing: "easeOutQuad" },
                { id: "eid167", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0'}], position: 2873, duration: 541 },
                { id: "eid121", tween: [ "transform", "${__270_2123}", "scaleY", '1', { fromValue: '0'}], position: 2599, duration: 446, easing: "easeOutQuad" },
                { id: "eid138", tween: [ "transform", "${__270_2121}", "scaleX", '1', { fromValue: '0'}], position: 5888, duration: 287 },
                { id: "eid41", tween: [ "style", "${_l2}", "opacity", '0', { fromValue: '1'}], position: 2250, duration: 458 },
                { id: "eid257", tween: [ "style", "${_l1Copy}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 645 },
                { id: "eid258", tween: [ "style", "${_l1Copy}", "opacity", '0', { fromValue: '1'}], position: 2141, duration: 458 },
                { id: "eid53", tween: [ "style", "${__270_2123}", "opacity", '1', { fromValue: '0'}], position: 2250, duration: 796 },
                { id: "eid130", tween: [ "style", "${__270_2123}", "opacity", '0', { fromValue: '1'}], position: 3583, duration: 1356 },
                { id: "eid126", tween: [ "transform", "${__270_212}", "scaleX", '1', { fromValue: '0'}], position: 4121, duration: 383 },
                { id: "eid120", tween: [ "transform", "${__270_2123}", "scaleX", '1', { fromValue: '0'}], position: 2599, duration: 446, easing: "easeOutQuad" },
                { id: "eid163", tween: [ "style", "${_l1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
                { id: "eid40", tween: [ "style", "${_l1}", "opacity", '0', { fromValue: '1'}], position: 2141, duration: 458 },
                { id: "eid2", tween: [ "style", "${_l2}", "clip", [0,150,6810,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [7177.77783203125,150,6810,0]}], position: 0, duration: 500 },
                { id: "eid238", tween: [ "style", "${_l3}", "opacity", '1', { fromValue: '0'}], position: 672, duration: 250 },
                { id: "eid240", tween: [ "style", "${_l3}", "opacity", '0', { fromValue: '1'}], position: 2063, duration: 297 },
                { id: "eid233", tween: [ "style", "${_l3}", "top", '-1582px', { fromValue: '-1649px'}], position: 250, duration: 500 },
                { id: "eid237", tween: [ "style", "${_l3}", "top", '-1653px', { fromValue: '-1582px'}], position: 2141, duration: 500 },
                { id: "eid52", tween: [ "style", "${__270_2122}", "opacity", '1', { fromValue: '0'}], position: 7750, duration: 897 },
                { id: "eid137", tween: [ "transform", "${__270_2121}", "scaleY", '1', { fromValue: '0'}], position: 5888, duration: 287 },
                { id: "eid155", tween: [ "style", "${_Text3}", "opacity", '1', { fromValue: '0'}], position: 2823, duration: 591 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-1700398");
