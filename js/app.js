var RhythmGame = {
    init: function() {
            var mainCanvas = document.getElementById("renderCanvas");
            var engine = new BABYLON.Engine(mainCanvas, true);

            var createScene = function () {

                // This creates a basic Babylon Scene object (non-mesh)
                var scene = new BABYLON.Scene(engine);
                RhythmGame.scene = scene;
                // This creates and positions a free camera (non-mesh)
                var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 0, -15), scene);
                camera.setTarget(BABYLON.Vector3.Zero());

                // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
                var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);
                var text2d = new BABYLON.Text2D("A", { fontName: "24pt Arial", marginAlignment: "h: center, v: bottom", fontSuperSample: true });

                // var canvas = new BABYLON.WorldSpaceCanvas2D(scene, new BABYLON.Size(150, 150), {
                //     id: "WorldSpaceCanvas",
                //     worldPosition: new BABYLON.Vector3(0, 0, 0),
                //     enableInteraction: true,
                //     backgroundFill: "#C0C0C040",
                //     backgroundRoundRadius: 20,
                //     children: [
                //         text2d
                //     ]
                // });

                var box1 = BABYLON.Mesh.CreateBox("Box1", 2.0, scene);
                var materialBox = new BABYLON.StandardMaterial("texture1", scene);
                materialBox.diffuseColor = new BABYLON.Color3(0, 1, 0);//Green
                box1.material = materialBox;

                var box2 = BABYLON.Mesh.CreateBox("Box2", 2.0, scene);
                var materialBox = new BABYLON.StandardMaterial("texture1", scene);
                materialBox.diffuseColor = new BABYLON.Color3(1, 0, 0);//Green
                box2.material = materialBox;
                box2.position.x = -5;

                var animationBox = new BABYLON.Animation("boxAnimation", "position.x", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT,
                                                                                BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
                // Animation keys
                var keys = [];
                keys.push({
                    frame: 0,
                    value: 20
                });

                keys.push({
                    frame: 60,
                    value: -20
                });

                animationBox.setKeys(keys);
                box1.animations.push(animationBox);
                scene.beginAnimation(box1, 0, 100, true);

                BABYLON.SceneLoader.ImportMesh("", "models/", "untitled.babylon", scene);

                return scene;

            };

            var scene = createScene();

            engine.runRenderLoop(function () {
                scene.render();
            });

            // Resize
            window.addEventListener("resize", function () {
                engine.resize();
            });
        },
    scene: null,
    score: 0,
    updateScore: function() {
        this.score += 100;
        $('#score').text(this.score)
    }
}

RhythmGame.init()
var scene = RhythmGame.scene;
var movingMesh = scene.getMeshByID("Box1");
var stillMesh = scene.getMeshByID("Box2");
$('#canvasZone').keypress(function(){
    if(movingMesh.intersectsMesh(stillMesh)){
        RhythmGame.updateScore();
    }
});
