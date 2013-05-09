$(document).ready(function() {
	 $('#calendar').fullCalendar({
 //        // put your options and callbacks here
     })
			/*
			*   Examples - images
			*/

			$('.modal_img').fancybox({});
alert('loaded');
			// $("a#example1").fancybox();

			// $("a#example2").fancybox({
			// 	'overlayShow'	: false,
			// 	'transitionIn'	: 'elastic',
			// 	'transitionOut'	: 'elastic'
			// });

			// $("a#example3").fancybox({
			// 	'transitionIn'	: 'none',
			// 	'transitionOut'	: 'none'	
			// });

			// $("a#example4").fancybox({
			// 	'opacity'		: true,
			// 	'overlayShow'	: false,
			// 	'transitionIn'	: 'elastic',
			// 	'transitionOut'	: 'none'
			// });

			// $("a#example5").fancybox();

			// $("a#example6").fancybox({
			// 	'titlePosition'		: 'outside',
			// 	'overlayColor'		: '#000',
			// 	'overlayOpacity'	: 0.9
			// });

			// $("a#example7").fancybox({
			// 	'titlePosition'	: 'inside'
			// });

			// $("a#example8").fancybox({
			// 	'titlePosition'	: 'over'
			// });

			// $("a[rel=example_group]").fancybox({
			// 	'transitionIn'		: 'elastic',
			// 	'transitionOut'		: 'elastic',
			// 	'titlePosition' 	: 'outside',
			// 	'overlayColor'		: '#000',
			// 	'overlayOpacity'	: 0.9,
			// 	'titleFormat'		: function(title, currentArray, currentIndex) {
			// 		return '<span id="fancybox-title-over">' + (title.length ? ' &nbsp; ' + title : '') + '</span>';
			// 	}
			// });

			/*
			*   Examples - various
			*/

			$("#various1").fancybox({
				'titlePosition'		: 'inside',
				'transitionIn'		: 'none',
				'transitionOut'		: 'none'
			});

			$("#various2").fancybox();

			$("#various3").fancybox({
				'width'				: '75%',
				'height'			: '75%',
				'autoScale'			: false,
				'transitionIn'		: 'none',
				'transitionOut'		: 'none',
				'type'				: 'iframe'
			});

			$("#various4").fancybox({
				'padding'			: 0,
				'autoScale'			: false,
				'transitionIn'		: 'none',
				'transitionOut'		: 'none'
			});
		});
function MM_showHideLayers() { //v9.0
  var i,p,v,obj,args=MM_showHideLayers.arguments;
  for (i=0; i<(args.length-2); i+=3) 
  with (document) if (getElementById && ((obj=getElementById(args[i]))!=null)) { v=args[i+2];
    if (obj.style) { obj=obj.style; v=(v=='show')?'visible':(v=='hide')?'hidden':v; }
    obj.visibility=v; }
}


