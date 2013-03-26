Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    views: [
        'loading',
        'init',
        'main'
    ],
    autoCreateViewport: true,
    name: 'SxapiManager',
    controllers: [
        'Session',
        'Log'
    ],


    launch: function() {
        console.log("launch app");
        // trick because getApplication doesn't exist in ExtJS4.1.1
        sxApp = this;
        SxapiManager.getApplication = function() {
            return sxApp;
        }
        // start the loading view
        SxapiManagerloadingView = Ext.create('SxapiManager.view.loading');
        SxapiManagerloadingView.show();
        this.displayInitMessage('... initialize ...');
        // on test l'existence du store de session
        if(!Ext.getStore('session')) {
            Ext.create('SxapiManager.store.session');
        }
        // on charge la session
        Ext.getStore('session').load({
            callback: this.onLoadSessionStore,
            scope: this
        });
    },

    onLoadSessionStore: function(records, operation, success) {
        if(success) {
            var response = JSON.parse(operation.response.responseText);
            if(response.code !== undefined && response.code !== '' && response.code != 'ok') {
                this.displayInitMessage("server error : "+response.message);
            }
            else {
                var sessinfo = records[0].getData();
                // on test l'existence du store de user
                if(!Ext.getStore('sessionUser'))
                    Ext.create('SxapiManager.store.sessionUser');
                if(sessinfo.time_end > new Date()) {
                    this.displayInitMessage("... session "+sessinfo._id+" openned ...");
                    Ext.getStore('sessionUser').load({
                        callback: this.onLoadSessionUserStore,
                        scope: this
                    });
                }
                else {
                    this.displayInitMessage("... session "+sessinfo._id+" is expired ...");
                    goapp = this;
                    Startx.wsd.Session.SessionLogout(function(provider, response) {
                        if(response.code == 'ok'){
                            this.displayInitMessage('... closing this session ...');
                            Ext.getStore('session').load({
                                callback: function(records, operation,success) {
                                    if(success) {
                                        this.displayInitMessage('... session renewed ...');
                                        Ext.getStore('user').load({
                                            callback: goapp.onLoadUserStore,
                                            scope: goapp
                                        });
                                    }
                                    else {
                                        this.displayInitMessage("server communication error");
                                    }

                                },
                                scope: this
                            });
                        }
                        else {
                            this.displayInitMessage(response.message);
                        }
                    });
                }
            }
        }
        else {
            this.displayInitMessage("server communication error");
        }
    },

    onLoadSessionUserStore: function(records, operation, success) {
            var credentialData = {};
        if(Array.isArray(records) && records.length > 0)
            credentialData = records[0].getData();
        if(credentialData._id === 'anonymous' || credentialData._id == '' || typeof credentialData._id == 'undefined') {
            Ext.getCmp('loadingmessagebox').update("... authenticating ...");
            // on test l'existence du store de credential
            if(!Ext.getStore('credential'))
                Ext.create('SxapiManager.store.credential');
            // on charge le credential
            var credential_store = Ext.getStore('credential');
            credential_store.load();
            var userData = credential_store.first();
            if(userData) {
                var login = userData.get('login');
                var pwd = userData.get('pwd');
                this.displayInitMessage("... connecting with "+login+" ...");
                Startx.wsd.Session.SessionLogin(login,pwd,function(provider, response) {
                    if(response.code == 'ok'){
                        this.displayInitMessage('... user '+login+' is granted access ...');
                        this.launchMain();
                    }
                    else {
                        Ext.Msg.alert('error '+response.code, response.message);
                    }
                },this);
            }
            else {
                this.popCredentials();
            }
        }
        else {
            this.displayInitMessage("... user "+credentialData._id+" loaded ...");
            this.launchMain();
        }
    },

    displayInitMessage: function(message) {
        Ext.getCmp('loadingmessagebox').update(message);
    },

    launchMain: function() {
        setTimeout(function(){
            SxapiManager.getApplication().displayInitMessage("... lauching application ...");
            setTimeout(function(){
                var main = Ext.create('SxapiManager.view.main');
                Ext.getCmp('loading').hide();
                main.show();
            },300);
        },200);
    },

    popCredentials: function() {
        var credentialsView = Ext.create('SxapiManager.view.credentials');
        credentialsView.show();
    }

});
