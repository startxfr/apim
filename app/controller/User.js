/*
 * File: app/controller/User.js
 *
 * This file was generated by Sencha Architect version 3.0.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('sxapim.controller.User', {
    extend: 'Ext.app.Controller',

    models: [
        'UserModel'
    ],
    stores: [
        'UsersStore'
    ],
    views: [
        'UsersPanel'
    ],

    refs: [
        {
            ref: 'userDetail',
            selector: '#userDetail'
        },
        {
            ref: 'usersGrid',
            selector: '#usersgrid'
        },
        {
            ref: 'usersPanel',
            selector: '#usersPanel'
        }
    ],

    onGridpanelItemClick: function(dataview, record, item, index, e, eOpts) {
        console.log("item click");
        // Get detail panel via controller ref
        var details = this.getUserDetail(),
            data = record.data;
        var username = data.firstname+' '+data.lastname;

        if(details) {
            // Create the user form panel with the selected row's data
            var newform = Ext.create("sxapim.view.UserForm",{
                title: false
            });
            newform.getForm().loadRecord(record);

            // Add it to the detail view and update title
            details.removeAll();
            details.add(newform);
            details.setTitle("Informations about user "+username);
        }
    },

    init: function(application) {
        this.control({
            "#usersgrid": {
                itemclick: this.onGridpanelItemClick
            }
        });
    }

});
