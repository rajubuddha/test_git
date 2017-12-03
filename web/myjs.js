window.jQuery(function()
{
	jQuery("button").on('mouseover',function(){
		cid=jQuery(this).attr("pid");
		//alert(cid);
		jQuery('#'+cid+' .project_title').slideToggle(500);
		//this.slideToggle(500);
		//$(this).hide(500);
		
		})

})

