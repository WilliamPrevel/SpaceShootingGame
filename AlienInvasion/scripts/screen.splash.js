alien.screens["splash-screen"] = (function() {
    var firstRun = true;

    function setup() {
        alien.dom.bind("#splash-screen", "click", function() {
            alien.showScreen("main-menu");
        });
    }

    function run() {
        if (firstRun) {
            setup();
            firstRun = false;
        }
    }

    return {
        run : run
    };
})();
