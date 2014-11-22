

    (function() {
      var test = $(".testing");

      // store the slider in a local variable
      var $window = $(window),
          flexslider;

      // tiny helper function to add breakpoints
      function getGridSize() {
        return 3;
      }

      $(function() {
        SyntaxHighlighter.all();
      });

      function sliderLoad(){
        $('.flexslider').flexslider({
          animation: "slide",
          animationSpeed: 1200,
          animationLoop: false,
          itemWidth: 306,
          itemMargin: 5,
          controlNav: false,
          move: 1,
          minItems: getGridSize(), // use function to pull in initial value
          maxItems: getGridSize(), // use function to pull in initial value
          start: function(slider){
            $('body').removeClass('loading');
            flexslider = slider;
          }
        });
      }

      $window.load(function() {
        sliderLoad();
      });

      // check grid size on resize event
      $window.resize(function() {
        var gridSize = getGridSize();

        flexslider.vars.minItems = gridSize;
        flexslider.vars.maxItems = gridSize;
      });
    }());

  