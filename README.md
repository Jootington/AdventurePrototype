A simple adventure game by {Jayla} based on a simple adventure game engine by [Adam Smith](https://github.com/rndmcnlly).

Code requirements:
- **4+ scenes based on `AdventureScene`**: unsatisfied (name at least 4 of the classes).
        LivingRoom
        MasterBedroom
        Bathroom
        Kitchen
        Backyard
- **2+ scenes *not* based on `AdventureScene`**: unsatisfied (name the classes).
        (I did not make these two scenes, but I feel I added enough to warrant them counting for this section of the rubric)
        Intro
        Outro
- **2+ methods or other enhancement added to the adventure game engine to simplify my scenes**:
        Enhancement 1: `addInteractable`
            Creates reusable interactive objects that following the logic below
            Creates the image
            Makes it 'interactive'
            Displays hover text
            Creates take/leave options
            Adds items to inventory
            Prevents pick up of item if an item of the same type is in inventory already
            Returns the created item for additional changes (if they are needed)
        - Enhancement 2: `hasType` (name the method and explain the use of it).
            Checks whether the inventory already contains an item of a given type (type being a color/sheen)
            Enforces the gameplay rule that only one item of each color/sheen type can be collected (no pick up if you got one already)

Experience requirements:
- **4+ locations in the game world**: unsatisfied (name at least 4 of the classes).
    Living Room
    Bedroom
    Bathroom
    Kitchen
    Backyard
- **2+ interactive objects in most scenes**: unsatisfied (describe two examples)
    The unstamped envelope on the living room coffee table, interacted with to finalize stamp color based off of inventory contents
    The yellow coaster on the same coffe table, can be picked up and used as an ink ingredient 
- **Many objects have `pointerover` messages**: unsatisfied (describe two examples)
    all pick-up-able items have pointerover messages (hover text thats describes the item)
- **Many objects have `pointerdown` effects**: unsatisfied (describe two examples)
    all pick-up-able items have pointer messages (prompt to pick up or leave the item)

- **Some objects are themselves animated**: unsatisfied (describe two examples)
    The intro stamp attempts to stamp the envelope, fails, and does a little shake to show 'frustration'
    The outro stamp yoyos unto the envelope to stamp it, which then displays the final stamp outcome afterwards

Asset sources:
- (For each image/audio/video asset used, describe how it was created. What tool did you use to create it? Was it based on another work? If so, how did you change it, and where can we learn more about the original work for comparison? Use [Markdown link syntax](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#links).)

    Images
    All images were made in Krita, if no source material is listed then I just drew the asset in Krita by myself

    Stamps sheens

        sparkly.png - I used this transparent background overlay to make a mask for the stamps by copying and layering it to fit the shape and making some parts transparent so it ‘sparkled’
        https://pikwizard.com/png/sparkly-glitter-overlay-on-transparent-background-for-design-use/1c7085582b45994d5b2dd783f944356e/

        metallic.png I used this image of “Shiny metal background” from kjpargeter to make an alpha/transparent overlay png
        https://www.magnific.com/free-vector/shiny-metal-background_1292176.htm#fromView=keyword&page=1&position=34&uuid=b63d7ea8-0451-461a-95c6-8618ec0cd37f&query=Metallic+overlay

    Pickupable items

        frisbee.png - drawn over, traced and modified from Franklin Sports
        https://franklinsports.com/flying-disc-175-grams

        loofa.png - drawn over, traced and modified from Walmart
        https://www.walmart.com/ip/Livhil-4pcs-Shower-Loofah-Sponge-Exfoliating-Body-Scrubber-Bath-Sponge-for-Women-and-Men-Loofa-Shower-Sponge/16989820461?classType=VARIANT&from=%2Fsearch

        gardenia.png - drawn over and traced from The Garden Bench
        https://thegardenbench.wordpress.com/2016/06/11/gardenia-is-worth-pampering/

        toothbrush.png - drawn over, traced and modified from Speciality Appliances
        https://specialtyappliances.com/product/specialty-products-single-head-toothbrush-v-trim-144-pk/

    Audio
    stampSound.m4a is just the sound of me hitting my desk


Code sources:
- `adventure.js` and `index.html` were created for this project [Adam Smith](https://github.com/rndmcnlly) and edited by me.
- `game.js` was sketched by [Adam Smith](https://github.com/rndmcnlly) and rewritten by me.