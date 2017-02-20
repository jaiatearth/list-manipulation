(function($) {

    var actionEvents;

    actionEvents = {
        initiator: function(){
            $.getJSON('assets/data/data.json', function(data) {
                window.rawData = data;
                initiate.initList();
            });
            initiate.clickEvents();
        },
        initList : function(){
            for(var i = 0 ; i < rawData.length; i++) {
                seek.listFormation(i, rawData);
            }
        },
        clickEvents : function(){
            // Edit a Deal content..
            $(document).on("click",".edit-deal", function(){
                seek.editDeal($(this).data("edit-id"));
            });

            // Clone a Deal data..
            $(document).on("click", ".clone-deal", function(){
                callTo.cloneDeal($(this).data("clone-id"));
            });

            // Open Accordion..
            $(document).on("click", ".listItem", function(){
                callTo.openAccordion($(this).data("rowvalue"));
            });

            //Close Accordion..
            $(document).on("click",".close", function(){
                callTo.closeAccordion($(this).data("close-id"));
            });

            //Close POPUP..
            $(document).on("click", ".popup-close", function(){
                callTo.closePopup();
            });

            //Submitting Edited values..
            $(document).on("click", ".submit-edit", function(){
                var formValues = {};
                var formId = $(this).data("submit-id");
                formValues = $("#edit-form").serializeArray();
                callTo.submitEditedDeal(formValues, formId);
                callTo.openAccordion($(this).data("submit-id"));
            });

            $(document).on("click", ".add-deal", function(){
                seek.addDeal();
            });

            //Submitting New deal values values..
            $(document).on("click", ".submit-add", function(){
                var formValues = {};
                var formId = rawData.length;
                formValues = $("#add-form").serializeArray();
                callTo.submitNewDeal(formValues, formId);
            });
        }
    };
    window.initiate = actionEvents;
})(this.jQuery);