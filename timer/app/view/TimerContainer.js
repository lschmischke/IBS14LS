Ext.define('ArsnovaTimer.view.TimerContainer',{
	extend:'Ext.NavigationView',
	xtype:'timerContainer',
	config: {
		title: 'MyTimer',
		iconCls:'time',
		items: [
		        {
		        	xtype: 'timer',
		        }
		]
	}
})