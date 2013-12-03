/*
 * File: app/store/UsersStore.js
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

Ext.define('sxapim.store.UsersStore', {
    extend: 'Ext.data.Store',

    requires: [
        'sxapim.model.UserModel',
        'Ext.data.proxy.JsonP',
        'Ext.data.reader.Json'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: true,
            autoSync: true,
            model: 'sxapim.model.UserModel',
            storeId: 'UsersStore',
            data: [
                {
                    id: 1,
                    firstname: 'Christophe',
                    lastname: 'LARUE',
                    pin: '0000',
                    visitcounter: 12,
                    lastvisit: '2013-01-01 15:19:12'
                },
                {
                    id: 2,
                    firstname: 'Maxime',
                    lastname: 'GAILLARD',
                    pin: '1111',
                    visitcounter: 5,
                    lastvisit: '2013-02-05 18:47:43'
                }
            ],
            proxy: {
                type: 'jsonp',
                reader: {
                    type: 'json'
                }
            }
        }, cfg)]);
    }
});