Ext.define('ArsnovaTimer.controller.TimerButton', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            startBtn : 'button#startButton',
            timerView : 'timerContainer',
            setTimeBtn: 'button#setTimeButton',
            spinner: 'spinnerfield#spinner',
        },
        control: {
            'button[action=timerButton]':{
            	tap:function(button){
            		if (button.getText()=== "Start") {
            			var min = this.getSpinner().getValue();
            			this.getSpinner().disable();
            			ArsnovaTimer.app.getController("Timer").countdown("Start",min);
            			button.setText("Pause");
            		}
            		else if (button.getText()==="Resume") {
            			ArsnovaTimer.app.getController("Timer").countdown("Resume");
            			button.setText("Pause");
            		}
            		else {
            			button.setText("Resume");
            			ArsnovaTimer.app.getController("Timer").countdown("Stop");
            		}
            	}
            },
            'button[action=resetButton]': {
            	tap:function(button){
            		var min = this.getSpinner().getValue();
            		this.getSpinner().enable();
            		this.getStartBtn().setText("Start");
            		ArsnovaTimer.app.getController("Timer").countdown("Reset",min);
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
     	                    	title:' How long',
     	                    	store: 'Times',
     	                    	value: 10,
     	                    	align: 'center',
     	                    }
     	                   ],
     	                  listeners: {
     	                     change: function(picker, value, eOpts) {
     	                         button.setText("Time: "+value.setTime+" Minute(s)");
     	                         ArsnovaTimer.app.getController("Timer").countdown("Set",value.setTime);
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
