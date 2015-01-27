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
    		pack: 'center'
    	},
    	
    	items: [
    	        {
    	        	xtype:'panel',
    	        	config:{
    	        		docked:'top',
    	        	},
    	        	items: [ 
    	        	        {	
    	        	        	xtype:'button',
    	        	        	text:'Time: 10 Minute(s)',
    	        	        	docked:'top',
    	        	        	action: 'setTime',
    	        	        	itemId: 'setTimeButton',
    	        	        },
    	        	        {
    	        	        	xtype: 'button',
    	        	        	text: 'Start',
    	        	        	docked:'top',
    	        	        	action :'timerButton',
    	        	        	itemId:'startButton',
    	        	        },
    	        	        {
    	        	        	xtype:'button',
    	        	        	text: 'Reset',
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