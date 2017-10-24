app = {};

app.core = {

    getMainView: function () {
        // App.LoginUser = loginUserName;
        this.mainViewPort = Ext.create('Ext.container.Viewport', {
            layout: 'border',
            width: 1000,
            margin: 'auto',
            style: {
                margin: 'auto'
            },
            items: [{
                region: 'north',
                xtype: 'container',
                height: 50,
                html: 'header goes here',
                split: false,
                border: true
            }, {
                region: 'center',
                xtype: 'panel',
                layout: 'fit',
                border: false,
                // items: []
                items: [this.getMainContainer()]
            }, {
                region: 'west',
                xtype: 'panel',
                width: 200,
                split: false,
                html: 'Notification',
                layout: 'fit',
                border: true
            }],
            showLoading: function (msg) {
                var el = this.getEl();
                if (el) {
                    if (msg) {
                        el.mask(msg);
                    } else {
                        el.unmask();
                    }
                }

            }
        })
    },

    mainContainer: null,

    getMainContainer: function () {
        if (!this.mainContainer) {
            this.mainContainer = Ext.create('Ext.panel.Panel', {
                layout: 'fit',
                tbar: this.getMainMenu(),
                showLoading: function (msg) {
                    var el = this.getEl();
                    if (el) {
                        if (msg) {
                            el.mask(msg);
                        } else {
                            el.unmask();
                        }
                    }

                }
            });
        }
        return this.mainContainer;
    },

    mainMenu: null,
    getMainMenu: function () {
        if (!this.mainMenu) {
            this.mainMenu = Ext.create('Ext.toolbar.Toolbar', {
                xtype: 'toolbar',
                dock: 'top',
                layout: {
                    overflowHandler: 'Menu'
                },
                items: []
            });
        }
        return this.mainMenu;
    }

};