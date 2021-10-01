// WEB303 Assignment 2
// Zhijun Zhou

        $(function(){
            $("#v1prospect").click(function(){
                $('#solution').load('prospect.html').hide().slideDown(2000);
            });
            
            $("#v1convert").click(function(){
                $('#solution').load('convert.html').hide().slideDown(2000);
            });
            
            $("#v1retain").click(function(){
                $('#solution').load('retain.html').hide().slideDown(2000);

            });  
        });

