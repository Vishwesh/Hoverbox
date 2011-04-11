
(function($){

 	$.fn.extend({

 		hoverbox: function(options) {   
              		//Set the default values, use comma to separate the settings, example:   
           		 var defaults = { 
           		 	content:"Hello World",
           		 	headertext: "Hover Box",
           		 	pnllckerrmsg: "Panel is Locked.",
                                view:"closed",
                                placement : "top"
            	               }   
                   
            		var options =  $.extend(defaults, options); 

    			return this.each(function() {
    				var o = options;
    				var lock=0;
				var emptyoptions = {};				
                                var firsttime=0;
                                if(o.placement == "top"){
                                	$('body').prepend($(this));				
                                }
				$(this).html("<div class='hover-panel'><div  class='hover-panel-strip'></div>" 
					     + "<div class='hover-panel-content'><div class='ui-widget-content'>"+o.content+"</div></div></div>");
				
				$(".hover-panel-strip").addClass("ui-widget")
						       .addClass("ui-corner-all")
						       .addClass("ui-widget-header");

                	    	$(".hover-panel-content")
                	    	.addClass("ui-widget-content")
				.addClass("ui-corner-all")
				.prepend('<span class="ui-icon ui-icon-unlocked"></span>')
				.prepend('<span class="ui-icon ui-icon-closethick"></span>')
				.end();
				
	
				
				

                                $(".hover-panel-content").toggle();
				$('.hover-panel').css('width',$('.hover-panel-content').css('width'));
				
				$(".hover-panel-strip").html(o.headertext);				
							
				
				if(o.placement == "bottom"){
					$(".hover-panel").css("position","absolute");
					$(".hover-panel").css("bottom","0px");
					$(".hover-panel-content").css("bottom",$(".hover-panel").css("height"));					
				
				}
				if(o.placement == "top"){
					$(".hover-panel").css("position","absolute");
					$(".hover-panel").css("top","0px");
					$(".hover-panel-strip").css("top","0px");
					$(".hover-panel-content").css("top",$(".hover-panel").css("height"));					
				}
				
					
				
                                if(o.view.toString().toLowerCase() == "locked"){
                                    lock=1;
                                }
                                
				$('.hover-panel-strip').click(function(){
					if(lock == 0 )
					{
						if(o.placement == "bottom"){
							$(".hover-panel-content").toggle('drop',{ direction: 'down' },500);
						}
						else{

							$(".hover-panel-content").toggle('drop',{ direction: 'up' },500);
						}
					}
				}); 
                	    	$(".hover-panel-content .ui-icon").hover(function() {                    		
				        if($(this).is(".ui-icon-closethick")){
				              if(lock == 1){
				              	alert(o.pnllckerrmsg);
				              }
                	    		}
                	    	},function(){});
                                
                	    	$(".hover-panel-content .ui-icon").click(function() {
                                    if( o.view.toString().toLowerCase() == "open" && firsttime==0){
                                        $(".hover-panel-content").css("position","relative");
                                        firsttime =1;
                                    }
                                        if($(this).is(".ui-icon-closethick")){
                	    			if(lock == 0)
						{
							if(o.placement == "bottom"){
								$(".hover-panel-content").toggle('drop',{ direction: 'down' },500);
							}
							else{
								$(".hover-panel-content").toggle('drop',{ direction: 'up' },500);
							}
						}
						else
						{
							alert(o.pnllckerrmsg);
						}
						return;
                	    		}
                                        if($(".hover-panel-content").find(".ui-icon").is(".ui-icon-unlocked"))
                	    		{
                         	    		$(".hover-panel-content").css("position","absolute");
                			        $(this).toggleClass("ui-icon-unlocked").toggleClass("ui-icon-locked");
                	    			lock = 1;
                                                
                	   		}
                	   		else if($(".hover-panel-content").find(".ui-icon").is(".ui-icon-locked"))
					{
						$(".hover-panel-content").css("position","absolute");
						$(this).toggleClass("ui-icon-locked").toggleClass("ui-icon-unlocked");
						lock = 0;							
                	    		}  
                 	    	});  

	
                               if(o.view == "open"){
                                   $(".hover-panel-content .ui-icon").click();
                                }
				 
    			});
    		}  
	});
})(jQuery); 