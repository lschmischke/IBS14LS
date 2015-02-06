Ext.define('ArsnovaTimer.view.Home', {
    extend: 'Ext.Panel',
    xtype: 'home',

    config: {
        title: 'Home',
        iconCls: 'home',

        layout: 'fit',
        scrollable: true,
        styleHtmlContent: true,
        styleHtmlCls: 'homepage',

        html: ['<br>',     
        '<p class=\"arsnova-logo\"> Created for <a href="https://arsnova.eu/mobile"><span class=\"icon-ars\">ARS</span><span class=\"icon-nova\">nova</span></a></p>',
        '<br>',
        '<p><a href="../index.html">Get back to the Homepage!</a></p>',
               ].join(""),
        items: [
            {
                xtype: 'titlebar',
                title: 'Countdown Timer',
                docked:'top',
            }
        ]

    }
})