sap.ui.define([
    "sap/dm/dme/podfoundation/extension/PluginPropertyEditorExtension",
    "sap/ui/model/json/JSONModel"
], function (PluginPropertyEditorExtension,JSONModel) {
    "use strict";

    return PluginPropertyEditorExtension.extend("sap.coreplugin.extensions.worklistExtensionProvider.PropertyEditorExtension", {
        constructor: function (oExtensionUtilities) {
            this._oExtensionUtilities = oExtensionUtilities;
            this.oModel = new JSONModel()
        },

        /*
         * Function to override to add content before core properties
         *
         * @param {sap.ui.layout.form.SimpleForm} oPropertyFormContainer Form to add controls to
         * @param {object} oPropertyData Defined Property Data
         * @override
         */
        addPropertyEditorContentBefore: function (oPropertyFormContainer, oPropertyData) {
            let defaultData = this.getDefaultPropertyData();
            for(let key in oPropertyData){
                if(oPropertyData[key]===undefined){
                    oPropertyData[key] = defaultData[key]
                }
            }
            this.oModel.setData(oPropertyData)
            oPropertyFormContainer.setModel(this.oModel,'props');
            // to be implemented by sub-classes
            this._oExtensionUtilities.logMessage("PropertyEditorExtension.addPropertyEditorContentBefore: hi");
            return;
        },

        /*
         * Function to override to add content after core properties
         *
         * @param {sap.ui.layout.form.SimpleForm} oPropertyFormContainer Form to add controls to
         * @param {object} oPropertyData Defined Property Data
         * @override
         */
        addPropertyEditorContentAfter: function (oPropertyFormContainer, oPropertyData) {
            // to be implemented by sub-classes
            this._oExtensionUtilities.logMessage("PropertyEditorExtension.addPropertyEditorContentAfter: hi");
            oPropertyFormContainer.addContent(new sap.m.Label({
                text:"Custom Field"
            }))

            oPropertyFormContainer.addContent(new sap.m.Input({
                value:"{props>/customVal}",//oPropertyData.customVal ||this.getDefaultPropertyData().customVal,
                change:(oEvent)=>{
                    let sVal = oEvent.getSource().getValue()
                    //oPropertyData.customVal = sVal;
                    //this.setPropertyData(oPropertyData)
                }
            }))
            return;
        },

        /*
         * Function to override to add custom default property values to core property data
         *
         * @param {object} oPropertyData Defined Property Data
         * @returns {object} Updated Property Data
         * @override
         */
        getPropertyData: function (oPropertyData) {
            // to be implemented by sub-classes
            this._oExtensionUtilities.logMessage("PropertyEditorExtension.getPropertyData: hi");
            return oPropertyData;
        },

        /*
         * Function to override to add custom default property values to core property data
         *
         * @param {object} oPropertyData Defined Property Data
         * @returns {object} Updated Property Data
         * @override
         */
        setPropertyData: function (oPropertyData) {
            // to be implemented by sub-classes
            this._oExtensionUtilities.logMessage("PropertyEditorExtension.setPropertyData: hi");
            return oPropertyData;
        },

        /*
         * Function to override to add custom default property values
         *
         * @param {object} oPropertyData Defined Property Data
         * @returns {object} Updated Property Data
         * @override
         */
        getDefaultPropertyData: function (oPropertyData) {
            // to be implemented by sub-classes
            this._oExtensionUtilities.logMessage("PropertyEditorExtension.getDefaultPropertyData: hi");
            oPropertyData = oPropertyData||{}
            oPropertyData.customVal = "TEST1"
            return oPropertyData;
        }
    })
});
