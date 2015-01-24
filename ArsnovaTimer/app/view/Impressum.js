Ext.define('ArsnovaTimer.view.Impressum', {
	extend: 'Ext.Panel',
	xtype: 'impressum',
	
	config:{
		title:'Impressum',
		iconCls: 'info',
		layout: 'fit',
		styleHtmlContent:true,
		styleHtmlCls:'impressum',
		items: [
	        {
	        	xtype: 'titlebar',
	        	docked: 'top',
	        	title:'Impressum',
	        },
	        {
	        	html:["<p>Angaben gemäß § 5 TMG</p>",
				"<p>Leonard Schmischke</p>",
				"<p>Jacksonstraße 7 <br>35394 Gießen</p>",
				"<p><div class=\"heading\">Vertreten durch:</div>",
				"<p>Leonard Schmischke</p>",
				"<p><div class=\"heading\">Kontakt:</div>",
				"<p>Telefon: +491747823278</p>",
				"<p>E-Mail: <a href=\"mailto:leonard.schmischke@mni.thm.de\">leonard.schmischke@mni.thm.de</a></p>"
				].join(""),
	        }
	        ]
	}
})