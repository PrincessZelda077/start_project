cc.Class({
    extends: cc.Component,

    properties: {
        // When the distance between the star and main character is less than this value, collection of the point will be completed
        pickRadius: 0
    },

    // use this for initialization
    onLoad: function () {

    },
	
    getPlayerDistance: function () {
        // judge the distance according to the position of the player node
        var playerPos = this.game.player.getPosition();
        // calculate the distance between two nodes according to their positions
        var dist = cc.pDistance(this.node.position, playerPos);
        return dist;
    },

    onPicked: function() {
        this.game.spawnNewStar();
        // invoke the scoring method of the Game script
        this.game.gainScore();
        // then destroy the current star's node
        this.node.destroy();
    },
	
    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
        // judge if the distance between the star and main character is shorter than the collecting distance for each frame
        if (this.getPlayerDistance() < this.pickRadius) {
            // invoke collecting behavior
            this.onPicked();
            return;
        }
    },
});
