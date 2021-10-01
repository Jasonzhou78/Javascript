/*
	WEB 303
	Starting file for Assignment 1 
	{Zhijun Zhou}
*/
/* Tried the keypress method for calculation
   $('#spend').before('$');
        $('document').ready(function(){
            $('#percent,#salary').keypress(function(event){
               let keycode = (event.keyCode ? event.keyCode : event.which);
                if(keycode == '13')
                   {
                       let percent = parseFloat($('#percent').val());
                       let salary = parseFloat($('#salary').val());
                       let gadgets = salary * percent / 100;
                       $('#spend').text(`${gadgets}`);
                       
                   }
            });
        });
*/
// method change works for calculating gadgets.

  $('#spend').before('$');
        $('document').ready(function(){
            $('input').change(function(){
                let percent = parseFloat($('#percent').val());
                let salary = parseFloat($('#salary').val());
                let gadgets = (salary * percent / 100).toFixed(2);
                $('#spend').text(`${gadgets}`);        
            });
        });