Ext.define('ArsnovaTimer.view.Timer', {
    extend: 'Ext.Panel',
    xtype: 'timer',
    id:'Timer',
    initialize: function() {
    	ArsnovaTimer.app.getController("Timer").countdown("Set",10);
    },
    config: {
    	title:'Countdown Timer',
        iconCls: 'time',
        styleHtmlContent:true,
    	styleHtmlCls:'timer',
    	layout: {
    		type: 'vbox',
    		align: 'center',
    		pack: 'top'
    	},
    	
    	items: [
    	        {
    	        	xtype:'panel',
    	        	config:{
    	        		docked:'top',
    	        	},
    	        	items: [ 
//    	        	        {	
//    	        	        	xtype:'button',
//    	        	        	text:'Time: 10 Minute(s)',
//    	        	        	textAlign: 'center',
//    	        	        	docked:'top',
//    	        	        	action: 'setTime',
//    	        	        	itemId: 'setTimeButton',
//    	        	        },
    	        	        {
    	        	        	xtype:'spinnerfield',
    	        	        	itemId: 'spinner',
    	        	        	label: 'Countdown ab (in Minuten)',
    	        	        	docked:'top',
    	        	        	defaultValue: 10,
    	        	        	minValue: 1,
    	        	        	maxValue: 20,
    	        	        	stepValue:1,
    	        	        	
    	        	        },
    	        	        {
    	        	        	xtype: 'button',
    	        	        	text: 'Start',
    	        	        	textAlign:'center',
    	        	        	docked:'top',
    	        	        	action :'timerButton',
    	        	        	itemId:'startButton',
    	        	        },
    	        	        {
    	        	        	xtype:'button',
    	        	        	text: 'Reset',
    	        	        	textAlign:'center',
    	        	        	action: 'resetButton',
    	        	        	docked: 'top',
    	        	        },
    	        	        {
    	        	        	xtype:'audio',
    	        	        	type: 'mpeg',
    	        	        	hidden:true,
    	        	        	url:'../../ArsnovaTimer/resources/WrongAnswerBuzzer.mp3',
    	        	        	itemId:'buzzer',
    	        	        },
    	        	        ],
    	        	        
    	        }]
    },
    
    
});