$("col-md-4").click(function(){
    $("col-md-4").hide(1000);
  });

  $(document).ready(function(){
    $(".product").click(function(){
      // $("#design-image").slideDown('1500').hide('1000');
      $("#product-text").toggle('1500');
      $("#product-image").toggle('1500');
      // $("#design").slideUp('1500');
      // $("#design-image").slideDown('1500');
    });
  });

  $(document).ready(function(){
    $(".development").click(function(){
      // $("#design-image").slideDown('1500').hide('1000');
      $("#development-text").toggle('1500');
      $("#development-image").toggle('1500');
      // $("#design").slideUp('1500');
      // $("#design-image").slideDown('1500');
    });
  });

  $(document).ready(function(){
    $(".design").click(function(){
      // $("#design-image").slideDown('1500').hide('1000');
      $("#design-text").toggle('1500');
      $("#design-image").toggle('1500');
      // $("#design").slideUp('1500');
      // $("#design-image").slideDown('1500');
    });
  });


  $(document).ready(function(){
    $("#work1").mouseover(function(){
      $("#overlay1").show();
    }).mouseout(function(){
      $("#overlay1").hide();
    });
  });
  $(document).ready(function(){
    $("#work2").mouseover(function(){
      $("#overlay2").show();
    }).mouseout(function(){
      $("#overlay2").hide();
    });
  });
  $(document).ready(function(){
    $("#work3").mouseover(function(){
      $("#overlay3").show();
    }).mouseout(function(){
      $("#overlay3").hide();
    });
  });
  $(document).ready(function(){
    $("#work4").mouseover(function(){
      $("#overlay4").show();
    }).mouseout(function(){
      $("#overlay4").hide();
    });
  });
  
  $(document).ready(function(){
    $("#work5").mouseover(function(){
      $("#overlay5").show();
    }).mouseout(function(){
      $("#overlay5").hide();
    });
    $("#work6").mouseover(function(){
      $("#overlay6").show();
    }).mouseout(function(){
      $("#overlay6").hide();
    });
    $("#work7").mouseover(function(){
      $("#overlay7").show();
    }).mouseout(function(){
      $("#overlay7").hide();
    });
    $("#work8").mouseover(function(){
      $("#overlay8").show();
    }).mouseout(function(){
      $("#overlay8").hide();
    });
  });