var RhythmGame = {
    init: function() {
            var mainCanvas = document.getElementById("renderCanvas");
            var engine = new BABYLON.Engine(mainCanvas, true);

            var createScene = function () {

                // This creates a basic Babylon Scene object (non-mesh)
                var scene = new BABYLON.Scene(engine);
                scene.clearColor = new BABYLON.Color3(0, 0, 0);
                RhythmGame.scene = scene;
                // This creates and positions a free camera (non-mesh)
                var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 15, 0), scene);
                camera.setTarget(BABYLON.Vector3.Zero());

                // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
                var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 15), scene);
                var text2d = new BABYLON.Text2D("A", { fontName: "24pt Arial", marginAlignment: "h: center, v: bottom", fontSuperSample: true });

                // var canvas = new BABYLON.WorldSpaceCanvas2D(scene, new BABYLON.Size(50, 50), {
                //     id: "WorldSpaceCanvas",
                //     worldPosition: new BABYLON.Vector3(0, 0, 0),
                //     enableInteraction: true,
                //     backgroundFill: "#C0C0C040",
                //     backgroundRoundRadius: 20,
                //     children: [
                //         text2d
                //     ]
                // });

                var sphereStill = BABYLON.Mesh.CreateSphere("SphereStill", 7, 2, scene);
                sphereStill.position.y = 1;
                var materialSphereStill = new BABYLON.StandardMaterial("texture1", scene);
                materialSphereStill.diffuseColor = new BABYLON.Color3(0, 0, 0);
                materialSphereStill.specularColor = new BABYLON.Color3(0, 0, 0);
                materialSphereStill.ambientColor = new BABYLON.Color3(0, 0, 0);
                materialSphereStill.emissiveColor = new BABYLON.Color3(1, 0, 0);
                sphereStill.material = materialSphereStill;

                var materialNormalSphere = new BABYLON.StandardMaterial("texture2", scene);
                materialNormalSphere.diffuseColor = new BABYLON.Color3(0, 0, 0);
                materialNormalSphere.specularColor = new BABYLON.Color3(0, 0, 0);
                materialNormalSphere.ambientColor = new BABYLON.Color3(0, 0, 0);
                materialNormalSphere.emissiveColor = new BABYLON.Color3(0.5, 0.8, 0.5);

                var sphere1 = BABYLON.Mesh.CreateSphere("Sphere1", 7, 2, scene);
                var materialSphere = new BABYLON.StandardMaterial("texture2", scene);
                materialSphere.diffuseColor = new BABYLON.Color3(0, 0, 0);
                materialSphere.specularColor = new BABYLON.Color3(0, 0, 0);
                materialSphere.ambientColor = new BABYLON.Color3(0, 0, 0);
                materialSphere.emissiveColor = new BABYLON.Color3(0, 0, 1);
                sphere1.material = materialSphere;

                var sphere2 = BABYLON.Mesh.CreateSphere("Sphere2", 7, 2, scene);
                sphere2.material = materialNormalSphere;

                var sphere3 = BABYLON.Mesh.CreateSphere("Sphere3", 7, 2, scene);
                sphere3.material = materialNormalSphere;

                var sphere4 = BABYLON.Mesh.CreateSphere("Sphere4", 7, 2, scene);
                sphere4.material = materialNormalSphere;

                var animationSphere1 = new BABYLON.Animation("sphereAnimation", "position.x", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT,
                                                                                BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);
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

                animationSphere1.setKeys(keys);
                sphere1.animations.push(animationSphere1);

                var animationSphere2 = new BABYLON.Animation("sphereAnimation", "position.x", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT,
                                                                                BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);
                // Animation keys
                var keys = [];
                keys.push({
                    frame: 0,
                    value: -20
                });

                keys.push({
                    frame: 60,
                    value: 20
                });

                animationSphere2.setKeys(keys);
                sphere2.animations.push(animationSphere2);

                var animationSphere3 = new BABYLON.Animation("sphereAnimation", "position.z", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT,
                                                                                BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);
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

                animationSphere3.setKeys(keys);
                sphere3.animations.push(animationSphere3);

                var animationSphere4 = new BABYLON.Animation("sphereAnimation", "position.z", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT,
                                                                                BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);
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

                animationSphere4.setKeys(keys);
                sphere1.animations.push(animationSphere4);

                BABYLON.SceneLoader.ImportMesh("", "models/", "polygonTunnel.babylon", scene, function(meshes){
                    var tunnelMesh = meshes[0];
                    tunnelMesh.position.x = 0;
                    tunnelMesh.id = "tunnel";
                    var animationTunnel = new BABYLON.Animation("tunnelAnimation", "rotation.y", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT,
                                                                                    BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
                    // Animation keys
                    var keys = [];
                    keys.push({
                        frame: 0,
                        value: 0
                    });

                    keys.push({
                        frame: 193,
                        value: 2
                    });

                    animationTunnel.setKeys(keys);
                    tunnelMesh.animations.push(animationTunnel);
                    scene.beginAnimation(tunnelMesh, 0, 200, true);
                });

                BABYLON.SceneLoader.ImportMesh("", "models/", "star.babylon", scene, function(meshes){
                    var starMesh = meshes[0];
                    starMesh.position.y = 0.4;
                    starMesh.id = "tunnel";
                    var animationTunnel = new BABYLON.Animation("tunnelAnimation", "rotation.y", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT,
                                                                                    BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
                    // Animation keys
                    var keys = [];
                    keys.push({
                        frame: 0,
                        value: 0
                    });

                    keys.push({
                        frame: 196,
                        value: -3.2
                    });

                    animationTunnel.setKeys(keys);
                    starMesh.animations.push(animationTunnel);
                    scene.beginAnimation(starMesh, 0, 200, true);
                });

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
var stillMesh = scene.getMeshByID("SphereStill");
var sphere1 = scene.getMeshByID("Sphere1");
var sphere2 = scene.getMeshByID("Sphere2");
var sphere3 = scene.getMeshByID("Sphere3");
var sphere4 = scene.getMeshByID("Sphere4");
var sphereArray = [sphere1, sphere2, sphere3, sphere4]
var tunnelMesh = scene.getMeshByID("tunnel");

setInterval(function(){
    scene.beginAnimation(sphereArray[Math.floor(Math.random() * (3 - 0 + 1)) + 0], 0, 100, true);
}, 1500);

$('#canvasZone').keypress(function(){
    stillMesh.material.emissiveColor = new BABYLON.Color3(0, 0, 1);
    setTimeout(function(){
        stillMesh.material.emissiveColor = new BABYLON.Color3(1, 0, 0);
    }, 200);
    if(sphere1.intersectsMesh(stillMesh)){
        RhythmGame.updateScore();
    }
});
