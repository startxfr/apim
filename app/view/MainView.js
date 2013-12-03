/*
 * File: app/view/MainView.js
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

Ext.define('sxapim.view.MainView', {
    extend: 'Ext.container.Viewport',

    itemId: 'mainView',
    layout: {
        type: 'border'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'container',
                    region: 'north',
                    height: 50,
                    html: '<h1>SXAPIM</h1>',
                    itemId: 'topPanel',
                    layout: {
                        align: 'center',
                        pack: 'center',
                        type: 'vbox'
                    }
                },
                {
                    xtype: 'panel',
                    flex: 1,
                    region: 'west',
                    split: true,
                    frame: true,
                    itemId: 'menuPanel',
                    collapseDirection: 'left',
                    collapsed: false,
                    collapsible: true,
                    title: 'Menu',
                    titleCollapse: true,
                    items: [
                        {
                            xtype: 'menu',
                            floating: false,
                            itemId: 'mainMenu',
                            items: [
                                {
                                    xtype: 'menuitem',
                                    itemId: 'home',
                                    text: 'Home'
                                },
                                {
                                    xtype: 'menuitem',
                                    itemId: 'users',
                                    text: 'Users'
                                },
                                {
                                    xtype: 'menuitem',
                                    itemId: 'about',
                                    text: 'About Us'
                                },
                                {
                                    xtype: 'menuitem',
                                    itemId: 'contact',
                                    text: 'Contact us'
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'tabpanel',
                    flex: 3,
                    region: 'center',
                    itemId: 'mainPanel',
                    animCollapse: false,
                    closeAction: 'hide',
                    collapsed: false,
                    items: [
                        {
                            xtype: 'panel',
                            autoScroll: true,
                            closable: true,
                            title: 'Pictos glyphs examples',
                            listeners: {
                                beforerender: {
                                    fn: me.onGlyphPictosPanelBeforeRender,
                                    scope: me
                                }
                            }
                        },
                        {
                            xtype: 'panel',
                            autoScroll: true,
                            closable: true,
                            title: 'Sosa glyphs examples',
                            listeners: {
                                beforerender: {
                                    fn: me.onGlyphSosaPanelBeforeRender,
                                    scope: me
                                }
                            }
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    },

    onGlyphPictosPanelBeforeRender: function(component, eOpts) {
        var buttons = [];
        for (var i = 33;i < 1416; i++) {
            buttons.push({
                xtype: "button",
                text: i,
                scale: 'medium',
                glyph: i + '@Pictos'
            });
        }
        component.add(buttons);
    },

    onGlyphSosaPanelBeforeRender: function(component, eOpts) {
        var buttons = [];
        for (var i = 33;i < 1416; i++) {
            buttons.push({
                xtype: "button",
                text: i,
                scale: 'medium',
                glyph: i + '@Sosa'
            });
        }
        component.add(buttons);
    }

});