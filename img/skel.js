/**
* Author : Abdennour mail@abdennoor.com
* Copyright (c) 1437 - https://abdennoor.com
*/
(function(w,d,api,$){
    (function(job,delay,event,echo){
        //--------------------------APIs -------------------
        api.module_a={};     
        (function(api){
             api.fn_1=function(){
                 echo('Call fn1 of module module_a')
             }
        })(api.module_a) 
        // Another module 
        api.module_b={};     
        (function(api){
             api.fn_1=function(){
                 echo('Call fn1 of module module_b')
             }
        })(api.module_b) 
        //---------------------events-------------
        event('#mySelector','click',function(){/*Action & callback*/});
        
        //-------------------On document Ready ---------
        $(function(){
          //do your stuff
        })
        
      
    })(w.setInterval,w.setTimeout,$(d).delegate,console.log) 
})(window,document,{},jQuery);
