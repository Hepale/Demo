// Freelancer Theme JavaScript

(function($) {
    "use strict"; // Start of use strict

    var progressBarValue;
    var res, res2;
    var hl7_type;


    $('#searchModal').modal('show');

    $('#xyz-hospital').click(function() {
        $('#searchModal').modal('show');
    });

    $('#show-patients').click(function() {
    	$("#tableBody").empty();
//         $("#btn-text").html('<button type="button" onclick="location.href=\'profile.html\';" id="select_btn" class="btn btn-success btn-sm">SELECT</button>');
//         $("#id").html('1000000');
//         $("#first-name").html('Jane');
//         $("#last-name").html('Doe');
//         $("#dob").html('01/01/1980');
        $('#searchModal').modal('hide');
    });

    $('#select_btn').click(function() {
        location.href = "profile.html";
    });
    
    $('#importccd_btn').click(function() {
        addXML();
        $('#importModal').modal('show');
    });

    $('#import-close-btn').click(function() {
        $('#ccd1').show();
        $('#ccd2').show();
        $('#admission-panel').hide();

        //Addin table contents
        $('#allergies-11').html('Penicillin');
        $('#allergies-12').html('2/13/10');
        $('#allergies-13').html('Hives');
        $('#allergies-14').html('moderate');
        $('#diagnosis-11').html('E11');
        $('#diagnosis-12').html('Type 2 diabetes with mellitus');
        $('#diagnosis-21').html('I10');
        $('#diagnosis-22').html('Essential (primary) hypertension');
        $('#medications-11').html('Lasix');
        $('#medications-12').html('40 MG');
        $('#medications-13').html('PO');
        $('#medications-14').html('BID');
        $('#medications-15').html('7/19/2014');
        $('#medications-16').html('Dr. John Smith');
        $('#medications-21').html('Lisinopril');
        $('#medications-22').html('10 MG');
        $('#medications-23').html('PO');
        $('#medications-24').html('QD');
        $('#medications-25').html('7/19/2014');
        $('#medications-26').html('Dr. Thomas Jones');
        $('#medications-31').html('HumuLIN 70/30');
        $('#medications-32').html('70-30 %');
        $('#medications-33').html('SubQ');
        $('#medications-34').html('QD');
        $('#medications-35').html('4/15/2010');
        $('#medications-36').html('Dr. John Smith');
        $('#results-11').html('HbA1c');
        $('#results-12').html('6/8/16');
        $('#results-13').html('7.2');
        $('#results-21').html('HbA1c');
        $('#results-22').html('6/12/15');
        $('#results-23').html('6.8');
        $('#results-31').html('BMI');
        $('#results-32').html('6/8/16');
        $('#results-33').html('31.09');
        $('#careplans-01').html('Diabetes');
        $('#careplans-02').html('Knowledge Deficit: Diabetes Diet');
        $('#careplans-03').html('Compliance with meal plan');
        $('#careplans-04').html('Instruct on food diary');
        $('#careplans-14').html('Identify eating patters');
        $('#careplans-24').html('Assess diet barriers');
        $('#careplans-33').html('Understand meal planning');
        $('#careplans-34').html('Educate on diet importance');
        $('#careplans-41').html('diabetes');
        $('#careplans-42').html('Tobacco Use');
        $('#careplans-43').html('Understand health risks from tobacco use');
        $('#careplans-44').html('Educate on risk reduction');
        $('#careplans-51').html('');
        $('#careplans-52').html('');
        $('#careplans-53').html('Implements stop smoking plan');
        $('#careplans-54').html('');
        $('#careplans-61').html('');
        $('#careplans-62').html('Knowledge Deficit: Diabetes Complications');
        $('#careplans-63').html('Understands routine health care');
        $('#careplans-64').html('Discuss annual dental exam');
        // Adding headers values
        $('allergies-head-1').html('Allergy');
        $('allergies-head-2').text('Date');
        $('allergies-head-3').html('Reaction');
        $('allergies-head-4').html('Severity');
        $('diagnosis-head-1').html('Diagnosis Code');
        $('diagnosis-head-2').html('Diagnosis Description');
        $('medications-head-1').html('Medication');
        $('medications-head-2').html('dose');
        $('medications-head-3').html('Route');
        $('medications-head-4').html('Frequency');
        $('medications-head-5').html('Start Date');
        $('medications-head-6').html('Prescriber');
        $('results-head-1').html('Name');
        $('results-head-2').html('Date');
        $('results-head-3').html('Value');
        $('careplan-head-1').html('Care Plan');
        $('careplan-head-2').html('Problems');
        $('careplan-head-3').html('Goals');
        $('careplan-head-4').html('Interventions');
    });

    $('#discharge-link').click(function() {
        $('#ccd1').hide();
        $('#ccd2').hide();
        $('#encounters-panel').hide();
        $('#admission-panel').hide();
        $('#discharge-panel').show('slow');
        hl7_type = 13;
    });

    $('#admission-link').click(function() {
        $('#ccd1').hide();
        $('#ccd2').hide();
        $('#encounters-panel').hide();
        $('#admission-panel').show('slow');
        hl7_type = 3;
    });

    $('#submit_btn').click(function() {
        $('#a13').hide();
        $('#a03').show();
        $('#progressRow').hide();
        $('#a03-response').hide();
        $('#a13-response').hide();
        $('#responseDiv').hide();
    });

    $('#submit_btn_discharge').click(function() {
        $('#a03').hide();
        $('#a13').show();
        $('#progressRow').hide();
        $('#a03-response').hide();
        $('#a13-response').hide();
        $('#responseDiv').hide();
    });

    $('#btn-send-casenet').click(function() {
        progressBarValue = 0;
        res = window.setInterval(addProgressBar, 15);
        $('#progressRow').show();
    });

    $('#cancel_btn').click(function(){
        $('#ccd1').show('fast');
        $('#ccd2').show('fast');
        $('#admission-panel').hide('slow');
        $('#admission-panel').hide();
        $('#discharge-panel').hide();
    });

    $('#cancel_btn_encounter').click(function(){
        $('#ccd1').show('fast');
        $('#ccd2').show('fast');
        $('#admission-panel').hide('fast');
        $('#encounters-panel').hide('fast');
        $('#discharge-panel').hide('fast');
    });

    $('#cancel_btn_discharge').click(function(){
        $('#ccd1').show('fast');
        $('#ccd2').show('fast');
        $('#admission-panel').hide('fast');
        $('#encounters-panel').hide('fast');
        $('#discharge-panel').hide('fast');
    });

    $('#encounter-details').click(function() {
        $('#ccd1').hide('fast');
        $('#ccd2').hide('fast');
        $('#admission-panel').hide('slow');
        $('#discharge-panel').hide('slow');
        $('#encounters-panel').show('slow');
    });

    $('#admission-close-btn').click(function() {
        $('#ccd1').show();
        $('#ccd2').show();
        $('#admission-panel').hide();
        $('#encounters-panel').hide();
        $('#discharge-panel').hide();
    });

    $('#encounter-close-btn').click(function() {
        $('#ccd1').show();
        $('#ccd2').show();
        $('#admission-panel').hide();
        $('#encounters-panel').hide();
        $('#discharge-panel').hide();

    });

    function addProgressBar() {
        progressBarValue += 3;
        $('#progress-bar-send').css('width',progressBarValue+"%");
        if (progressBarValue>100) {
            window.clearInterval(res);
            res2 = window.setInterval(function() {
                $('#progressRow').hide();
                $('#progress-bar-send').css('width',"0%");
                if (hl7_type === 3) {
                    $('#a03-response').show();
                    $('#a13-response').hide();
                } else {
                    $('#a03-response').hide();
                    $('#a13-response').show();
                }
                $('#responseDiv').show();
                window.clearInterval(res2);
            }, 500);
        } 
    }
    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){ 
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    });
    
    // Defines the datepicker class
    $('.datepicker').datepicker({
    	format: 'yyyy-mm-dd',
    	timepicker: true,
    	autoclose: true
	});

    // Floating label headings for the contact form
    $(function() {
        $("body").on("input propertychange", ".floating-label-form-group", function(e) {
            $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
        }).on("focus", ".floating-label-form-group", function() {
            $(this).addClass("floating-label-form-group-with-focus");
        }).on("blur", ".floating-label-form-group", function() {
            $(this).removeClass("floating-label-form-group-with-focus");
        });
    });

	// Attach a submit handler to the form
	$( '#searchForm' ).submit(function( event ) {

		console.log( "Before posting");
		//Stop form from submitting normally
		event.preventDefault();
  
		var url = TRUCARE_API + "members-search";

		//Prepare data to send
		var memberSearch = prepareMemberSearch();
	    alert("Message to send:\n"+ memberSearch);

		// Send the data using post 	    
	    callMemberSearch( preparePostTruCare(url, memberSearch) );
	});

	    // To search diagnosis 
    $('#search_diagnosis_btn').click(function(){ 
    		var searchByNameURL = TRUCARE_API + "diagnosis-codes?code=" + document.getElementById('diagnosis').value;
    		$("#diagnosis_search").empty();
            callDiagnosisSearch(prepareGetTruCare(searchByNameURL));
    });

	    // To search procedure 
    $('#search_procedure_btn').click(function(){ 
    		var searchByNameURL = TRUCARE_API + "procedure-codes?code=" + document.getElementById('procedure').value;
    		$("#procedure_search").empty();
            callProcedureSearch(prepareGetTruCare(searchByNameURL));
    });


    function addXML() {
        var xml = 'CCDA' +
            '&lt;?xml version="1.0" encoding="utf-8"?&gt;&lt;?xml-stylesheet type="text/xsl" href="CECDocDisplay.xsl"?&gt;<br/>' +
            '&lt;ClinicalDocument xmlns="urn:hl7-org:v3"&gt;<br/>' +
            '&lt;realmCode code="US"/&gt;<br/>' +
            '&lt;typeId extension="POCD_HD000040" root="2.16.840.1.113883.1.3"/&gt;<br/>' +
            '&lt;templateId root="1.2.840.114350.1.72.1.51693"/&gt;<br/>' +
            '&lt;templateId root="2.16.840.1.113883.10.20.22.1.1"/&gt;<br/>' +
            '&lt;templateId root="2.16.840.1.113883.10.20.22.1.2"/&gt;<br/>' +    
            '&lt;id assigningAuthorityName="EPC" root="1.2.840.114350.1.13.2.1.7.8.688883.8676"/&gt;<br/>' +
            '&lt;code code="34133-9" codeSystem="2.16.840.1.113883.6.1" codeSystemName="LOINC"        displayName="Summarization of Episode Note"/&gt;<br/>' +
            '&lt;title&gt;Continuity of Care Document&lt;/title&gt;<br/>' +
            '&lt;effectiveTime value="20170209174507-0500"/&gt;<br/>' +
            '&lt;confidentialityCode code="N" codeSystem="2.16.840.1.113883.5.25"/&gt;<br/>' +
            '&lt;languageCode code="en-US"/&gt;<br/>' +
            '&lt;setId assigningAuthorityName="EPC" extension="33d3ee6f-3d64-459d-9816-3ad01822cb93"        root="1.2.840.114350.1.13.2.1.7.1.1"/&gt;<br/>' +
            '&lt;versionNumber value="2"/&gt;<br/>'+
            '&lt;recordTarget&gt;<br/>'+
            '&lt;patientRole&gt;<br/>'+
            '&lt;id root="1.2.840.114350.1.13.2.1.7.5.737384.0" extension="E240921"/&gt;<br/>'+
            '&lt;addr use="HP"&gt;<br/>';
        $('#ccda_xml').html(xml);
    }
})(jQuery); // End of use strict

function fillSelectors(){
	var url = TRUCARE_API + "inpatient-authorization-configuration";
	
	var response = getVariables(prepareGetTruCare())
	//alert(response);
}

function prepareGetTruCare(url){
	
	// Get some values from elements on the page
	var settings = 
	{
	  "async": true,
	  "crossDomain": true,
	  "url": url,	  
		"username":"Tesch",
		"password":"Password1", 
	  "method": "GET",
	  "headers": {
		"Authorization": "Basic " + btoa("Tesch:Password1")
	  }	  
	};

	return settings;

}
function preparePostTruCare(url, dataJson){
	
	// Get some values from elements on the page
	var settings = 
	{
		"async": true,
	    "crossDomain": true,
	    "url": url,
		"method": "POST",
	    "xhrFields": {
	        "withCredentials": true
	    },
	    "headers": {
	    	"content-type": "application/json",	    	
	        "Authorization": "Basic " + btoa("Tesch:Password1")
	    },
	    "processData": false,
	    "data": dataJson
	};

	return settings;

}

function getVariables(settings){
		//Response of call to Trucare API
	$.ajax(settings).done(
			function(response) {
				alert(response);
			}
	);

}

function callProcedureSearch(settings){
	//Response of call to Trucare API
	$.ajax(settings).done(
			function(response) {
				for (var i in response){
					   $('<option/>').val(response[i].procedureCode).html(response[i].procedureName).appendTo('#procedure_search');
				}				
			});		
}

function callDiagnosisSearch(settings){
	//Response of call to Trucare API
	$.ajax(settings).done(
			function(response) {
				for (var i in response){
					   $('<option/>').val(response[i].diagnosisCode).html(response[i].diagnosisName).appendTo('#diagnosis_search');
				}				
			});		
}

function callMemberSearch(settings){
	//Response of call to Trucare API
	$.ajax(settings).done(
			function(response) {
				var buttonProfile = "<td style=\"text-align: center\" id=\"btn-text\" >"
						+ "<button type=\"button\" onclick=\"location.href=\'profile.html\';\" id=\"select_btn\" class=\"btn btn-success btn-sm\">SELECT</button>"
						+ "</td>";

				//Fake profile
				var newRow = document.createElement('tr');
				newRow.innerHTML += buttonProfile + 
						"<td>" + '1000000' + "</td>" + 
						"<td>" + 'Jane' + "</td>" + 
						"<td>" + 'Doe' + "</td>" + 
						"<td>" + '1959-03-03' + "</td>";

				document.getElementById('tableBody').appendChild(newRow);

				// Profiles from Trucare
				for ( var i in response.searchResults) {
					var newRow = document.createElement('tr');
					newRow.innerHTML += buttonProfile + 
							"<td>" + response.searchResults[i].externalMemberId + "</td>" + 
							"<td>" + response.searchResults[i].firstName + "</td>" + 
							"<td>" + response.searchResults[i].lastName + "</td>" + 
							"<td>" + response.searchResults[i].dateOfBirth + "</td>";

					document.getElementById('tableBody').appendChild(newRow);
				}
			});		
}

function prepareMemberSearch(){
	var elements = '';
	if (document.getElementById('patient_id').value.length != 0){
		elements += '"externalMemberId" : "'+ 
			document.getElementById('patient_id').value +
			'",\r\n';
	}
	if (document.getElementById('first_name').value.length != 0){
		elements += '"firstName" : "'+ 
			document.getElementById('first_name').value +
			'",\r\n';
	}
	if (document.getElementById('last_name').value.length != 0){
		elements += '"lastName" : "'+ 
			document.getElementById('last_name').value +
			'",\r\n';
	}
	if (document.getElementById('_dob').value.length != 0){
		elements += '"dob" : "'+ 
			document.getElementById('_dob').value +
			'",\r\n';
	}
	
	var value01 = '{"startIndex" : 0,"length" : 10,\r\n';
	var value02 = '"gotoLastPage" : false}'

	var values = value01 + elements + value02
	return values;						
}
	
var TRUCARE_API = "http://Tesch:Password1@50.225.27.88:9080/trucare-api-6.2.0.TC620/6.2.0/api/";		

document.getElementById('searchForm').addEventListener('submit', performPostRequest);

function performPostRequest(e) {
  var memberSearch = prepareMemberSearch();
  alert("Message to send:\n"+ memberSearch);
axios({
    url: TRUCARE_API + "members-search",
    method: 'post',
    headers: {'Content-type': 'application/json; charset=UTF-8'},
    data: memberSearch
}).then(onGradeResult, onGradeError)
	
}


//XMLHttpRequest cannot load http://50.225.27.88:9080/trucare-api-6.2.0.TC620/6.2.0/api/members-search. Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'null' is therefore not allowed access. The response had HTTP status code 401.  
	//Response of call to Trucare API
// 	$.ajax(settings).done(
// 			function(response) {
// 				var buttonProfile = "<td style=\"text-align: center\" id=\"btn-text\" >"
// 						+ "<button type=\"button\" onclick=\"location.href=\'profile.html\';\" id=\"select_btn\" class=\"btn btn-success btn-sm\">SELECT</button>"
// 						+ "</td>";
// 
// 				//Fake profile
// 				var newRow = document.createElement('tr');
// 				newRow.innerHTML += buttonProfile + 
// 						"<td>" + '1000000' + "</td>" + 
// 						"<td>" + 'Jane' + "</td>" + 
// 						"<td>" + 'Doe' + "</td>" + 
// 						"<td>" + '1959-03-03' + "</td>";
// 
// 				document.getElementById('tableBody').appendChild(newRow);
// 
// 				// Profiles from Trucare
// 				for ( var i in response.searchResults) {
// 					var newRow = document.createElement('tr');
// 					newRow.innerHTML += buttonProfile + 
// 							"<td>" + response.searchResults[i].externalMemberId + "</td>" + 
// 							"<td>" + response.searchResults[i].firstName + "</td>" + 
// 							"<td>" + response.searchResults[i].lastName + "</td>" + 
// 							"<td>" + response.searchResults[i].dateOfBirth + "</td>";
// 
// 					document.getElementById('tableBody').appendChild(newRow);
// 				}
// 			});		
