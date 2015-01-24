Ext.define('ArsnovaTimer.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                xtype:'home',
            }, 
            {
                xtype:'timerContainer',
            },
            {
            	xtype: 'impressum',
            }
             
        ]
    }
});
