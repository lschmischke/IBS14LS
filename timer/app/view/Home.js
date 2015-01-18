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

        html: ['<h1> Timer for Arsnova</h1>',
                '<hr>',
        '<p> press <a href="../index.html">here</a> to get back to the Homepage </p>'].join(""),
        items: [
            {
                xtype: 'titlebar',
                title: 'Welcome',
                docked:'top',
            }
        ]

    }
})