var minutes=10;
var clock = minutes * 60 * 1000;
var start = clock;
 
Ext.define("ArsnovaTimer.controller.Timer",{
    extend: 'Ext.app.Controller',
 
    config: {
        statics: {
            timerInt: undefined
        },
        refs: {
            timerPanel : '#Timer',
            startBtn: 'button#startButton',
            buzzer: 'audio#buzzer',
        },
    },
    
    controlTimer: function(action,min) {
    	var startBtn =this.getStartBtn();
    	var buzzer = this.getBuzzer();
        var actionType = action,
            offset,
            interval;
 
 
        function update(watchObj){
            clock -= delta();
            render(watchObj);
            underZero(watchObj);
        }
        
        function underZero(watchObj) {
        	if(clock<0) {
        		clearInterval(timerInt);
                timerInt = undefined;
                watchObj.setHtml("00:00:00 min");
                startBtn.setText("Start");
                clock=start;
                buzzer.toggle();
        	}
        }
        function render(watchObj) {
 
            var elapsedTime;
            var seconds = clock / 1000;
            var minutes = Math.floor(seconds / 60);
            seconds     = Math.floor(seconds % 60);
            var milliseconds = clock % 1000;
 
             elapsedTime  = (minutes  < 10) ?  "0" + minutes  : minutes;
             elapsedTime += (seconds  < 10) ? ":0" + seconds  : ":" + seconds;
             if(milliseconds < 10){
                elapsedTime += ":00" + milliseconds;
             }
             else if(milliseconds < 100) {
                elapsedTime += ":0" + milliseconds;
             }
             else
             {
                elapsedTime += ":" + milliseconds;
             }
             elapsedTime += " min";
 
            watchObj.setHtml(elapsedTime);
        }
 
        function delta() {
            var now = Date.now(),
                d = now - offset;
 
            offset = now;
            return d;
        }
 
        switch(actionType) {
        case "Start":
            var thisScope = this;
            offset = Date.now();
            if ( self.timerInt != undefined ) { clearInterval(self.timerInt); }
            timerInt = setInterval(function() {
                update(thisScope.getTimerPanel());
            }, 1);
 
            break;
        case "Stop":
            clearInterval(timerInt);
            timerInt = undefined;
            break;
        case "Reset":
            clock = start;
            if(timerInt!=undefined) {
            	clearInterval(timerInt);
            	timerInt = undefined;
            	var mindisplay = (minutes <10) ? "0"+minutes : minutes;
            	this.getTimerPanel().setHtml(mindisplay+":00:000 min");
            }
            break;
        case "Set":
        	clearInterval(timerInt);
            timerInt = undefined;
        	minutes=min;
        	start=minutes*60*1000;	
        	clock=start;
        	var mindisplay = (minutes <10) ? "0"+minutes : minutes;
            this.getTimerPanel().setHtml(mindisplay+":00:000 min");
        }
    }
 
    });