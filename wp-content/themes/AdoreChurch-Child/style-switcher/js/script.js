	jQuery(document).ready(function(){
			jQuery("ul.layouts li.wide-layout").addClass("active");
        if (jQuery.cookie('boxed') == "yes") {
            jQuery("body").addClass("boxed");
			jQuery("ul.layouts li.boxed-layout").addClass("active");
			jQuery("ul.layouts li.wide-layout").removeClass("active");
        }
		
		if (jQuery.cookie('boxed') == "no") {
			jQuery("ul.layouts li.wide-layout").addClass("active");
        }
        if (jQuery.cookie('BGIMAGE') != null) {
			StoredBgImage = jQuery.cookie('BGIMAGE');
			jQuery("body").css("background-image","url('"+StoredBgImage+"')");
			jQuery("body").css("background-repeat","no-repeat");
			jQuery("body").css("background-size","cover");
        }
		if (jQuery.cookie('BGPATTERN') != null) {
			StoredBgPattern = jQuery.cookie('BGPATTERN');
			jQuery("body").css("background-image","url('"+StoredBgPattern+"')");
			jQuery("body").css("background-repeat","repeat");
			jQuery("body").css("background-size","auto");
        }
		if ((jQuery.cookie('BGPATTERN') == null) && (jQuery.cookie('BGIMAGE') == null)){
            jQuery("body").css("background-image",'none');
		}
		if (jQuery.cookie('ColorScheme') != null) {
			StoredColorScheme = jQuery.cookie('ColorScheme');
			jQuery('link.alt').attr('href',StoredColorScheme);
        }
    });
	jQuery(document).ready(function () {
		jQuery(".color-scheme a").click(function () {
			SCHEME = jQuery(this).attr('data-rel');
			jQuery('link.alt').attr('href', jQuery(this).attr('data-rel'));
           jQuery.cookie('ColorScheme',SCHEME);
			return false;
		});
		imgPathStart = "http://wp1.imithemes.com/adore-church-wp/wp-content/themes/AdoreChurch-Child/style-switcher/backgrounds/patterns/";
		imgPathEnd = new Array("pt1.png","pt2.png","pt3.png","pt4.png","pt5.png","pt6.png","pt7.png","pt8.png","pt9.png","pt10.png","pt11.jpg","pt12.jpg","pt13.jpg","pt14.jpg","pt15.jpg","pt16.png","pt17.png","pt18.png","pt19.png","pt20.png","pt21.png","pt22.png","pt23.png","pt24.png","pt25.png","pt26.png","pt27.png","pt28.png","pt29.png","pt30.png");
		jQuery(".background-selector li img").click(function() {
			backgroundNumber = jQuery(this).attr("data-nr");
			bgPattern = imgPathStart+imgPathEnd[backgroundNumber]
			jQuery("body").css("background-image","url('"+bgPattern+"')");
			jQuery("body").css("background-repeat","repeat");
			jQuery("body").css("background-size","auto");
           jQuery.cookie('BGPATTERN',bgPattern);
		   jQuery.removeCookie('BGIMAGE');
		});
		imgPathStart1 = "http://wp1.imithemes.com/adore-church-wp/wp-content/themes/AdoreChurch-Child/style-switcher/backgrounds/images/";
		imgPathEnd1 = new Array("img1.jpg","img2.jpg","img3.jpg","img4.jpg","img5.jpg");
		jQuery(".background-selector1 li img").click(function() {
			backgroundNumber1 = jQuery(this).attr("data-nr");
			bgImage = imgPathStart1+imgPathEnd1[backgroundNumber1]
			jQuery("body").css("background-image","url('"+bgImage+"')");
			jQuery("body").css("background-repeat","no-repeat");
			jQuery("body").css("background-size","cover");
           jQuery.cookie('BGIMAGE',bgImage);
		   jQuery.removeCookie('BGPATTERN');
		});
		jQuery("ul.layouts li.wide-layout").click(function(){
			jQuery("body").removeClass("boxed");
			jQuery("body").css("background-image","none");
			jQuery("ul.layouts li").removeClass("active");
           jQuery.cookie('boxed','no',  {expires: 7, path: '/'});
           jQuery("body").removeClass("boxed");
			jQuery(this).addClass("active");
			jQuery("body").css("background-image","none");
		   jQuery.removeCookie('BGIMAGE');
		   jQuery.removeCookie('BGPATTERN');
			return false;
		});
		jQuery("ul.layouts li.boxed-layout").click(function(){
			jQuery("body").addClass("boxed");
			jQuery("ul.layouts li").removeClass("active");
           jQuery.cookie('boxed','yes', {expires: 7, path: '/'});
           jQuery("body").addClass("boxed");
			jQuery(this).addClass("active");
           jQuery.cookie('wide','no',  {expires: 7, path: '/'});
			return false;
		});
	});
	
	jQuery(window).load(function(){
		jQuery('.styleswitcher').animate({
					'left': '-206px'
				});
		jQuery('.switch-button').addClass('closed');
	});
	jQuery(document).ready(function () {		
		jQuery('.switch-button').click(function () {	
			if (jQuery(this).hasClass('open')) {
				jQuery(this).addClass('closed');
				jQuery(this).removeClass('open');
				jQuery('.styleswitcher').animate({
					'left': '-206px'
				});
			} else {
				if (jQuery(this).hasClass('closed')) {
				jQuery(this).addClass('open');
				jQuery(this).removeClass('closed');
				jQuery('.styleswitcher').animate({
					'left': '0'
				});
				}
			}	
		});
	});
	