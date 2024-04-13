sap.ui.define(
	[
		"sap/dm/dme/podfoundation/extension/PluginExtensionProvider",
		"sap/coreplugin/extensions/worklistExtensionProvider/CreateExtension",
		"sap/coreplugin/extensions/worklistExtensionProvider/LifecycleExtension",
		"sap/coreplugin/extensions/worklistExtensionProvider/PluginEventExtension",
		"sap/coreplugin/extensions/worklistExtensionProvider/PropertyEditorExtension",
		"sap/coreplugin/extensions/utils/ExtensionUtilities"
	],
	function (
		PluginExtensionProvider,
		CreateExtension,
		LifecycleExtension,
		PluginEventExtension,
		PropertyEditorExtension,
		ExtensionUtilities
	) {
		"use strict";
		return PluginExtensionProvider.extend(
			"sap.coreplugin.extensions.worklistExtensionProvider.ExtensionProvider",
			{
				constructor: function () {
					this.oExtensionUtilities = new ExtensionUtilities();
				},
				getExtensions: function () {
					return [
						new CreateExtension(this.oExtensionUtilities),
						new LifecycleExtension(this.oExtensionUtilities),
						new PluginEventExtension(this.oExtensionUtilities),
						new PropertyEditorExtension(this.oExtensionUtilities),
					];
				},
			},
		);
	},
);
