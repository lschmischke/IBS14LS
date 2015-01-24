Ext.define('ArsnovaTimer.view.Timer', {
    extend: 'Ext.Panel',
    xtype: 'timer',
    id:'Timer',
    config: {
        title: 'Timer',
        iconCls: 'time',
        layout: 'fit',
        styleHtmlContent:true,
    	styleHtmlCls:'timer',
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
		    
    },
    
    
});