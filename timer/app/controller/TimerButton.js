Ext.define('ArsnovaTimer.controller.TimerButton', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            startBtn : 'button#startButton',
            timerView : 'timerContainer',
            setTimeBtn: 'button#setTimeButton',
        },
        control: {
            'button[action=timerButton]':{
            	tap:function(button){
            		if (button.getText()=== "Start") {
            			ArsnovaTimer.app.getController("StopWatch").controlTimer("Start");
            			button.setText("Pause");
            		}
            		else {
            			button.setText("Start");
            			ArsnovaTimer.app.getController("StopWatch").controlTimer("Stop");
            		}
            	}
            },
            'button[action=resetButton]': {
            	tap:function(button){
            		this.getStartBtn().setText("Start");
            		ArsnovaTimer.app.getController("StopWatch").controlTimer("Reset");
            	}
            },
            'button[action=setTime]':{
            	tap:function(button){
            		var button= this.getSetTimeBtn();
            		var startBtn= this.getStartBtn();
            		var setTimeView = Ext.create('Ext.Picker',{
     	                slots: [
     	                    {
     	                    	name:'setTime',
     	                    	title:' How long and shit',
     	                    	store: 'Times',
     	                    	value: 10,
     	                    	align: 'center',
     	                    }
     	                   ],
     	                  listeners: {
     	                     change: function(picker, value, eOpts) {
     	                         button.setText("Time: "+value.setTime+" Minute(s)");
     	                         ArsnovaTimer.app.getController("StopWatch").controlTimer("Set",value.setTime);
     	                         startBtn.setText("Start");
     	                     }
     	                 }
     	                    
            		});
            		this.getTimerView().push(setTimeView);
            	}
            }
        }
    },
    
});
