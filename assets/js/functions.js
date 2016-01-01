var countdown = function (end, elements, callback) {
		
	var _second = 1000,
		_minute = _second * 60,
		_hour = _minute * 60,
		_day = 	_hour * 24,
		_month = 	_day * 30.4167,
			
		end = new Date(end),
		timer,
			
		calculate = function(){
			
			var now = new Date(),
				remaining = end.getTime() - now.getTime(),
				data;
			
			if(isNaN(end)){
				console.log('Not a valid time/date');
				return;
			}
			
			if(remaining <= 10 ) {
				console.log('Does this work?');
				$('.beforeten').addClass('hide');
				$('.final-clock').removeClass('hide');
				$('.finished').removeClass('hide');
				$('.finished').addClass('show');

			} else if(remaining <= 0) {

				clearInterval(timer);
				
				if(typeof callback === 'function'){
					callback();
				}

				
			} else {
				if(!timer) {
					timer = setInterval(calculate, _second)
				}
				
				
				
			data = {
				'months' : Math.floor(remaining / _month),
				'days' : Math.floor((remaining % _month) / _day),
				'hours' : Math.floor((remaining % _day) / _hour),
				'minutes' : Math.floor((remaining % _hour) / _minute),
				'seconds' : Math.floor((remaining % _minute) / _second)
			}
//			console.log(data)
			if(elements.length) {
				for( x in elements) {
					var x = elements[x];
					data[x] = "<p>" + ('00' + data[x]).slice(-2) + "</p>";
					document.getElementById(x).innerHTML = data[x];
				}
			}
				
				
				
			}
			
			
		};
	
	calculate();
}
