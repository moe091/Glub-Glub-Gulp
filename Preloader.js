
var text = null;
var grd;

Fishy.Preloader = function(game) {
    this.game = game;
    this.preloadBar = null;
    this.titleText = null;
    this.ready = false;
    this.bg;
};

Fishy.Preloader.prototype = {
    
    preload: function() {
        this.game.load.image('starfish', 'gfx/starfish.png');
        
        this.game.load.spritesheet('fishani', 'gfx/fishani.png', 60, 36);
        this.game.load.spritesheet('fish2ani', 'gfx/fish2ani.png', 49, 40);
        this.game.load.spritesheet('piranhaani', 'gfx/piranhaani.png', 64, 39);
        this.game.load.spritesheet('bubbles', 'gfx/bubbles.png', 96, 91);
        
        this.game.load.image('botright', 'gfx/bottomright.png');
        this.game.load.image('botleft', 'gfx/bottomleft.png');
        this.game.load.image('topleft', 'gfx/topleft.png');
        this.game.load.image('topright', 'gfx/topright.png');
        this.game.load.image('starfish', 'gfx/starfish.png');
        this.game.load.image('reef1', 'gfx/bg_reef1.png');
        this.game.load.image('reef2', 'gfx/bg_reef2_.png');
        this.game.load.image('reef3', 'gfx/bg_reef3_.png');
        
        
        this.loadWebFont();
        
        

    },
    
    create: function() {
        this.bg = this.game.add.sprite(0, 0, 'bg');
        this.game.input.onDown.add(this.screenTouch, this);
        
        this.startText = this.game.add.text(this.game.world.centerX, this.game.world.centerY, "Touch Screen To Begin");
        this.startText.anchor.setTo(0.5);
        var startFill = this.startText.context.createLinearGradient(0, 0, 0, this.startText.canvas.height);
        startFill.addColorStop(1, '#6585BB');
        startFill.addColorStop(0, '#DDFFE9');
        this.startText.strokeThickness = 4;
        this.startText.stroke = '#000000';
        this.startText.fill = startFill;
    },
    
    
    update: function() {
        
    },
    
    loadWebFont: function() {
        //  The Google WebFont Loader will look for this object, so create it before loading the script.
        WebFontConfig = {

            //  'active' means all requested fonts have finished loading
            //  We set a 1 second delay before calling 'createText'.
            //  For some reason if we don't the browser cannot render the text the first time it's created.
            active: function() { this.game.time.events.add(Phaser.Timer.SECOND, createText, this); },

            //  The Google Fonts we want to load (specify as many as you like in the array)
            google: {
              families: ['Revalia', 'Passion One']
            }

        };   
    
            
    },
    
    screenTouch: function() {
        this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
        this.game.scale.startFullScreen()
        this.state.start('StartMenu');
    }
};