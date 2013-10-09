/*jslint white: true, browser: true, undef: true, nomen: true, eqeqeq: true, plusplus: false, bitwise: true, regexp: true, strict: true, newcap: true, immed: true, maxerr: 14 */
/*global window: false, REDIPS: true */

/* enable strict mode */
"use strict";

// define redipsInit variable
var redipsInit;

// redips initialization
redipsInit = function () {
	var num = 0,			// number of successfully placed elements
		rd = REDIPS.drag;	// reference to the REDIPS.drag lib
	// initialization
	rd.init();
	
	// enable shift animation
	rd.shift.animation = true;
	// in a moment when DIV element is moved, set drop_option property (shift or single)
	rd.event.moved = function () {
		// find parent table of moved element
		var tbl = rd.findParent('TABLE', rd.obj);
		// if table id is table1
		/*if (tbl.id === 'table1') {
			rd.dropMode = 'shift';
		}
		else {
			rd.dropMode = 'single';
		}
		rd.dropMode = 'shift';*/
		rd.dropMode = 'single';
	};
	
	// set hover color
	rd.hover.colorTd = '';
	// define green elements for red cells   ////flores rojas
	rd.mark.exception.red    = 'red_cell';
	rd.mark.exception.redc0  = 'red_cell';
	rd.mark.exception.redc1  = 'red_cell';
	rd.mark.exception.redc2  = 'red_cell';
	rd.mark.exception.redc3  = 'red_cell';
	rd.mark.exception.redc4  = 'red_cell';
	rd.mark.exception.redc5  = 'red_cell';
	rd.mark.exception.redc6  = 'red_cell';
	// define orange elements for yellow cells ////flores amarillas
	rd.mark.exception.yellow   = 'yellow_cell';
	rd.mark.exception.yellowc0 = 'yellow_cell';
	rd.mark.exception.yellowc1 = 'yellow_cell';
	rd.mark.exception.yellowc2 = 'yellow_cell';
	rd.mark.exception.yellowc3 = 'yellow_cell';
	rd.mark.exception.yellowc4 = 'yellow_cell';
	rd.mark.exception.yellowc5 = 'yellow_cell';
	rd.mark.exception.yellowc6 = 'yellow_cell';
	rd.mark.exception.yellowc7 = 'yellow_cell';
	rd.mark.exception.yellowc8 = 'yellow_cell';
	rd.mark.exception.yellowc9 = 'yellow_cell';
	rd.mark.exception.yellowc10 = 'yellow_cell';
	rd.mark.exception.yellowc11 = 'yellow_cell';
	// define white elements for white cells   ////flores blancas
	rd.mark.exception.white    = 'white_cell';
	rd.mark.exception.whitec0  = 'white_cell';
	rd.mark.exception.whitec1  = 'white_cell';
	rd.mark.exception.whitec2  = 'white_cell';
	rd.mark.exception.whitec3  = 'white_cell';
	rd.mark.exception.whitec4  = 'white_cell';
	
	
	// this function (event handler) is called after element is dropped
	rd.event.dropped = function () {
		// message text
		// var msg;
		// if the DIV element was placed on allowed cell then 
		if (rd.td.target.className.indexOf(rd.mark.exception[rd.obj.id]) !== -1) {
			// make it a unmovable
			rd.enableDrag(false, rd.obj);
			// increase counter
			num++;
			aubtn();
			// prepare and display message
			
			//re-escala flor en el contenedor
			//alert(rd.obj.id);
			//$('#' + rd.obj.id).addClass('florPeq');
			$('#' + rd.obj.id).fadeOut(1);
			$( rd.td.target ).css({"background":"none"});
			$( rd.td.target ).append('<div class="peqs ' + rd.obj.id + 'Peq"></div>');
			//alert(rd.td.target);
			
			if (proxPantalla == 1) { 
				if (num < 27) {
					//msg = 'Monedas ubicadas correctamente: ' + num;
				} else {
					//msg = 'Bien hecho...';
					var timerHidePant = setTimeout(function() {
						$("#pantalla01").fadeOut(300);
						auWin();
						clearTimeout(timerHidePant);
					}, 200);
					var timerOk = setTimeout(function() {
						$("#respuestaOk").fadeIn(300);
						clearTimeout(timerOk);
					}, 500);
				}//end if num
			}//end if proxPantalla
			
		}
	};
};

// add onload event listener
if (window.addEventListener) {
	window.addEventListener('load', redipsInit, false);
}
else if (window.attachEvent) {
	window.attachEvent('onload', redipsInit);
}
