// hello
class LivingRoom extends AdventureScene {
    constructor() {
        super("livingRoom", "Living Room");
    }
    preload() {
        this.load.image("Livingroom", "assets/Livingroom.png")
        this.load.image("leftJoycon", "assets/leftJoycon.png")
        this.load.image("rightJoycon", "assets/rightJoycon.png")
        this.load.image("console", "assets/console.png")
        this.load.image("coaster", "assets/coaster.png")
        this.load.image("envelopePerspective", "assets/envelopePerspective.png")


    }


    onEnter() {
//    ****** DEBUG SCENE CHANGE   *****
     // debug command goes here

        this.add.image(0, 0, "Livingroom").setOrigin(0, 0)

        this.envelopeText = this.add.text(this.w * 0.45, this.h * 0.555, "")
            .setFontSize(this.s * 1.2)
            .setDepth(100)
            .setFontStyle("bold")
            .setStroke("#000000", 2.5);

        let envelope = this.add.image(this.w * 0.5, this.h * 0.503, "envelopePerspective")
            .setScale(0.4)
            .setInteractive({ useHandCursor: true });

        envelope.on('pointerover', () => {
            this.envelopeText.setText("unstamped envelope");
        });

        envelope.on('pointerout', () => {
            this.envelopeText.setText("");
        });

        envelope.on('pointerdown', () => {
                let types = this.inventory.map(item => item.type);
                let colorTypes = ["red", "yellow", "blue", "green", "white", "black"];
                let hasAnyColor = types.some(type => colorTypes.includes(type));

                if (!hasAnyColor) {
                this.envelopeText.setText("You need at least one color before stamping.");
                return;
                }

                if (!this.confirmStamp) {
                this.envelopeText.setText("Are you ready to stamp the envelope?");
                this.confirmStamp = true;
                return;
            }

                    this.gotoScene("outro");
            })



                this.addInteractable(this.w * 0.434, this.h * 0.38, "leftJoycon","the left joycon", "left joycon", "blue", 0.4);
                this.addInteractable(this.w * 0.4823, this.h * 0.38, "rightJoycon", "the right joycon text", "right joycon", "red", 0.4);
                this.addInteractable(this.w * 0.458, this.h * 0.394, "console", "switch console", "switch console", "black", 0.4);
                this.addInteractable(this.w * 0.41, this.h * 0.5, "coaster", "a coaster", "coaster", "yellow", 0.25);



        this.add.text(this.w * 0.6, this.h * 0.4, "go to bedroom")
            .setFontSize(this.s * 1.8)
            .setDepth(100)
            .setFontStyle("bold")
            .setStroke("#000000", 5)
            .setInteractive()
            .on('pointerdown', () => {
                this.gotoScene("masterBedroom");
            });

            this.add.text(this.w * 0.05, this.h * 0.67, "go to kitchen")
            .setFontSize(this.s * 1.8)
            .setDepth(100)
            .setFontStyle("bold")
            .setStroke("#000000", 5)

            .setInteractive()
            .on('pointerdown', () => {
                this.gotoScene("kitchen");
            });

            this.add.text(this.w * 0.76, this.h * 0.63, "go to bathroom")
            .setFontSize(this.s * 1.8)
            .setDepth(100)
            .setFontStyle("bold")
            .setStroke("#000000", 5)
            .setInteractive()

            .on('pointerdown', () => {
            this.gotoScene("bathroom");
            });
    }
}

class MasterBedroom extends AdventureScene {
    constructor() {
        super("masterBedroom", "Master Bedroom");
    }

    hasType(type) {
        return this.inventory.some(item => item.type === type);
    }

    preload() {
        this.load.image("Bedroom", "assets/Bedroom.png")
        this.load.image("lipstick", "assets/lipstick.png")
        this.load.image("sock", "assets/sock.png")
        this.load.image("glitter", "assets/glitter.png")
        this.load.image("alarmClock", "assets/alarmClock.png")
    }
    onEnter() {
        
        this.add.image(0, 0, "Bedroom").setOrigin(0, 0)


        this.addInteractable(this.w * 0.43, this.h * 0.85,"sock", "white sock", "white sock", "white", 0.4);
        this.addInteractable(this.w * 0.87, this.h * 0.34, "alarmClock", "alarm clock", "alarm clock", "green", 0.55);
        this.addInteractable(this.w * 0.4, this.h * 0.32, "lipstick", "lipstick", "lipstick", "red", 0.4);
        this.addInteractable(this.w * 0.27, this.h * 0.33,"glitter", "glittery eyeshadow ", "glittery eyeshadow", "sheen", 0.35);

        this.add.text(this.w * 0.06, this.h * 0.76, "return to living room")
            .setFontSize(this.s * 1.8)
            .setDepth(100)
            .setFontStyle("bold")
            .setStroke("#000000", 2.5)
            
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("text that plays when hovering over return");
            })
            .on('pointerdown', () => {
                this.gotoScene("livingRoom");
            });

    }
}

class Bathroom extends AdventureScene {
    constructor() {
        super("bathroom", "Bathroom");
    }

    hasType(type) {
        return this.inventory.some(item => item.type === type);
    }    

    preload() {
        this.load.image("Bathroom", "assets/Bathroom.png")
        this.load.image("soap", "assets/soap.png")
        this.load.image("toothbrush", "assets/toothbrush.png")
        this.load.image("toiletPaper", "assets/tp.png")
        this.load.image("loofa","assets/loofa.png")
        this.load.image("rollBase", "assets/rollBase.png")
        this.load.image("rollTop", "assets/rollTop.png")
    }

    onEnter() {

        this.add.image(0, 0, "Bathroom").setOrigin(0, 0)

        this.add.image(this.w * 0.77, this.h * 0.42, "rollBase")
            .setDepth(1);
        this.add.image(this.w * 0.77, this.h * 0.42, "rollTop")
            .setDepth(3);

        this.addInteractable(this.w * 0.445, this.h * 0.344, "soap", "Bar of Soap", "Soap Bar", "blue", 0.4);
        this.addInteractable(this.w * 0.2, this.h * 0.55, "loofa", "shower loofa", "Loofa", "Green", 0.4);
        this.addInteractable(this.w * 0.767, this.h * 0.425, "toiletPaper", "roll of toilet paper", "Toilet Paper", "white")        
        .setDepth(2);
        
        this.addInteractable(this.w * 0.326, this.h * 0.378, "toothbrush", "a toothbrush", "Toothbrush", "blue", 0.52);

        this.add.text(this.w * 0.68, this.h * 0.8, "return to living room")
            .setFontSize(this.s * 1.8)
            .setDepth(100)
            .setFontStyle("bold")
            .setStroke("#000000", 3)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("text that plays when hovering over return");
            })
            .on('pointerdown', () => {
                this.gotoScene("livingRoom");
            });

    }
}

class Kitchen extends AdventureScene {
    constructor() {
        super("kitchen", "Kitchen");
    }

    hasType(type) {
        return this.inventory.some(item => item.type === type);
    }

    preload() {
        this.load.image("Kitchen", "assets/Kitchen.png")
        this.load.image("tinFoil", "assets/tinFoil.png")
        this.load.image("banana", "assets/banana.png")
        this.load.image("apple", "assets/apple.png")
        this.load.image("avacado", "assets/avacado.png")

    }
    onEnter() {

        this.add.image(0, 0, "Kitchen").setOrigin(0, 0)

        this.addInteractable(this.w * 0.4, this.h * 0.33, "banana", "Banana", "Banana", "yellow", 0.5);
        this.addInteractable(this.w * 0.5, this.h * 0.32, "apple", "Apple", "Apple", "red", 0.4);
        this.addInteractable(this.w * 0.6, this.h * 0.32, "avacado", "Overripe Avacado", "Overripe Avacado", "black", 0.4);
        this.addInteractable(this.w * 0.77, this.h * 0.34, "tinFoil", "some tin foil", "Tin Foil", "sheen", 0.75);

        this.add.text(this.w * 0.03, this.h * 0.8, "return to living room")
            .setFontSize(this.s * 1.8)
            .setFontStyle("bold")
            .setStroke("#000000", 2.5)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("text that plays when hovering over return");
            })
            .on('pointerdown', () => {
                this.gotoScene("livingRoom");
            });

         this.add.text(this.w * 0.8, this.h * 0.85, "go to yard")
            .setFontSize(this.s * 1.8)
            .setFontStyle("bold")
            .setStroke("#000000", 2.5)
         .setInteractive()
         .on('pointerover', () => {
        this.showMessage("text that plays when hovering over yard");
    })
    .on('pointerdown', () => {
        this.gotoScene("backyard");
    });
    }
}


class Backyard extends AdventureScene {
    constructor() {
        super("backyard", "Backyard");
    }

    hasType(type) {
        return this.inventory.some(item => item.type === type);
    }   

    preload() {
        this.load.image("Backyard", "assets/Backyard.png")
        this.load.image("frisbee", "assets/frisbee.png")
        this.load.image("grass", "assets/grass.png")
        this.load.image("gardenia", "assets/gardenia.png")

    }
    onEnter() {

        this.add.image(0, 0, "Backyard").setOrigin(0, 0)
        this.addInteractable(this.w * 0.7, this.h * 0.75, "frisbee", "a frisbee", "Frisbee", "yellow", 0.75);
        this.addInteractable(this.w * 0.35, this.h * 0.5, "grass", "a clump of grass", "Grass Clump", "green");
        this.addInteractable(this.w * 0.22, this.h * 0.75, "gardenia", "a white gardenia", "Gardenia", "white", 0.6);

        this.add.text(this.w * 0.4, this.h * 0.88, "return to kitchen")
            .setFontSize(this.s * 1.8)
            .setFontStyle("bold")
            .setStroke("#000000", 2.5)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("text that plays when hovering over return");
            })
            .on('pointerdown', () => {
                this.gotoScene("kitchen");
            });

    }
}
class Demo2 extends AdventureScene {
    constructor() {
        super("demo2", "The second room has a long name (it truly does).");
    }
    onEnter() {
        this.add.text(this.w * 0.3, this.w * 0.4, "just go back")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("You've got no other choice, really.");
            })
            .on('pointerdown', () => {
                this.gotoScene('demo1');
            });

        let finish = this.add.text(this.w * 0.6, this.w * 0.2, '(finish the game)')
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage('*giggles*');
                this.tweens.add({
                    targets: finish,
                    x: this.s + (this.h - 2 * this.s) * Math.random(),
                    y: this.s + (this.h - 2 * this.s) * Math.random(),
                    ease: 'Sine.inOut',
                    duration: 500
                });
            })
            .on('pointerdown', () => this.gotoScene('outro'));
    }
}

class Intro extends Phaser.Scene {
    constructor() {
        super('intro')
    }

    preload() {
        this.load.image("envelope", "assets/envelopePerspective.png");
        this.load.image("stamp", "assets/stamp.png");
        this.load.audio("stampSound", "assets/stampSound.m4a");
    }

    
    create() {
        // *** DEBUG *** //   

        let envelope = this.add.image(940, 540, "envelope")
            .setScale(2.8);
            
        let stampSound = this.sound.add("stampSound");
        let stamp = this.add.image(960, 250, "stamp");
        this.tweens.add({
            targets: stamp,
            delay: 1000,
            y: 600,
            duration: 460,
            yoyo: true,
            ease: "Sine.inOut",
            
            onStart: () => {
                stampSound.play({
                    volume: 0.4,
                    delay: 0.15
                });
            },
            
            onComplete: () => {

                
                this.tweens.add({
                    targets: stamp,
                    x: stamp.x + 10,
                    duration: 80,
                    yoyo: true,
                    repeat: 3,
                    ease: "Sine.inOut",

                    
                onComplete: () => {
                    this.add.text(50, 50, "You have no ink to stamp this envelope...")
                        .setFontSize(50);

                    this.add.text(50, 100, "Click anywhere to begin collecting ink ingredients.")
                        .setFontSize(20);

                    this.input.once('pointerdown', () => {
                        this.cameras.main.fade(1000, 0, 0, 0);
                        this.time.delayedCall(1000, () => {
                        this.scene.start("livingRoom", { inventory: [] });                          
                        });
                        })
                    }
                });

            }

        
        });


    }
}

class Outro extends Phaser.Scene {
    constructor() {
        super('outro');
    }


    preload() {
        this.load.image("envelopeFlat", "assets/envelopeFlat.png");
        this.load.image("stamp", "assets/stamp.png");
        this.load.image("blackStamp", "assets/blackStamp.png")
        this.load.image("blueStamp", "assets/blueStamp.png")
        this.load.image("brownStamp", "assets/brownStamp.png")
        this.load.image("greenStamp", "assets/greenStamp.png")
        this.load.image("limeStamp", "assets/limeStamp.png")
        this.load.image("orangeStamp", "assets/orangeStamp.png")
        this.load.image("purpleStamp", "assets/purpleStamp.png")
        this.load.image("redStamp", "assets/redStamp.png")
        this.load.image("tealStamp", "assets/tealStamp.png")
        this.load.image("yellowStamp", "assets/yellowStamp.png")

        this.load.image("dull", "assets/dull.png")
        this.load.image("pastel", "assets/pastel.png")
        this.load.image("dark", "assets/dark.png")

        this.load.image("sparkly", "assets/sparkly.png")
        this.load.image("metallic", "assets/metallic.png")

        this.load.audio("stampSound", "assets/stampSound.m4a");


    }

    init(data) {
    this.inventory = data.inventory || [];
    }
    
    create() {


        let envelopeFlat = this.add.image(960, 240, "envelopeFlat")
            .setScale(4.5);

            
        let types = this.inventory.map(item => item.type);

        //sheen flags
        let hasSparkly = this.inventory.some(
            item => item.name === "glittery eyeshadow"
        );

        let hasMetallic = this.inventory.some(
            item => item.name === "Tin Foil"
        );

        //black/white flags
        let hasWhite = types.includes("white");
        let hasBlack = types.includes("black");

        //complementary flag
        let hasComplement = types.includes("red") && types.includes("green");

        //base color math
        const colorValues = {
            red: 1,
            yellow: 3,
            blue: 9,
            green: 12
        };

        let colorCode = 0;

        types.forEach(type => {
            if (colorValues[type] !== undefined) {
                colorCode += colorValues[type];
            }
        });

        // base result
        let resultColor = "unknown";

        if (hasComplement) resultColor = "brown";
        else if (colorCode === 1) resultColor = "red";
        else if (colorCode === 3) resultColor = "yellow";
        else if (colorCode === 9) resultColor = "blue";
        else if (colorCode === 12) resultColor = "green";
        else if (colorCode === 21) resultColor = "teal";
        else if (colorCode === 15) resultColor = "lime";
        else if (colorCode === 4) resultColor = "orange";
        else if (colorCode === 10) resultColor = "purple";

        // special plain black/white cases since they are flags and not numbers
        if (colorCode === 0) {
            if (hasWhite && !hasBlack) resultColor = "white";
            else if (hasBlack && !hasWhite) resultColor = "black";
            else if (hasWhite && hasBlack) resultColor = "gray";
        }

        //modifiers
        let modifier = "";

        if (colorCode !== 0) {
            if (hasWhite && hasBlack) modifier = "dull ";
            else if (hasWhite) modifier = "pastel ";
            else if (hasBlack) modifier = "dark ";
        }

        // sheen
        let sheen = "";

        if (hasSparkly) sheen = "sparkly ";
        else if (hasMetallic) sheen = "metallic ";

        // special case
        let finalName = "";

        // special white cases
        if (hasWhite && !hasBlack) {

            if (resultColor === "red") {
                finalName = sheen + "pink";
            }
            else if (resultColor === "blue") {
                finalName = sheen + "sky blue";
            }
        }

        if (finalName === "") {

    finalName = sheen + modifier + resultColor;
}
        // stamp animation
        let canRestart = false;

        let stamp = this.add.image(960, 100, "stamp")
            .setScale(1.8)
            .setDepth(10);
        let stampSound = this.sound.add("stampSound");

        // display hidden at first
        let titleText = this.add.text(50, 50, "You stamped the color:")
            .setFontSize(50)
            .setVisible(false);

        let resultText = this.add.text(50, 150, finalName)
            .setFontSize(40)
            .setVisible(false);


        let baseKey = resultColor + "Stamp";
        let modifierKey = modifier === "" ? null : modifier.trim();
        let sheenKey = sheen === "" ? null : sheen.trim();


        let baseStamp = this.add.image(960, 645, baseKey)
            .setScale(0.6)
            .setVisible(false);

        let modifierStamp;

        if (modifierKey) {
            modifierStamp = this.add.image(960, 645, modifierKey)
                .setScale(0.6)
                .setVisible(false);
        }

        let sheenStamp;

        if (sheenKey) {
            sheenStamp = this.add.image(960, 645, sheenKey)
                .setScale(0.6)
                .setVisible(false);
        }


        // stamp stamping animation
        this.tweens.add({
            targets: stamp,
            delay: 1000,
            y: 500,
            duration: 460,
            yoyo: true,
            ease: "Sine.inOut",
            
            onStart: () => {
                stampSound.play({
                    volume: 0.4,
                    delay: 0.15
                });
            },

            onComplete: () => {
                stamp.destroy();

                titleText.setVisible(true);
                resultText.setVisible(true);
                baseStamp.setVisible(true);

                if (modifierStamp) {
                    modifierStamp.setVisible(true);
                }

                if (sheenStamp) {
                    sheenStamp.setVisible(true);
                }

                canRestart = true;
            }
        });


        // restart only after animation finishes
        this.input.on('pointerdown', () => {
            if (canRestart) {
                this.scene.start('intro');
            }
        });
    }
}


const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    scene: [Intro, LivingRoom, MasterBedroom, Kitchen, Bathroom, Backyard, Demo2, Outro],
    title: "Adventure Game",
});

