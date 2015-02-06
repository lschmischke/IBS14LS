var minutes=10;
var clock = minutes * 60 * 1000;
var start = clock;
 
Ext.define("ArsnovaTimer.controller.Timer",{
    extend: 'Ext.app.Controller',
 
    config: {
        statics: {
            timerInt: undefined,
        },
        refs: {
            timerPanel : '#Timer',
            startBtn: 'button#startButton',
            buzzer: 'audio#buzzer',
            spinner: 'spinnerfield#spinner',
        },
    },
    
    countdown: function(action,min) {
    	var startBtn = this.getStartBtn();
    	var buzzer = this.getBuzzer();
        var cmd = action,
            offset;
 
        function update(panel){
            clock -= delta();
            render(panel);
            underZero(panel);
        }
        
        function underZero(panel) {
        	if(clock<0) {
        		clearInterval(timerInt);
                timerInt = undefined;
                panel.setHtml("00:00 <br> <p> Die Zeit ist abgelaufen</p>");
                startBtn.setText("Start");
                clock=start;
                buzzer.toggle();
        	}
        }
        
        function render(panel) {
 
            var rest;
            var seconds = clock / 1000;
            var minutes = Math.floor(seconds / 60);
            seconds     = Math.floor(seconds % 60);
 
             rest  = (minutes  < 10) ?  "0" + minutes  : minutes;
             rest += (seconds  < 10) ? ":0" + seconds  : ":" + seconds;
 
            panel.setHtml(rest);
        }
 
        function delta() {
            var now = Date.now(),
                d = now - offset;
 
            offset = now;
            return d;
        }
 
        if(cmd==="Resume") {
        	var thisTimer = this;
        	offset = Date.now();
        	if ( self.timerInt != undefined ) { clearInterval(self.timerInt); }
        	timerInt = setInterval(function() {
        		update(thisTimer.getTimerPanel());
        	}, 100);
        };
        if(cmd==="Stop"){
        	clearInterval(timerInt);
        	timerInt = undefined;
        };
        if(cmd==="Reset") {
        	minutes=min;
        	start=minutes*60*1000;
        	clock = start;
        	if(self.timerInt!=undefined) {
        		clearInterval(timerInt);
        		timerInt = undefined;
        	}
        	var mindisplay = (minutes <10) ? "0"+minutes : minutes;
        	this.getTimerPanel().setHtml(mindisplay+":00");
        };
        if(cmd==="Set") {
        	if(self.timerInt!=undefined) {
        		clearInterval(timerInt);
        		timerInt = undefined;
        	}
        	minutes=min;
        	start=minutes*60*1000;	
        	clock=start;
        	var mindisplay = (minutes <10) ? "0"+minutes : minutes;
        	this.getTimerPanel().setHtml(mindisplay+":00");
        };
        if(cmd=="Start") {
        	if(self.timerInt!=undefined) {
        		clearInterval(timerInt);
        		timerInt = undefined;
        	}
        	minutes=min;
        	start=minutes*60*1000;	
        	clock=start;
        	ArsnovaTimer.app.getController("Timer").countdown("Resume",min);
        }
        
        } //countdown
 
    });