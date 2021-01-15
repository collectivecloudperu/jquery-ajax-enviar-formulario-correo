        $(function(){
            $("#formulario_contacto").on("submit", function(e){
              
                e.preventDefault();

                var f = $(this);
                var formData = new FormData(document.getElementById("formulario_contacto"));
                formData.append("dato", "valor");
                //formData.append(f.attr("name"), $(this)[0].files[0]);
                $.ajax({
                    url: "php/enviarcorreo.php",
                    type: "post",
                    dataType: "json",
                    data: formData,
                    cache: false,
                    contentType: false,
                    processData: false,
                    beforeSend: function() {
                      $('.msg').html("<img src='img/ajax-loader.gif' />");
                    },
                })
                
                .done(function (res) {
                  
                  //console.log(res.a);
                  //console.log(res.b);

                  if(res.a == "1"){
                    //alert("true"); 
                    $(".msg").html(res.b);                   
                    $("#formulario_contacto").trigger("reset");                     
                  }  else {
                    // alert("false");                    
                    $(".msg").html(res.b); 
                  }
                                                      
                })

                .fail(function (res) {                    
                    $(".msg").html(res.b);
                });

            });
        });
