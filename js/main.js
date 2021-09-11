$(document).ready(function () {
  /* $(".skill-bar").each(function () {
    var $this = $(this);
    var per = $this.attr("per");
    $this.css("width", per+"%");
        $({animatedValue: 0}).animate({animatedValue: per},{
            duration: 2000,
            step: function(){
                $this.attr("per",Math.floor(this.animatedValue) + "%");
            },
            complete:function(){
                $this.attr("per",Math.floor(this.animatedValue) + "%");
            }
        });
    });
/*
    window.onscroll = function() {scrollFunction()};
    Function scrollFunction(){
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
            document.getElementById("").style.fontSize = "30px";
        }else{
            document.getElementById("").style.fontSize = "90px";
        }
    }*/
  let target = document.querySelector("#section-skills");

  let targetPosition = target.getBoundingClientRect();

  var getStarted = setInterval(loading, 1);

  function loading() {
    if (targetPosition.Top < 50) {
      $(".skill-bar").each(function () {
        var $this = $(this);
        var per = $this.attr("per");
        $this.css("width", per + "%");
        $({ animatedValue: 0 }).animate(
          { animatedValue: per },
          {
            duration: 2000,
            step: function () {
              $this.attr("per", Math.floor(this.animatedValue) + "%");
            },
            complete: function () {
              $this.attr("per", Math.floor(this.animatedValue) + "%");
            },
          }
        );
      });
    }
  }

});
