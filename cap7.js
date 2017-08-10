var plan = ["############################\n",
            "#      #    #      o      ##\n",
            "#                          #\n",
            "#          #####           #\n",
            "##         #   #    ##     #\n",
            "###           ##     #     #\n",
            "#           ###      #     #\n",
            "#   ####                   #\n",
            "#   ##       o             #\n",
            "# o  #         o       ### #\n",
            "#    #                     #\n",
            "############################\n"];

var world = new World(plan, {"#": Wall,
                             "o": BouncingCritter});
console.log(world.toString());