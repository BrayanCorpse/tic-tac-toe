$(document).ready(function(){

                
    function trunc (x, posiciones = 0) {
    var s = x.toString()
    var l = s.length
    var decimalLength = s.indexOf('.') + 1
    var numStr = s.substr(0, decimalLength + posiciones)
    return Number(numStr)

   
   
    var jugador;

    
    var x;
    var y;

    // fila 1
    var th1;
    var th2;
    var th3;

    // fila 2
    var th4;
    var th5;
    var th6;

    // fila 3
    var th7;
    var th8;
    var th9;

    // col 1
    var c1;
    var c4;
    var c7;

    // col 2
    var c2;
    var c5;
    var c8;

    // col 3
    var c3;
    var c6;
    var c9;

    // cross 1
    var cr1;
    var cr5;
    var cr9;

    // cross 2
    var cr3;
    // var cr5;
    var cr7;





    }

    $("#start").click(function() {
      jugador = 1;
      console.log(jugador);
      $("#start").attr("disabled","disabled");
      });


    $("#prox").click(function(){
      empate();
  });

      //  setTimeout(
      function proximo() { 

          
          console.clear();
          jugador = 1;
          console.log(jugador);

          $('.btn-outline-danger').addClass('btn-a');
          $('.btn-outline-danger').attr('src','img/azul4.png');
          $('.btn-outline-danger').attr('disabled',false);
          $('.btn-outline-danger').removeClass('btn-outline-danger');

          $('.btn-outline-light').addClass('btn-a');
          $('.btn-outline-light').attr('src','img/azul4.png');
          $('.btn-outline-light').attr('disabled',false);
          $('.btn-outline-light').removeClass('btn-outline-light');

      };

       function proximo() { 

          
          console.clear();
          jugador = 1;
          console.log(jugador);

          $('.btn-outline-danger').addClass('btn-a');
          $('.btn-outline-danger').attr('src','img/azul4.png');
          $('.btn-outline-danger').attr('disabled',false);
          $('.btn-outline-danger').removeClass('btn-outline-danger');

          $('.btn-outline-light').addClass('btn-a');
          $('.btn-outline-light').attr('src','img/azul4.png');
          $('.btn-outline-light').attr('disabled',false);
          $('.btn-outline-light').removeClass('btn-outline-light');

          

      };
      //  , 3000);

      function empate() { 
          
          console.clear();
          jugador = 1;
          console.log(jugador);

          $('.btn-outline-danger').addClass('btn-a');
          $('.btn-outline-danger').attr('src','img/azul4.png');
          $('.btn-outline-danger').attr('disabled',false);
          $('.btn-outline-danger').removeClass('btn-outline-danger');

          $('.btn-outline-light').addClass('btn-a');
          $('.btn-outline-light').attr('src','img/azul4.png');
          $('.btn-outline-light').attr('disabled',false);
          $('.btn-outline-light').removeClass('btn-outline-light');

          document.getElementById("mensaje").innerHTML = '<div class="alert alert-warning alert-dismissible fade show" role="alert">Nobody <strong>Win!</strong><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';

          };



      $("#b1").click(function() {

        if(jugador == 1)
        {
          $("#b1").attr('src','img/x.png');
          $("#b1").addClass('btn-outline-danger');
          $("#b1").attr('disabled','disabled');
          jugador = 2;
          console.log(jugador);
          fila1();
          col1();
          cross1();
        }
        else
        {
          $("#b1").attr('src','img/o.png');
          $("#b1").addClass('btn-outline-light');
          $("#b1").attr('disabled','disabled');
          jugador = 1;
          console.log(jugador);
          fila1();
          col1();
          cross1();
        }

      });

      $("#b2").click(function() {
        
        if(jugador == 1)
        {
          $("#b2").attr('src','img/x.png');
          $("#b2").addClass('btn-outline-danger');
          $("#b2").attr('disabled','disabled');
          jugador = 2;
          console.log(jugador);
          fila1();
          col2();
        }
        else
        {
          $("#b2").attr('src','img/o.png');
          $("#b2").addClass('btn-outline-light');
          $("#b2").attr('disabled','disabled');
          jugador = 1;
          console.log(jugador);
          fila1();
          col2();
        }

      });

      $("#b3").click(function() {
        
        if(jugador == 1)
        {
          $("#b3").attr('src','img/x.png');
          $("#b3").addClass('btn-outline-danger');
          $("#b3").attr('disabled','disabled');
          jugador = 2;
          console.log(jugador);
          fila1();
          col3();
          cross2();
        }
        else
        {
          $("#b3").attr('src','img/o.png');
          $("#b3").addClass('btn-outline-light');
          $("#b3").attr('disabled','disabled');
          jugador = 1;
          console.log(jugador);
          fila1();  
          col3(); 
          cross2();
        }

      });

      $("#b4").click(function() {
        
        if(jugador == 1)
        {
          $("#b4").attr('src','img/x.png');
          $("#b4").addClass('btn-outline-danger');
          $("#b4").attr('disabled','disabled');
          jugador = 2;
          console.log(jugador);
          fila2();
          col1();
        }
        else
        {
          $("#b4").attr('src','img/o.png');
          $("#b4").addClass('btn-outline-light');
          $("#b4").attr('disabled','disabled');
          jugador = 1;
          console.log(jugador);
          fila2();
          col1();
        }

      });

      $("#b5").click(function() {
        
        if(jugador == 1)
        {
          $("#b5").attr('src','img/x.png');
          $("#b5").addClass('btn-outline-danger');
          $("#b5").attr('disabled','disabled');
          jugador = 2;
          console.log(jugador);
          fila2();
          col2();
          cross1();
          cross2();
        }
        else
        {
          $("#b5").attr('src','img/o.png');
          $("#b5").addClass('btn-outline-light');
          $("#b5").attr('disabled','disabled');
          jugador = 1;
          console.log(jugador);
          fila2();
          col2();
          cross1();
          cross2();
        }

      });

      $("#b6").click(function() {
        
        if(jugador == 1)
        {
          $("#b6").attr('src','img/x.png');
          $("#b6").addClass('btn-outline-danger');
          $("#b6").attr('disabled','disabled');
          jugador = 2;
          console.log(jugador);
          fila2();
          col3();
        }
        else
        {
          $("#b6").attr('src','img/o.png');
          $("#b6").addClass('btn-outline-light');
          $("#b6").attr('disabled','disabled');
          jugador = 1;
          console.log(jugador);
          fila2();
          col3();
        }

      });

      $("#b7").click(function() {
        
        if(jugador == 1)
        {
          $("#b7").attr('src','img/x.png');
          $("#b7").addClass('btn-outline-danger');
          $("#b7").attr('disabled','disabled');
          jugador = 2;
          console.log(jugador);
          fila3();
          col1();
          cross2();
        }
        else
        {
          $("#b7").attr('src','img/o.png');
          $("#b7").addClass('btn-outline-light');
          $("#b7").attr('disabled','disabled');
          jugador = 1;
          console.log(jugador);
          fila3();
          col1();
          cross2();
        }

      });

      $("#b8").click(function() {
        
        if(jugador == 1)
        {
          $("#b8").attr('src','img/x.png');
          $("#b8").addClass('btn-outline-danger');
          $("#b8").attr('disabled','disabled');
          jugador = 2;
          console.log(jugador);
          fila3();
          col2();
        }
        else
        {
          $("#b8").attr('src','img/o.png');
          $("#b8").addClass('btn-outline-light');
          $("#b8").attr('disabled','disabled');
          jugador = 1;
          console.log(jugador);
          fila3();
          col2();
        }

      });

      $("#b9").click(function() {
        
        if(jugador == 1)
        {
          $("#b9").attr('src','img/x.png');
          $("#b9").addClass('btn-outline-danger');
          $("#b9").attr('disabled','disabled');
          jugador = 2;
          console.log(jugador);
          fila3();
          col3();
          cross1();
        }
        else
        {
          $("#b9").attr('src','img/o.png');
          $("#b9").addClass('btn-outline-light');
          $("#b9").attr('disabled','disabled');
          jugador = 1;
          console.log(jugador);
          fila3();
          col3();
          cross1();
        }

      });


      function fila1(){

        var score1;
        score1 = parseInt($('#scorej1').val());

        var score2;
        score2 = parseInt($('#scorej2').val());

        
        if($("#b1").hasClass('btn-outline-danger') 
        && $("#b2").hasClass('btn-outline-danger') 
        && $("#b3").hasClass('btn-outline-danger'))
        {
          score1 = score1 +1;
          $("#scorej1").val(score1);
          jugador = 1;
          document.getElementById("mensaje").innerHTML = '<div class="alert alert-warning alert-dismissible fade show" role="alert">Player One <strong>Win!</strong><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';
          proximo();
          win();
          
        }

       else if($("#b1").hasClass('btn-outline-light') 
        && $("#b2").hasClass('btn-outline-light') 
        && $("#b3").hasClass('btn-outline-light'))
        {
          score2 = score2 + 1;
          $("#scorej2").val(score2);
          jugador = 1;
          document.getElementById("mensaje").innerHTML = '<div class="alert alert-warning alert-dismissible fade show" role="alert">Player Two <strong>Win!</strong><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';
          proximo();
          win();
        }

      }

      function fila2(){
      
        var score1;
        score1 = parseInt($('#scorej1').val());

        var score2;
        score2 = parseInt($('#scorej2').val());

      
      if($("#b4").hasClass('btn-outline-danger') 
      && $("#b5").hasClass('btn-outline-danger') 
      && $("#b6").hasClass('btn-outline-danger'))
      {
        score1 = score1 +1;
          $("#scorej1").val(score1);
          jugador = 1;
          document.getElementById("mensaje").innerHTML = '<div class="alert alert-warning alert-dismissible fade show" role="alert">Player One <strong>Win!</strong><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';
          proximo();
          win();
      }
      else if($("#b4").hasClass('btn-outline-light') 
      && $("#b5").hasClass('btn-outline-light') 
      && $("#b6").hasClass('btn-outline-light'))
      {
        score2 = score2 + 1;
          $("#scorej2").val(score2);
          jugador = 1;
          document.getElementById("mensaje").innerHTML = '<div class="alert alert-warning alert-dismissible fade show" role="alert">Player Two <strong>Win!</strong><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';
          proximo();
          win();
      }

    }

    function fila3(){
      
      var score1;
        score1 = parseInt($('#scorej1').val());

        var score2;
        score2 = parseInt($('#scorej2').val());

      
      if($("#b7").hasClass('btn-outline-danger') 
      && $("#b8").hasClass('btn-outline-danger') 
      && $("#b9").hasClass('btn-outline-danger'))
      {
        score1 = score1 +1;
          $("#scorej1").val(score1);
          jugador = 1;
          document.getElementById("mensaje").innerHTML = '<div class="alert alert-warning alert-dismissible fade show" role="alert">Player One <strong>Win!</strong><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';
          proximo();
          win();

      }
      else if($("#b7").hasClass('btn-outline-light') 
      && $("#b8").hasClass('btn-outline-light') 
      && $("#b9").hasClass('btn-outline-light'))
      {
        score2 = score2 + 1;
          $("#scorej2").val(score2);
          jugador = 1;
          document.getElementById("mensaje").innerHTML = '<div class="alert alert-warning alert-dismissible fade show" role="alert">Player Two <strong>Win!</strong><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';
          proximo();
          win();
      }

    }

    function col1(){
      
      var score1;
        score1 = parseInt($('#scorej1').val());

        var score2;
        score2 = parseInt($('#scorej2').val());
      
      if($("#b1").hasClass('btn-outline-danger') 
      && $("#b4").hasClass('btn-outline-danger') 
      && $("#b7").hasClass('btn-outline-danger'))
      {
        score1 = score1 +1;
          $("#scorej1").val(score1);
          jugador = 1;
          document.getElementById("mensaje").innerHTML = '<div class="alert alert-warning alert-dismissible fade show" role="alert">Player One <strong>Win!</strong><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';
          proximo();
          win();
      }
      else if($("#b1").hasClass('btn-outline-light') 
      && $("#b4").hasClass('btn-outline-light') 
      && $("#b7").hasClass('btn-outline-light'))
      {
        score2 = score2 + 1;
          $("#scorej2").val(score2);
          jugador = 1;
          document.getElementById("mensaje").innerHTML = '<div class="alert alert-warning alert-dismissible fade show" role="alert">Player Two <strong>Win!</strong><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';
          proximo();
          win();
      }

    }

    function col2(){
      
      var score1;
        score1 = parseInt($('#scorej1').val());

        var score2;
        score2 = parseInt($('#scorej2').val());
      
      if($("#b2").hasClass('btn-outline-danger') 
      && $("#b5").hasClass('btn-outline-danger') 
      && $("#b8").hasClass('btn-outline-danger'))
      {
        score1 = score1 +1;
          $("#scorej1").val(score1);
          jugador = 1;
          document.getElementById("mensaje").innerHTML = '<div class="alert alert-warning alert-dismissible fade show" role="alert">Player One <strong>Win!</strong><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';
          proximo();
          win();
      }
      else if($("#b2").hasClass('btn-outline-light') 
      && $("#b5").hasClass('btn-outline-light') 
      && $("#b8").hasClass('btn-outline-light'))
      {
        score2 = score2 + 1;
          $("#scorej2").val(score2);
          jugador = 1;
          document.getElementById("mensaje").innerHTML = '<div class="alert alert-warning alert-dismissible fade show" role="alert">Player Two <strong>Win!</strong><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';
          proximo();
          win();
      }

    }

    function col3(){
      
      var score1;
        score1 = parseInt($('#scorej1').val());

        var score2;
        score2 = parseInt($('#scorej2').val());

      if($("#b3").hasClass('btn-outline-danger') 
      && $("#b6").hasClass('btn-outline-danger') 
      && $("#b9").hasClass('btn-outline-danger'))
      {
        score1 = score1 +1;
          $("#scorej1").val(score1);
          jugador = 1;
          document.getElementById("mensaje").innerHTML = '<div class="alert alert-warning alert-dismissible fade show" role="alert">Player One <strong>Win!</strong><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';
          proximo();
          win();
      }
      else if($("#b3").hasClass('btn-outline-light') 
      && $("#b6").hasClass('btn-outline-light') 
      && $("#b9").hasClass('btn-outline-light'))
      {
        score2 = score2 + 1;
          $("#scorej2").val(score2);
          jugador = 1;
          document.getElementById("mensaje").innerHTML = '<div class="alert alert-warning alert-dismissible fade show" role="alert">Player Two <strong>Win!</strong><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';
          proximo();
          win();
      }

    }

    function cross1(){
      
      var score1;
        score1 = parseInt($('#scorej1').val());

        var score2;
        score2 = parseInt($('#scorej2').val());
      
      if($("#b1").hasClass('btn-outline-danger') 
      && $("#b5").hasClass('btn-outline-danger') 
      && $("#b9").hasClass('btn-outline-danger'))
      {
        score1 = score1 +1;
          $("#scorej1").val(score1);
          jugador = 1;
          document.getElementById("mensaje").innerHTML = '<div class="alert alert-warning alert-dismissible fade show" role="alert">Player One <strong>Win!</strong><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';
          proximo();
          win();
      }
      else if($("#b1").hasClass('btn-outline-light') 
      && $("#b5").hasClass('btn-outline-light') 
      && $("#b9").hasClass('btn-outline-light'))
      {
        score2 = score2 + 1;
          $("#scorej2").val(score2);
          jugador = 1;
          document.getElementById("mensaje").innerHTML = '<div class="alert alert-warning alert-dismissible fade show" role="alert">Player Two <strong>Win!</strong><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';
          proximo();
          win();
      }

    }

    function cross2(){
      
      var score1;
        score1 = parseInt($('#scorej1').val());

        var score2;
        score2 = parseInt($('#scorej2').val());
      
      if($("#b3").hasClass('btn-outline-danger') 
      && $("#b5").hasClass('btn-outline-danger') 
      && $("#b7").hasClass('btn-outline-danger'))
      {
        score1 = score1 +1;
          $("#scorej1").val(score1);
          jugador = 1;
          document.getElementById("mensaje").innerHTML = '<div class="alert alert-warning alert-dismissible fade show" role="alert">Player One <strong>Win!</strong><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';
          proximo ();
          win();
      }
      else if($("#b3").hasClass('btn-outline-light') 
      && $("#b5").hasClass('btn-outline-light') 
      && $("#b7").hasClass('btn-outline-light'))
      {
        score2 = score2 + 1;
          $("#scorej2").val(score2);
          jugador = 1;
          document.getElementById("mensaje").innerHTML = '<div class="alert alert-warning alert-dismissible fade show" role="alert">Player Two <strong>Win!</strong><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';
          proximo();
          win();
      }

    }

    function win(){

      var score1;
        score1 = parseInt($('#scorej1').val());

        var score2;
        score2 = parseInt($('#scorej2').val());

      if(score1 == 5)
      {
        document.getElementById("mensaje").innerHTML = '<div class="alert alert-warning alert-dismissible fade show" role="alert">Player One <strong>won the game!</strong><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';
        var scorej1 =  document.getElementById('scorej1');
        scorej1.className = "win";
        setTimeout('document.location.reload()',1000);
      }
      else if(score2 == 5)
      {
        document.getElementById("mensaje").innerHTML = '<div class="alert alert-warning alert-dismissible fade show" role="alert">Player Two <strong>won the game!</strong><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';
        var scorej1 =  document.getElementById('scorej2');
        scorej1.className = "win";
        setTimeout('document.location.reload()',1000);
      }

    }

      
    });