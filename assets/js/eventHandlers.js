(function($) {
    var eventHandler;
    eventHandler = {
        cloneDeal : function(rowToClone){
            var newObject = JSON.parse(JSON.stringify(rawData));
            var rowData = newObject[rowToClone-1];
            rowData.id = newObject.length + 1;
            rawData.push(rowData);
            $(".table1 tr.redraw, .table2").remove();
            initiate.initList();
        },
        openAccordion : function(rowToExpand){
            for(var i=1;i<=rawData.length;i++){
                if (i === rowToExpand ){
                    $(".sub-list-"+rowToExpand).removeClass("hide");
                } else {
                    $(".sub-list-"+i).addClass("hide");
                }
            }
        },
        closeAccordion : function(rowToClose){
            $(".sub-list-"+rowToClose).addClass("hide");
        },
        closePopup : function(){
            $('.popup input[type="text"], .popup input[type="text"]').val('');
            $(".popup, .add-deal-popup").addClass("hide");
        },
        submitEditedDeal : function (formValues, formId) {
            callTo.closePopup();
            //Supply the edited values to Actual deals object..
            for(var i = 0;i < formValues.length ; i++) {
                var tempName = formValues[i].name;
                rawData[formId-1][tempName] = formValues[i].value;
            }
            $(".table1 tr.redraw").remove();
            initiate.initList();
        },
        submitNewDeal : function(formValues, formId){
            var newRowData = {};
            formValues = $("#add-form").serializeArray();
            callTo.closePopup();
            //Supply the New values to Actual deals object..
            for(var i = 0;i < formValues.length ; i++) {
                var tempName = formValues[i].name;
                newRowData[tempName] = formValues[i].value;
            }
            newRowData["id"] = rawData.length+1;
            rawData.push(newRowData);
            seek.listFormation(formId, rawData);
        }
    };
    window.callTo = eventHandler;
})(this.jQuery);