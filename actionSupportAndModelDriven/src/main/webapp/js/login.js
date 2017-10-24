Ext.onReady(function () {

    Ext.create('Ext.form.Panel', {

        title: 'Login Form Panel',
        bodyPadding: 5,
        width: 350,
        url: 'login.action',
        layout: 'anchor',
        defaults: {
            anchor: '100%'
        },
        defaultType: 'textfield',
        items: [{
            fieldLabel: 'Username',
            name: 'username',
            allowBlank: false
        }, {
            fieldLabel: 'Password',
            name: 'password',
            allowBlank: false
        }],

        buttons: [{
            text: 'Reset',
            handler: function () {
                this.up('form').getForm().reset();
            }
        }, {
            text: 'Submit',
            formBind: true,
            disabled: true,
            handler: function () {
                var form = this.up('form').getForm();
                if (form.isValid()) {
                    form.submit({
                        success: function (form, action) {
                            console.log("success", action);
                            //Ext.Msg.alert('Success', action.result.status);
                        },
                        failure: function (form, action) {
                            console.log("failure", action);
                            //Ext.Msg.alert('Failed', action.result.status);
                        }
                    });
                }
            }
        }],
        renderTo: Ext.getBody()
    });
});