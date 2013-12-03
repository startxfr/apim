/*
 * File: app/view/UserForm.js
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

Ext.define('sxapim.view.UserForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.userform',

    itemId: 'userForm',
    autoScroll: true,
    bodyPadding: 10,
    title: 'User form',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'displayfield',
                    anchor: '100%',
                    fieldLabel: 'ID',
                    name: 'id'
                },
                {
                    xtype: 'textfield',
                    anchor: '100%',
                    fieldLabel: 'Last name',
                    name: 'lastname'
                },
                {
                    xtype: 'textfield',
                    anchor: '100%',
                    fieldLabel: 'First name',
                    name: 'firstname'
                },
                {
                    xtype: 'fieldset',
                    title: 'Visits',
                    items: [
                        {
                            xtype: 'displayfield',
                            anchor: '100%',
                            fieldLabel: 'Last visit',
                            name: 'lastvisit'
                        },
                        {
                            xtype: 'displayfield',
                            anchor: '100%',
                            fieldLabel: 'Visited',
                            name: 'visitcounter'
                        }
                    ]
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    fixed: true,
                    shadow: false,
                    layout: {
                        align: 'bottom',
                        type: 'hbox'
                    },
                    items: [
                        {
                            xtype: 'button',
                            text: 'Enregistrer'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});