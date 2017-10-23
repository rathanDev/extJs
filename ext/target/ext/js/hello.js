Ext.onReady(function () {
    Ext.create('Ext.Panel', {
        renderTo: 'mainPanel',
        height: 100,
        width: 200,
        title: 'Hello',
        html: 'Hello!'
    });
});