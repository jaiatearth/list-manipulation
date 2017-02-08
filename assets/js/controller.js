$(function() {
    var rawData = {};

    $.getJSON('assets/data/data.json', function(data) {
        rawData = data;
        init();
    });

    // Initializing the table formation with data provided..
    function init(){
        for(var i = 0 ; i < rawData.length; i++) {
            listFormation(i, rawData);
        }
    }

    //List formation with data from data.json file....
    function listFormation(i, rawData){
        var rowForming="";
        rowForming += " <tr class=\"redraw bg listItem tr-"+rawData[i].id+"\" data-rowvalue="+rawData[i].id+">";
        rowForming += "                        <td><img src=\"assets\/images\/icons\/expand.svg\" width=\"18\" height=\"12\"\/>&nbsp;"+rawData[i].id+"<\/td>";
        rowForming += "                        <td><img src=\"assets\/images\/icons\/status.svg\" width=\"18\" height=\"18\"\/><\/td>";
        rowForming += "                        <td>"+rawData[i].name+"<\/td>";
        rowForming += "                        <td class=\"progress-1 j\">";
        rowForming += "                            <div align=\"center\" class=\"label\">"+rawData[i].complete+"%<\/div>";
        rowForming += "                            <progress max=\"100\" value="+rawData[i].complete+"><\/progress>";
        rowForming += "                        <\/td>";
        rowForming += "                        <td class=\"progress-2\">";
        rowForming += "                            <div align=\"center\" class=\"label\">"+rawData[i].goal+"%<\/div>";
        rowForming += "                            <progress max=\"100\" value="+rawData[i].goal+"><\/progress>";
        rowForming += "                        <\/td>";
        rowForming += "                        <td>"+rawData[i].revenue+"<\/td>";
        rowForming += "                        <td>"+rawData[i].impressions+"<\/td>";
        rowForming += "                        <td>"+rawData[i].fillrate+"&nbsp;&nbsp;<\/td>";
        rowForming += "                        <td>"+rawData[i].cpm+"<\/td>";
        rowForming += "                        <td class=\"cursor more accordion\" data-more-id=\""+rawData[i].id+"\"><a class=\"toggle\" href=\"javascript:void(0);\"><img src=\"assets\/images\/icons\/more.svg\" width=\"18\" height=\"18\"\/><\/a><\/td>";
        rowForming += "                    <\/tr>";
        rowForming += "                    <tr class=\"redraw\">";
        rowForming += "                        <td class=\"sub-list hide sub-list-"+rawData[i].id+"\" colspan=\"10\" data-sublist-id=\""+rawData[i].id+"\">";
        rowForming += "                            <table width=\"100\" cellpadding=\"16\" class=\"table2\">";
        rowForming += "                                <tr class=\"table-header\">";
        rowForming += "                                    <td class=\"label\">"+rawData[i].name+"<\/td>";
        rowForming += "                                    <td><\/td><td><\/td><td><\/td><td><\/td><td><\/td><td><\/td><td class=\"edit-deal cursor\" data-edit-id=\""+rawData[i].id+"\">EDIT DEAL<\/td>";
        rowForming += "                                <\/tr>";
        rowForming += "                                <tr width=\"100\">";
        rowForming += "                                    <td width=\"12\">";
        rowForming += "                                        <div class=\"value\">"+rawData[i].requests+"<\/div>";
        rowForming += "                                        <span class=\"label\">REQUESTS<\/span>";
        rowForming += "                                    <\/td>";
        rowForming += "                                    <td width=\"12\">";
        rowForming += "                                        <div class=\"value\">"+rawData[i].responses+"<\/div>";
        rowForming += "                                        <span class=\"label\">RESPONSES<\/span>";
        rowForming += "                                    <\/td>";
        rowForming += "                                    <td width=\"12\">";
        rowForming += "                                        <div class=\"value\">"+rawData[i].responserate+"<\/div>";
        rowForming += "                                        <span class=\"label\">RESPONSE RATE<\/span>";
        rowForming += "                                    <\/td>";
        rowForming += "                                    <td width=\"12\">";
        rowForming += "                                        <div class=\"value\">"+rawData[i].impressions+"<\/div>";
        rowForming += "                                        <span class=\"label\">IMPRESSIONS<\/span>";
        rowForming += "                                    <\/td>";
        rowForming += "                                    <td width=\"20\">";
        rowForming += "                                        <div class=\"value\">"+rawData[i].impresssionresponse+"<\/div>";
        rowForming += "                                        <span class=\"label\">IMPRESSION\/RESPONSE<\/span>";
        rowForming += "                                    <\/td>";
        rowForming += "                                    <td width=\"12\">";
        rowForming += "                                        <div class=\"value\">"+rawData[i].fillrate+"<\/div>";
        rowForming += "                                        <span class=\"label\">FILL RATE<\/span>";
        rowForming += "                                    <\/td>";
        rowForming += "                                    <td width=\"12\" class=\"remove-right-border\">";
        rowForming += "                                        <div class=\"value\">"+rawData[i].averagecpm+"<\/div>";
        rowForming += "                                        <span class=\"label\">AVERAGE-CPM<\/span>";
        rowForming += "                                    <\/td>";
        rowForming += "                                    <td class=\"clone-deal cursor\" data-clone-id=\""+rawData[i].id+"\">";
        rowForming += "                                        CLONE DEAL";
        rowForming += "                                    <\/td>";
        rowForming += "                                <\/tr>";
        rowForming += "                                <tr>";
        rowForming += "                                    <td>";
        rowForming += "                                        <div class=\"value\">"+rawData[i].revenue+"<\/div>";
        rowForming += "                                        <span class=\"label\">REVENUE<\/span>";
        rowForming += "                                    <\/td>";
        rowForming += "                                    <td>";
        rowForming += "                                        <div class=\"value\">"+rawData[i].vcr+"<\/div>";
        rowForming += "                                        <span class=\"label\">VCR<\/span>";
        rowForming += "                                    <\/td>";
        rowForming += "                                    <td>";
        rowForming += "                                        <div class=\"value\">"+rawData[i].ctr+"<\/div>";
        rowForming += "                                        <span class=\"label\">CTR<\/span>";
        rowForming += "                                    <\/td>";
        rowForming += "                                    <td>";
        rowForming += "                                        <div class=\"value\">"+rawData[i].avgbid+"<\/div>";
        rowForming += "                                        <span class=\"label\">AVERAGE BID<\/span>";
        rowForming += "                                    <\/td>";
        rowForming += "                                    <td>";
        rowForming += "                                        <div class=\"value\">"+rawData[i].avgbids+"<\/div>";
        rowForming += "                                        <span class=\"label\">AVERAGE # BIDS<\/span>";
        rowForming += "                                    <\/td>";
        rowForming += "                                    <td>";
        rowForming += "                                        <div class=\"value\">"+rawData[i].avgwinningbid+"<\/div>";
        rowForming += "                                        <span class=\"label\">AVERAGE WINNING BID<\/span>";
        rowForming += "                                    <\/td>";
        rowForming += "                                    <td class=\"remove-right-border\">";
        rowForming += "                                        <div class=\"value\">"+rawData[i].avgpremium+"<\/div>";
        rowForming += "                                        <span class=\"label\">AVERAGE PREMIUM TO FLOOR<\/span>";
        rowForming += "                                    <\/td>";
        rowForming += "                                    <td class=\"close cursor\" data-close-id=\""+rawData[i].id+"\">";
        rowForming += "                                        <img src=\"assets\/images\/icons\/close.svg\" width=\"30\" height=\"30\">";
        rowForming += "                                    <\/td>";
        rowForming += "                                <\/tr>";
        rowForming += "                            <\/table>";
        rowForming += "                        <\/td>";
        rowForming += "                    <\/tr>";
        rowForming += "";
        $(".parentList").append(rowForming);
    }

    function editDeal(id){
        $(".popup").removeClass("hide");
        $(".popup__content").html("");
        id = id-1;
        var editString="";
        editString += "<form id=\"edit-form\">";
        editString += "                <div align=\"center\" class=\"list\"><span class=\"label\">REQUESTS<\/span> <input name=\"requests\" type=\"text\" value=\""+rawData[id].requests+"\"\/><\/div>";
        editString += "                <div align=\"center\" class=\"list\"><span class=\"label\">RESPONSES<\/span> <input name=\"responses\" type=\"text\" value=\""+rawData[id].responses+"\"\/><\/div>";
        editString += "                <div align=\"center\" class=\"list\"><span class=\"label\">RESPONSE RATE<\/span> <input name=\"responserate\" type=\"text\" value=\""+rawData[id].responserate+"\"\/><\/div>";
        editString += "                <div align=\"center\" class=\"list\"><span class=\"label\">IMPRESSIONS<\/span> <input name=\"impressions\" type=\"text\" value=\""+rawData[id].impressions+"\"\/><\/div>";
        editString += "                <div align=\"center\" class=\"list\"><span class=\"label\">IMPRESSION\/ RESPONSE<\/span> <input name=\"impresssionresponse\" type=\"text\" value=\""+rawData[id].impresssionresponse+"\"\/><\/div>";
        editString += "                <div align=\"center\" class=\"list\"><span class=\"label\">FILL RATE<\/span> <input name=\"fillrate\" type=\"text\" value=\""+rawData[id].fillrate+"\"\/><\/div>";
        editString += "                <div align=\"center\" class=\"list\"><span class=\"label\">AVERAGE CPM<\/span> <input name=\"averagecpm\" type=\"text\" value=\""+rawData[id].averagecpm+"\"\/><\/div>";
        editString += "                <div align=\"center\" class=\"list\"><span class=\"label\">REVENUE<\/span> <input name=\"revenue\" type=\"text\" value=\""+rawData[id].revenue+"\"\/><\/div>";
        editString += "                <div align=\"center\" class=\"list\"><span class=\"label\">VCR<\/span> <input name=\"vcr\" type=\"text\" value=\""+rawData[id].vcr+"\"\/><\/div>";
        editString += "                <div align=\"center\" class=\"list\"><span class=\"label\">CTR<\/span> <input name=\"ctr\" type=\"text\" value=\""+rawData[id].ctr+"\"\/><\/div>";
        editString += "                <div align=\"center\" class=\"list\"><span class=\"label\">AVERAGE BID<\/span> <input name=\"avgbid\" type=\"text\" value=\""+rawData[id].avgbid+"\"\/><\/div>";
        editString += "                <div align=\"center\" class=\"list\"><span class=\"label\">AVERAGE # BID<\/span> <input name=\"avgbids\" type=\"text\" value=\""+rawData[id].avgbids+"\"\/><\/div>";
        editString += "                <div align=\"center\" class=\"list\"><span class=\"label\">AVERAGE WINNING BID<\/span> <input name=\"avgwinningbid\" type=\"text\" value=\""+rawData[id].avgwinningbid+"\"\/><\/div>";
        editString += "                <div align=\"center\" class=\"list\"><span class=\"label\">AVERAGE PREMIUM TO FLOOR<\/span> <input name=\"avgpremium\" type=\"text\" value=\""+rawData[id].avgpremium+"\"\/><\/div>";
        editString += "";
        editString += "<\/form>";
        editString += " <div align=\"center\" class=\"popup__footer\">";
        editString += "                <input type=\"button\" value=\"SUBMIT CHANGES\" data-submit-id=\""+rawData[id].id+"\" class=\"submit-edit\"\/>";
        editString += "            <\/div>";

        $(".popup__content").append(editString);
    }

    function addDeal(){
        $(".add-deal-popup").removeClass("hide");
        var addString="";
        addString += "<form id=\"add-form\">";
        addString += " <div align=\"center\" class=\"list\"><span class=\"label\">NAME<\/span> <input name=\"name\" type=\"text\" value=\"New Value Direct\"\/><\/div>";
        addString += " <div align=\"center\" class=\"list\"><span class=\"label\">PRIORITY<\/span> <input name=\"priority\" type=\"text\" value=\"6\"\/><\/div>";
        addString += " <div align=\"center\" class=\"list\"><span class=\"label\">STATUS<\/span> <input name=\"status\" type=\"text\" value=\"true\"\/><\/div>";
        addString += " <div align=\"center\" class=\"list\"><span class=\"label\">COMPLETE<\/span> <input  name=\"complete\"type=\"text\" value=\"80\"\/><\/div>";
        addString += " <div align=\"center\" class=\"list\"><span class=\"label\">GOAL<\/span> <input name=\"goal\" type=\"text\" value=\"10\"\/><\/div>";
        addString += " <div align=\"center\" class=\"list\"><span class=\"label\">CPM<\/span> <input name=\"cpm\" type=\"text\" value=\"$125,000,000\"\/><\/div>";
        addString += " ";
        addString += "               <div align=\"center\" class=\"list\"><span class=\"label\">REQUESTS<\/span> <input name=\"requests\" type=\"text\" value=\"12,000\"\/><\/div>";
        addString += "                <div align=\"center\" class=\"list\"><span class=\"label\">RESPONSES<\/span> <input name=\"responses\" type=\"text\" value=\"400,000\"\/><\/div>";
        addString += "                <div align=\"center\" class=\"list\"><span class=\"label\">RESPONSE RATE<\/span> <input name=\"responserate\" type=\"text\" value=\"10\"\/><\/div>";
        addString += "                <div align=\"center\" class=\"list\"><span class=\"label\">IMPRESSIONS<\/span> <input name=\"impressions\" type=\"text\" value=\"10\"\/><\/div>";
        addString += "                <div align=\"center\" class=\"list\"><span class=\"label\">IMPRESSION\/ RESPONSE<\/span> <input name=\"impresssionresponse\" type=\"text\" value=\"10\"\/><\/div>";
        addString += "                <div align=\"center\" class=\"list\"><span class=\"label\">FILL RATE<\/span> <input name=\"fillrate\" type=\"text\" value=\"10\"\/><\/div>";
        addString += "                <div align=\"center\" class=\"list\"><span class=\"label\">AVERAGE CPM<\/span> <input name=\"averagecpm\" type=\"text\" value=\"10\"\/><\/div>";
        addString += "                <div align=\"center\" class=\"list\"><span class=\"label\">REVENUE<\/span> <input name=\"revenue\" type=\"text\" value=\"10\"\/><\/div>";
        addString += "                <div align=\"center\" class=\"list\"><span class=\"label\">VCR<\/span> <input name=\"vcr\" type=\"text\" value=\"10\"\/><\/div>";
        addString += "                <div align=\"center\" class=\"list\"><span class=\"label\">CTR<\/span> <input name=\"ctr\" type=\"text\" value=\"10\"\/><\/div>";
        addString += "                <div align=\"center\" class=\"list\"><span class=\"label\">AVERAGE BID<\/span> <input name=\"avgbid\" type=\"text\" value=\"10\"\/><\/div>";
        addString += "                <div align=\"center\" class=\"list\"><span class=\"label\">AVERAGE # BID<\/span> <input name=\"avgbids\" type=\"text\" value=\"10\"\/><\/div>";
        addString += "                <div align=\"center\" class=\"list\"><span class=\"label\">AVERAGE WINNING BID<\/span> <input name=\"avgwinningbid\" type=\"text\" value=\"10\"\/><\/div>";
        addString += "                <div align=\"center\" class=\"list\"><span class=\"label\">AVERAGE PREMIUM TO FLOOR<\/span> <input name=\"avgpremium\" type=\"text\" value=\"10\"\/><\/div>";
        addString += "<\/form>";
        addString += " <div align=\"center\" class=\"popup__footer\">";
        addString += "                <input type=\"button\" value=\"ADD DEAL\" class=\"submit-add\"\/>";
        addString += "            <\/div>";

        $(".add-deal-popup .popup__content").append(addString);

    }

    //Clone a Existing deal..
    function cloneDeal(rowToClone){
        var rowData = rawData[rowToClone-1];
        rowData.id = rawData.length + 1;
        rawData.push(rowData);
        listFormation(rowData.id-1, rawData);
        closeAccordion(rowToClone);
    }

    //Open ACCORDION on particular list click..
    function openAccordion(rowToExpand){
        for(var i=1;i<=rawData.length;i++){
            if (i === rowToExpand ){
                $(".sub-list-"+rowToExpand).removeClass("hide");
            } else {
                $(".sub-list-"+i).addClass("hide");
            }
        }
    }

    function closeAccordion(rowToClose){
        $(".sub-list-"+rowToClose).addClass("hide");
    }

    function closePopup(){
        $(".popup, .add-deal-popup").addClass("hide");
    }

    function submitEditedDeal(formValues, formId){
        closePopup();
        //Supply the edited values to Actual deals object..
        for(var i = 0;i < formValues.length ; i++) {
            var tempName = formValues[i].name;
            rawData[formId-1][tempName] = formValues[i].value;
        }
        $(".table1 tr.redraw").remove();
        init();
    }

    function submitNewDeal(formValues, formId){
        var newRowData = {};
        formValues = $("#add-form").serializeArray();
        closePopup();
        //Supply the New values to Actual deals object..
        for(var i = 0;i < formValues.length ; i++) {
            var tempName = formValues[i].name;
            newRowData[tempName] = formValues[i].value;
        }
        newRowData["id"] = rawData.length+1;
        rawData.push(newRowData);
        listFormation(formId, rawData);
    }

    function actionEvents(){

        // Edit a Deal content..
        $(document).on("click",".edit-deal", function(){
            editDeal($(this).data("edit-id"));
        });

        // Clone a Deal data..
        $(document).on("click", ".clone-deal", function(){
            cloneDeal($(this).data("clone-id"));
        });

        // Open Accordion..
        $(document).on("click", ".listItem", function(){
            openAccordion($(this).data("rowvalue"));
        });

        //Close Accordion..
        $(document).on("click",".close", function(){
            closeAccordion($(this).data("close-id"));
        });

        //Close POPUP..
        $(document).on("click", ".popup-close", function(){
           closePopup();
        });

        //Submitting Edited values..
        $(document).on("click", ".submit-edit", function(){
            var formValues = {};
            var formId = $(this).data("submit-id");
            formValues = $("#edit-form").serializeArray();
            submitEditedDeal(formValues, formId);
            openAccordion($(this).data("submit-id"));
        });

        $(document).on("click", ".add-deal", function(){
            addDeal();
        });

        //Submitting New deal values values..
        $(document).on("click", ".submit-add", function(){
            var formValues = {};
            var formId = rawData.length;
            formValues = $("#add-form").serializeArray();
            submitNewDeal(formValues, formId);
        });
    }

    //Trigger all aactionEvents here..
    actionEvents();

});