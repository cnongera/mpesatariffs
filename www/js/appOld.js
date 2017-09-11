(function($) {
    "use strict";

    var calcTMpesa = function() {
        var cashMoney = Number( $('#mPesaAmount').val() );

        if (cashMoney>0 && cashMoney<10) {

            $('#totalAmount').text('Mpesa does not allow you to withdraw or send less than Kes 10. ' );
            //$('p').text()
               
            }
/***
jQuery(function($){ // Pass jQuery a function.
// Pass jQuery a string of HTML.
$('<p></p>').appendTo('body');
// Pass jQuery an element reference.
$(document.createElement('a')).text('jQuery').appendTo('p');
// Pass jQuery a CSS expression.
$('a:first').attr('href', 'http://www.jquery.com');
// Pass jQuery a DOM reference.
$(document.anchors[0]).attr('jQuery');


            (function ($) {
$('div').text('I am a div');
})(jQuery);

(function ($) {
// Alerts jQuery is the best!
alert($('div, p, ul li').text());
// Inefficient way. Alerts jQuery is the best!
alert($('div').text() + $('p').text() + $('ul li').text());

.append('<p>Chaining still works!</p>');

***/
    //cashMoney>10 && cashMoney<=49   3   N/A N/A
        else if (cashMoney>10 && cashMoney<=49) {
            var registered = 1;
            var unregistered = 'N/A';
            var agent = 'N/A';
            var ATM = 'N/A';
            var totalToSend = cashMoney + registered + agent;
            var totalCost = cashMoney + registered;
            var payBill = 3;
            //var string;
            //string = "<br />";
            
            /***
            $('#totalAmount').text('Sending Kes ' + cashMoney.toFixed(2) + ' to registered Mpesa User is Kes '+ registered.toFixed(2)
                + 'Withdraw From ATM is Kes ' + ATM.toFixed(2) '<br/>'
                + 'Withdraw From Agent is Kes ' + agent.toFixed(2) '<br/>'

                );
            ***/
            //$('#totalAmount').text('Kes ' + totalToSend.toFixed(2));
            /***$('#totalAmount').text('Kes ' + totalToSend.toFixed(2));
            $('#totalAmount').text('Kes ' + totalToSend.toFixed(2));
            $('#totalAmount').text('Kes ' + totalToSend.toFixed(2));

            /***/
            //$('#totalAmount').text('Kes ' + totalToSend.toFixed(2));
            $('#totalAmount').text('Sending Kes ' + cashMoney.toFixed(2) + ' to registered Mpesa User is Kes '+ registered.toFixed(2) + 
             '.Send to unregistered Mpesa User is Kes ' + unregistered.toFixed(2) + 
             '.Withdraw From Agent is Kes ' + agent.toFixed(2) + '.Withdraw From ATM is Kes ' + ATM.toFixed(2) + 
              '.Total To Send is Kes '+ totalToSend.toFixed(2) + '.Total Cost is Kes ' + totalCost.toFixed(2) +  '. Paybill Amount is Kes '+ payBill.toFixed(2)  );
            /***/
            /***
            $('#totalAmount').text('Sending Kes ' + cashMoney.toFixed(2) + ' to registered Mpesa User is Kes '+ registered.toFixed(2) + 
             '.Send to unregistered Mpesa User is Kes ' + unregistered.toFixed(2) + 
             '.Withdraw From Agent is Kes ' + agent.toFixed(2) + '.Withdraw From ATM is Kes ' + ATM.toFixed(2) + 
              '.Total To Send is Kes '+ totalToSend.toFixed(2) + '.Total Cost is Kes ' + totalCost.toFixed(2) );
            ***/

            //myDiv.innerHTML += "Request status: 1 (loading) <br/>";
            //alert("Can't connect to server:\n" + e.toString());
            /***
            $('#totalAmount').text('Sending Kes ' + cashMoney.toFixed(2) + ' to a Registered Mpesa User is Kes ' + registered.toFixed(2) +   
            '. Total transaction Cost is Kes ' + totalCost.toFixed(2) + '. You cannot send  Kes ' + cashMoney.toFixed(2) +  
            ' to UnRegistered Mpesa User. You cannot Withdraw  Kes  '  + cashMoney.toFixed(2) + 
            ' from Mpesa Agent or from an ATM Machine.');     
            ***/
        }

    //cashMoney==50 && cashMoney<=50 50 5 N/A 10
        else if (cashMoney==50 && cashMoney<=100) {
            var registered = 1;
            var unregistered = 'N/A';
            var agent = 10;
            var ATM = 'N/A';
            var totalToSend = cashMoney + registered + agent;
            var totalCost = cashMoney + registered;
            var payBill = 0;


            $('#totalAmount').text('Sending Kes ' + cashMoney.toFixed(2) + ' to registered Mpesa User is Kes '+ registered.toFixed(2) + 
             '. Send to unregistered Mpesa User is Kes ' + unregistered.toFixed(2) + 
             '. Withdraw From Agent is Kes ' + agent.toFixed(2) + '. Withdraw From ATM is Kes ' + ATM.toFixed(2) + 
              '. Total To Send is Kes '+ totalToSend.toFixed(2) + '. Total Cost is Kes ' + totalCost.toFixed(2)+  '. Paybill Amount is Kes '+ payBill.toFixed(2)  );

            /****
            Change Please.
            'Sending Kes  ' +cashMoney.toFixed(2) +' to a Registered Mpesa User is Kes '+registered.toFixed(2) +'+ Total transaction Cost is Kes  '+ totalCost.toFixed(2);
            '<br />You cannot send  Kes  '+cashMoney.toFixed(2)+' to UnRegistered Mpesa User+';
            '<br /> You cannot Withdraw  Kes  ' +cashMoney.toFixed(2)+ ' from Mpesa Agent or from an ATM Machine+';
           
            $('#totalAmount').text('Sending Kes ' + cashMoney.toFixed(2) + ' to a Registered Mpesa User is Kes '+ registered.toFixed(2) + 
            '. Total to send is Kes ' + totalToSend.toFixed(2) + '. You cannot send  Kes ' + cashMoney.toFixed(2) + 
            ' to UnRegistered Mpesa User. Registered Mpesa User can Withdraw  Kes ' + cashMoney.toFixed(2) + 
            ' from Mpesa Agent for Kes ' + agent.toFixed(2) + '. Your Total Tansaction Cost is Kes  ' + totalCost.toFixed(2) + 
            '. Total Amount Deducted is Kes  ' +totalToSend.toFixed(2));
        ***/

        }

        //cashMoney>50   && cashMoney<=100    5   N/A 10
        else if (cashMoney>101 && cashMoney<=500) {
            var registered = 11;
            var unregistered = 44;
            var agent = 27;
            var ATM = 33;
            var totalToSend = cashMoney + registered + agent;
            var totalCost = cashMoney + registered;
            var payBill = 5;

            $('#totalAmount').text('Sending Kes ' + cashMoney.toFixed(2) + ' to registered Mpesa User is Kes '+ registered.toFixed(2) + 
             '. Send to unregistered Mpesa User is Kes ' + unregistered.toFixed(2) + 
             '. Withdraw From Agent is Kes ' + agent.toFixed(2) + '. Withdraw From ATM is Kes ' + ATM.toFixed(2) + 
              '. Total To Send is Kes '+ totalToSend.toFixed(2) + '. Total Cost is Kes ' + totalCost.toFixed(2)+  '. Paybill Amount is Kes '+ payBill.toFixed(2)  );

            //$('#totalAmount').text('Kes ' + totalToSend.toFixed(2));
/***
        $('#totalAmount').text('Sending Kes  ' +cashMoney.toFixed(2) +' to a Registered Mpesa User is Kes '+registered.toFixed(2)+
        '+ Total to send is Kes  ' +$totalToSend + '. You cannot send  Kes  '+cashMoney.toFixed(2)+
        ' to UnRegistered Mpesa User. Registered Mpesa User can Withdraw  Kes  ' +cashMoney.toFixed(2)+ 
        ' from Mpesa Agent for Kes  '+ agent.toFixed(2) + 'Your Total Tansaction Cost is Kes  '+ totalCost.toFixed(2) + 
        ' Total Amount Deducted is Kes  '+ $totalToSend.toFixed(2) );
    // '<br />Unregistered User cannot cannot Withdraw  Kes  '+cashMoney.toFixed(2)+' to UnRegistered Mpesa User+';
**/
        }


//cashMoney>101  && cashMoney<=500 27  66  27
    else if(cashMoney>501 && cashMoney<=1000) {
    var registered = 15;
    var unregistered = 48;//t
    var agent = 27;
    var ATM =  33; 
    var totalToSend = cashMoney + registered + agent;
    var totalToSendUr = cashMoney + unregistered + agent;
    var totalCost = cashMoney + registered;
    var payBill = 22;

    $('#totalAmount').text('Sending Kes ' + cashMoney.toFixed(2) + ' to registered Mpesa User is Kes '+ registered.toFixed(2) + 
             '. Send to unregistered Mpesa User is Kes ' + unregistered.toFixed(2) + 
             '. Withdraw From Agent is Kes ' + agent.toFixed(2) + '. Withdraw From ATM is Kes ' + ATM.toFixed(2) + 
              '. Total To Send is Kes '+ totalToSend.toFixed(2) + '. Total To Send to unregistered User is Kes '+ totalToSendUr.toFixed(2) +  '. Paybill Amount is Kes '+ payBill.toFixed(2)  );

    //$('#totalAmount').text('Kes ' + totalToSend.toFixed(2));
/***

     'Withdraw Kes ' +cashMoney.toFixed(2)+  ' From Mpesa Agent is Kes ' +agent.toFixed(2)+ ', For Amounts greater than Kes 200, ATM withdrawal is Kes ' +$ATM;
     ' Transaction Costs for Kes ' +cashMoney.toFixed(2)+ ': Registered is Kes ' +registered.toFixed(2)+  '+  UnRegistered is Kes ' +unregistered.toFixed(2) ;
     'Total to send Kes ' +cashMoney.toFixed(2)+ ' : Registered is Kes ' +$totalToSendR+  '+  UnRegistered is Kes ' +$totalToSendUr ;
     'For Kes ' +cashMoney.toFixed(2)+  '+ Total Tansaction Cost : Registered  is Kes ' +totalCost.toFixed(2)R+ '+  UnRegistered is Kes ' +totalCost.toFixed(2)Ur;
     'For Kes ' +cashMoney.toFixed(2)+ '+ Total Amount Deducted : Registered is Kes ' +$totalToSendR+ '+  UnRegistered is Kes ' +$totalToSendUr;
**/
        }

//cashMoney>501  && cashMoney<=1000    33  66  27
    else if(cashMoney>1001 && cashMoney<=1500) {
    var registered = 25;
    var unregistered = 58;//t
    var agent = 27;
    var ATM =  33; 
    var totalToSend = cashMoney + registered + agent;
    var totalToSendUr = cashMoney + unregistered + agent;
    var totalCost = cashMoney + registered;
    var payBill = 22;

    $('#totalAmount').text('Sending Kes ' + cashMoney.toFixed(2) + ' to registered Mpesa User is Kes '+ registered.toFixed(2) + 
             '. Send to unregistered Mpesa User is Kes ' + unregistered.toFixed(2) + 
             '. Withdraw From Agent is Kes ' + agent.toFixed(2) + '. Withdraw From ATM is Kes ' + ATM.toFixed(2) + 
              '. Total To Send is Kes '+ totalToSend.toFixed(2) + '. Total To Send to unregistered User is Kes '+ totalToSendUr.toFixed(2) +  '. Paybill Amount is Kes '+ payBill.toFixed(2)  );

/***
     'Withdraw Kes ' +cashMoney.toFixed(2)+  ' From Mpesa Agent is Kes ' +agent.toFixed(2)+ ', From ATM is Kes ' +$ATM;
     ' Transaction Costs for Kes ' +cashMoney.toFixed(2)+ ': Registered is Kes ' +registered.toFixed(2)+  '+  UnRegistered is Kes ' +unregistered.toFixed(2) ;
     'Total to send Kes ' +cashMoney.toFixed(2)+ ' : Registered is Kes ' +$totalToSendR+  '+  UnRegistered is Kes ' +$totalToSendUr ;
     'For Kes ' +cashMoney.toFixed(2)+  '+ Total Tansaction Cost : Registered  is Kes ' +totalCost.toFixed(2)R+ '+  UnRegistered is Kes ' +totalCost.toFixed(2)Ur;
     'For Kes ' +cashMoney.toFixed(2)+ '+ Total Amount Deducted : Registered is Kes ' +$totalToSendR+ '+  UnRegistered is Kes ' +$totalToSendUr;
**/
        }

//cashMoney>1001 && cashMoney<=1500   33  66  27
    else if(cashMoney>1501   && cashMoney<=2500) {
    var registered = 40 ;
    var unregistered = 73;//t
    var agent = 27;
    var ATM =  33; 
    var totalToSend = cashMoney + registered + agent;
    var totalToSendUr = cashMoney + unregistered + agent;
    var totalCost = cashMoney + registered;
    var payBill = 33;

    $('#totalAmount').text('Sending Kes ' + cashMoney.toFixed(2) + ' to registered Mpesa User is Kes '+ registered.toFixed(2) + 
             '. Send to unregistered Mpesa User is Kes ' + unregistered.toFixed(2) + 
             '. Withdraw From Agent is Kes ' + agent.toFixed(2) + '. Withdraw From ATM is Kes ' + ATM.toFixed(2) + 
              '. Total To Send is Kes '+ totalToSend.toFixed(2) + '. Total To Send to unregistered User is Kes '+ totalToSendUr.toFixed(2) +  '. Paybill Amount is Kes '+ payBill.toFixed(2)  );

/***

     'Withdraw Kes ' +cashMoney.toFixed(2)+  ' From Mpesa Agent is Kes ' +agent.toFixed(2)+ ', From ATM is Kes ' +$ATM;
     ' Transaction Costs for Kes ' +cashMoney.toFixed(2)+ ': Registered is Kes ' +registered.toFixed(2)+  '+  UnRegistered is Kes ' +unregistered.toFixed(2) ;
     'Total to send Kes ' +cashMoney.toFixed(2)+ ' : Registered is Kes ' +$totalToSendR+  '+  UnRegistered is Kes ' +$totalToSendUr ;
     'For Kes ' +cashMoney.toFixed(2)+  '+ Total Tansaction Cost : Registered  is Kes ' +totalCost.toFixed(2)R+ '+  UnRegistered is Kes ' +totalCost.toFixed(2)Ur;
     'For Kes ' +cashMoney.toFixed(2)+ '+ Total Amount Deducted : Registered is Kes ' +$totalToSendR+ '+  UnRegistered is Kes ' +$totalToSendUr;
 
**/
        }

//cashMoney>1501 && cashMoney<=2500   33  66  27
    else if(cashMoney>2501   && cashMoney<=3500) {
    var registered = 55 ;
    var unregistered = 110;//t
    var agent = 49;
    var ATM =  66; 
    var totalToSend = cashMoney + registered + agent;
    var totalToSendUr = cashMoney + unregistered + agent;
    var totalCost = cashMoney + registered;
    var payBill = 33;

    $('#totalAmount').text('Sending Kes ' + cashMoney.toFixed(2) + ' to registered Mpesa User is Kes '+ registered.toFixed(2) + 
             '. Send to unregistered Mpesa User is Kes ' + unregistered.toFixed(2) + 
             '. Withdraw From Agent is Kes ' + agent.toFixed(2) + '. Withdraw From ATM is Kes ' + ATM.toFixed(2) + 
              '. Total To Send is Kes '+ totalToSend.toFixed(2) + '. Total To Send to unregistered User is Kes '+ totalToSendUr.toFixed(2) +  '. Paybill Amount is Kes '+ payBill.toFixed(2)  );

/***  

     'Withdraw Kes ' +cashMoney.toFixed(2)+  ' From Mpesa Agent is Kes ' +agent.toFixed(2)+ ', From ATM is Kes ' +$ATM;
     ' Transaction Costs for Kes ' +cashMoney.toFixed(2)+ ': Registered is Kes ' +registered.toFixed(2)+  '+  UnRegistered is Kes ' +unregistered.toFixed(2) ;
     'Total to send Kes ' +cashMoney.toFixed(2)+ ' : Registered is Kes ' +$totalToSendR+  '+  UnRegistered is Kes ' +$totalToSendUr ;
     'For Kes ' +cashMoney.toFixed(2)+  '+ Total Tansaction Cost : Registered  is Kes ' +totalCost.toFixed(2)R+ '+  UnRegistered is Kes ' +totalCost.toFixed(2)Ur;
     'For Kes ' +cashMoney.toFixed(2)+ '+ Total Amount Deducted : Registered is Kes ' +$totalToSendR+ '+  UnRegistered is Kes ' +$totalToSendUr;
 **/
        }

//cashMoney>2501 && cashMoney<=3500   33  88  49
    else if(cashMoney>3501   && cashMoney<=5000) {
    var registered = 60;
    var unregistered = 132;//t
    var agent = 66;
    var ATM =  66; 
    var totalToSend = cashMoney + registered + agent;
    var totalToSendUr = cashMoney + unregistered + agent;
    var totalCost = cashMoney + registered;
    var payBill = 55;

    $('#totalAmount').text('Sending Kes ' + cashMoney.toFixed(2) + ' to registered Mpesa User is Kes '+ registered.toFixed(2) + 
             '. Send to unregistered Mpesa User is Kes ' + unregistered.toFixed(2) + 
             '. Withdraw From Agent is Kes ' + agent.toFixed(2) + '. Withdraw From ATM is Kes ' + ATM.toFixed(2) + 
              '. Total To Send is Kes '+ totalToSend.toFixed(2) + '. Total To Send to unregistered User is Kes '+ totalToSendUr.toFixed(2) +  '. Paybill Amount is Kes '+ payBill.toFixed(2)  );

/***

     'Withdraw Kes ' +cashMoney.toFixed(2)+  ' From Mpesa Agent is Kes ' +agent.toFixed(2)+ ', From ATM is Kes ' +$ATM;
     ' Transaction Costs for Kes ' +cashMoney.toFixed(2)+ ': Registered is Kes ' +registered.toFixed(2)+  '+  UnRegistered is Kes ' +unregistered.toFixed(2) ;
     'Total to send Kes ' +cashMoney.toFixed(2)+ ' : Registered is Kes ' +$totalToSendR+  '+  UnRegistered is Kes ' +$totalToSendUr ;
     'For Kes ' +cashMoney.toFixed(2)+  '+ Total Tansaction Cost : Registered  is Kes ' +totalCost.toFixed(2)R+ '+  UnRegistered is Kes ' +totalCost.toFixed(2)Ur;
     'For Kes ' +cashMoney.toFixed(2)+ '+ Total Amount Deducted : Registered is Kes ' +$totalToSendR+ '+  UnRegistered is Kes ' +$totalToSendUr;
 
 **/
        }

//cashMoney>3501 && cashMoney<=5000   33  105 66
    else if(cashMoney>5001   && cashMoney<=7500) {
    var registered = 75 ;
    var unregistered = 163;//t
    var agent = 82;
    var ATM =  110; 
    var totalToSend = cashMoney + registered + agent;
    var totalToSendUr = cashMoney + unregistered + agent;
    var totalCost = cashMoney + registered;
    var payBill = 55;

    $('#totalAmount').text('Sending Kes ' + cashMoney.toFixed(2) + ' to registered Mpesa User is Kes '+ registered.toFixed(2) + 
             '. Send to unregistered Mpesa User is Kes ' + unregistered.toFixed(2) + 
             '. Withdraw From Agent is Kes ' + agent.toFixed(2) + '. Withdraw From ATM is Kes ' + ATM.toFixed(2) + 
              '. Total To Send is Kes '+ totalToSend.toFixed(2) + '. Total To Send to unregistered User is Kes '+ totalToSendUr.toFixed(2) +  '. Paybill Amount is Kes '+ payBill.toFixed(2)  );

/*** 

     'Withdraw Kes ' +cashMoney.toFixed(2)+  ' From Mpesa Agent is Kes ' +agent.toFixed(2)+ ', From ATM is Kes ' +$ATM;
     ' Transaction Costs for Kes ' +cashMoney.toFixed(2)+ ': Registered is Kes ' +registered.toFixed(2)+  '+  UnRegistered is Kes ' +unregistered.toFixed(2) ;
     'Total to send Kes ' +cashMoney.toFixed(2)+ ' : Registered is Kes ' +$totalToSendR+  '+  UnRegistered is Kes ' +$totalToSendUr ;
     'For Kes ' +cashMoney.toFixed(2)+  '+ Total Tansaction Cost : Registered  is Kes ' +totalCost.toFixed(2)R+ '+  UnRegistered is Kes ' +totalCost.toFixed(2)Ur;
     'For Kes ' +cashMoney.toFixed(2)+ '+ Total Amount Deducted : Registered is Kes ' +$totalToSendR+ '+  UnRegistered is Kes ' +$totalToSendUr;

**/
        }
    
//cashMoney>5001 && cashMoney<=7500   55  143 82
    else if(cashMoney>7501   && cashMoney<=10000) {
    var registered = 85;
    var unregistered = 201;//t
    var agent = 110;
    var ATM =  110; 
    var totalToSend = cashMoney + registered + agent;
    var totalToSendUr = cashMoney + unregistered + agent;
    var totalCost = cashMoney + registered;
    var payBill = 83;

    $('#totalAmount').text('Sending Kes ' + cashMoney.toFixed(2) + ' to registered Mpesa User is Kes '+ registered.toFixed(2) + 
             '. Send to unregistered Mpesa User is Kes ' + unregistered.toFixed(2) + 
             '. Withdraw From Agent is Kes ' + agent.toFixed(2) + '. Withdraw From ATM is Kes ' + ATM.toFixed(2) + 
              '. Total To Send is Kes '+ totalToSend.toFixed(2) + '. Total To Send to unregistered User is Kes '+ totalToSendUr.toFixed(2) +  '. Paybill Amount is Kes '+ payBill.toFixed(2)  );

/***  

     'Withdraw Kes ' +cashMoney.toFixed(2)+  ' From Mpesa Agent is Kes ' +agent.toFixed(2)+ ', From ATM is Kes ' +$ATM;
     ' Transaction Costs for Kes ' +cashMoney.toFixed(2)+ ': Registered is Kes ' +registered.toFixed(2)+  '+  UnRegistered is Kes ' +unregistered.toFixed(2) ;
     'Total to send Kes ' +cashMoney.toFixed(2)+ ' : Registered is Kes ' +$totalToSendR+  '+  UnRegistered is Kes ' +$totalToSendUr ;
     'For Kes ' +cashMoney.toFixed(2)+  '+ Total Tansaction Cost : Registered  is Kes ' +totalCost.toFixed(2)R+ '+  UnRegistered is Kes ' +totalCost.toFixed(2)Ur;
     'For Kes ' +cashMoney.toFixed(2)+ '+ Total Amount Deducted : Registered is Kes ' +$totalToSendR+ '+  UnRegistered is Kes ' +$totalToSendUr;
    
**/
        }

//cashMoney>7501 && cashMoney<=10000  55  171 110
    else if(cashMoney>10001   && cashMoney<=15000) {
    var registered = 95;
    var unregistered = 260;//t
    var agent = 159;
    var ATM =  193; 
    var totalToSend = cashMoney + registered + agent;
    var totalToSendUr = cashMoney + unregistered + agent;
    var totalCost = cashMoney + registered;
    var payBill = 83;

    $('#totalAmount').text('Sending Kes ' + cashMoney.toFixed(2) + ' to registered Mpesa User is Kes '+ registered.toFixed(2) + 
             '. Send to unregistered Mpesa User is Kes ' + unregistered.toFixed(2) + 
             '. Withdraw From Agent is Kes ' + agent.toFixed(2) + '. Withdraw From ATM is Kes ' + ATM.toFixed(2) + 
              '. Total To Send is Kes '+ totalToSend.toFixed(2) + '. Total To Send to unregistered User is Kes '+ totalToSendUr.toFixed(2) +  '. Paybill Amount is Kes '+ payBill.toFixed(2)  );

/***  

     'Withdraw Kes ' +cashMoney.toFixed(2)+  ' From Mpesa Agent is Kes ' +agent.toFixed(2)+ ', From ATM is Kes ' +$ATM;
     ' Transaction Costs for Kes ' +cashMoney.toFixed(2)+ ': Registered is Kes ' +registered.toFixed(2)+  '+  UnRegistered is Kes ' +unregistered.toFixed(2) ;
     'Total to send Kes ' +cashMoney.toFixed(2)+ ' : Registered is Kes ' +$totalToSendR+  '+  UnRegistered is Kes ' +$totalToSendUr ;
     'For Kes ' +cashMoney.toFixed(2)+  '+ Total Tansaction Cost : Registered  is Kes ' +totalCost.toFixed(2)R+ '+  UnRegistered is Kes ' +totalCost.toFixed(2)Ur;
     'For Kes ' +cashMoney.toFixed(2)+ '+ Total Amount Deducted : Registered is Kes ' +$totalToSendR+ '+  UnRegistered is Kes ' +$totalToSendUr;

**/
        }

//cashMoney>10001    && cashMoney<=15000  55  220 159
    else if(cashMoney>15001  && cashMoney<=20000) {
    var registered = 100;
    var unregistered = 282;//t
    var agent = 176;
    var ATM =  193; 
    var totalToSend = cashMoney + registered + agent;
    var totalToSendUr = cashMoney + unregistered + agent;
    var totalCost = cashMoney + registered;
    var payBill = 110;

    $('#totalAmount').text('Sending Kes ' + cashMoney.toFixed(2) + ' to registered Mpesa User is Kes '+ registered.toFixed(2) + 
             '. Send to unregistered Mpesa User is Kes ' + unregistered.toFixed(2) + 
             '. Withdraw From Agent is Kes ' + agent.toFixed(2) + '. Withdraw From ATM is Kes ' + ATM.toFixed(2) + 
              '. Total To Send is Kes '+ totalToSend.toFixed(2) + '. Total To Send to unregistered User is Kes '+ totalToSendUr.toFixed(2) +  '. Paybill Amount is Kes '+ payBill.toFixed(2)  );

/***  

     'Withdraw Kes ' +cashMoney.toFixed(2)+  ' From Mpesa Agent is Kes ' +agent.toFixed(2)+ ', From ATM is Kes ' +$ATM;
     ' Transaction Costs for Kes ' +cashMoney.toFixed(2)+ ': Registered is Kes ' +registered.toFixed(2)+  '+  UnRegistered is Kes ' +unregistered.toFixed(2) ;
     'Total to send Kes ' +cashMoney.toFixed(2)+ ' : Registered is Kes ' +$totalToSendR+  '+  UnRegistered is Kes ' +$totalToSendUr ;
     'For Kes ' +cashMoney.toFixed(2)+  '+ Total Tansaction Cost : Registered  is Kes ' +totalCost.toFixed(2)R+ '+  UnRegistered is Kes ' +totalCost.toFixed(2)Ur;
     'For Kes ' +cashMoney.toFixed(2)+ '+ Total Amount Deducted : Registered is Kes ' +$totalToSendR+ '+  UnRegistered is Kes ' +$totalToSendUr;
        
**/
        }

//cashMoney>15001    && cashMoney<=20000  55  237 176
else if(cashMoney>20001  && cashMoney<=25000) {
    var registered = 110;
    var unregistered = 303;//t
    var agent = 187;
    var ATM =  'N/A'; 
    var totalToSend = cashMoney + registered + agent;
    var totalToSendUr = cashMoney + unregistered + agent;
    var totalCost = cashMoney + registered;
    var payBill = 110;

    $('#totalAmount').text('Sending Kes ' + cashMoney.toFixed(2) + ' to registered Mpesa User is Kes '+ registered.toFixed(2) + 
             '. Send to unregistered Mpesa User is Kes ' + unregistered.toFixed(2) + 
             '. Withdraw From Agent is Kes ' + agent.toFixed(2) + '. Withdraw From ATM is Kes ' + ATM.toFixed(2) + 
              '. Total To Send is Kes '+ totalToSend.toFixed(2) + '. Total To Send to unregistered User is Kes '+ totalToSendUr.toFixed(2) +  '. Paybill Amount is Kes '+ payBill.toFixed(2)  );

/***  

    // 'Withdraw Kes ' +cashMoney.toFixed(2)+  

     'Withdraw Kes ' +cashMoney.toFixed(2)+  ' From Mpesa Agent is Kes ' +agent.toFixed(2)+ ', From ATM is Kes ' +$ATM;
     ' Transaction Costs for Kes ' +cashMoney.toFixed(2)+ ': Registered is Kes ' +registered.toFixed(2)+  '+  UnRegistered is Kes ' +unregistered.toFixed(2) ;
     'Total to send Kes ' +cashMoney.toFixed(2)+ ' : Registered is Kes ' +$totalToSendR+  '+  UnRegistered is Kes ' +$totalToSendUr ;
     'For Kes ' +cashMoney.toFixed(2)+  '+ Total Tansaction Cost : Registered  is Kes ' +totalCost.toFixed(2)R+ '+  UnRegistered is Kes ' +totalCost.toFixed(2)Ur;
     'For Kes ' +cashMoney.toFixed(2)+ '+ Total Amount Deducted : Registered is Kes ' +$totalToSendR+ '+  UnRegistered is Kes ' +$totalToSendUr;
        
**/
        }

//cashMoney>20001    && cashMoney<=25000  82  275 187
else if(cashMoney>25001  && cashMoney<=30000) {
    var registered = 110;
    var unregistered = 303;//t
    var agent = 187;
    var ATM =  'N/A'; 
    var totalToSend = cashMoney + registered + agent;
    var totalToSendUr = cashMoney + unregistered + agent;
    var totalCost = cashMoney + registered;
    var payBill = 110;

    $('#totalAmount').text('Sending Kes ' + cashMoney.toFixed(2) + ' to registered Mpesa User is Kes '+ registered.toFixed(2) + 
             '. Send to unregistered Mpesa User is Kes ' + unregistered.toFixed(2) + 
             '. Withdraw From Agent is Kes ' + agent.toFixed(2) + '. Withdraw From ATM is Kes ' + ATM.toFixed(2) + 
              '. Total To Send is Kes '+ totalToSend.toFixed(2) + '. Total To Send to unregistered User is Kes '+ totalToSendUr.toFixed(2) +  '. Paybill Amount is Kes '+ payBill.toFixed(2)  );

/***   

     'Withdraw Kes ' +cashMoney.toFixed(2)+  ' From Mpesa Agent is Kes ' +agent.toFixed(2);
     ' Transaction Costs for Kes ' +cashMoney.toFixed(2)+ ': Registered is Kes ' +registered.toFixed(2)+  '+  UnRegistered is Kes ' +unregistered.toFixed(2) ;
     'Total to send Kes ' +cashMoney.toFixed(2)+ ' : Registered is Kes ' +$totalToSendR+  '+  UnRegistered is Kes ' +$totalToSendUr ;
     'For Kes ' +cashMoney.toFixed(2)+  '+ Total Tansaction Cost : Registered  is Kes ' +totalCost.toFixed(2)R+ '+  UnRegistered is Kes ' +totalCost.toFixed(2)Ur;
     'For Kes ' +cashMoney.toFixed(2)+ '+ Total Amount Deducted : Registered is Kes ' +$totalToSendR+ '+  UnRegistered is Kes ' +$totalToSendUr;
**/
        }

//cashMoney>25001    && cashMoney<=30000  82  275 187
else if(cashMoney>30001  && cashMoney<=35000) {
    var registered = 110;
    var unregistered = 303;//t
    var agent = 187;
    var ATM =  'N/A'; 
    var totalToSend = cashMoney + registered + agent;
    var totalToSendUr = cashMoney + unregistered + agent;
    var totalCost = cashMoney + registered;
    var payBill = 110;

    $('#totalAmount').text('Sending Kes ' + cashMoney.toFixed(2) + ' to registered Mpesa User is Kes '+ registered.toFixed(2) + 
             '. Send to unregistered Mpesa User is Kes ' + unregistered.toFixed(2) + 
             '. Withdraw From Agent is Kes ' + agent.toFixed(2) + '. Withdraw From ATM is Kes ' + ATM.toFixed(2) + 
              '. Total To Send is Kes '+ totalToSend.toFixed(2) + '. Total To Send to unregistered User is Kes '+ totalToSendUr.toFixed(2) +  '. Paybill Amount is Kes '+ payBill.toFixed(2)  );

/***
     'Withdraw Kes ' +cashMoney.toFixed(2)+  ' From Mpesa Agent is Kes ' +agent.toFixed(2);
     ' Transaction Costs for Kes ' +cashMoney.toFixed(2)+ ': Registered is Kes ' +registered.toFixed(2)+  '+  UnRegistered is Kes ' +unregistered.toFixed(2) ;
     'Total to send Kes ' +cashMoney.toFixed(2)+ ' : Registered is Kes ' +$totalToSendR+  '+  UnRegistered is Kes ' +$totalToSendUr ;
     'For Kes ' +cashMoney.toFixed(2)+  '+ Total Tansaction Cost : Registered  is Kes ' +totalCost.toFixed(2)R+ '+  UnRegistered is Kes ' +totalCost.toFixed(2)Ur;
     'For Kes ' +cashMoney.toFixed(2)+ '+ Total Amount Deducted : Registered is Kes ' +$totalToSendR+ '+  UnRegistered is Kes ' +$totalToSendUr;

**/
        }

//cashMoney>30001    && cashMoney<=35000  82  275 187
else if(cashMoney>30001  && cashMoney<=35000) {
    var registered = 82;
    var unregistered = 275;//t
    var agent = 187;
    var ATM =  0; 
    var totalToSend = cashMoney + registered + agent;
    var totalToSendUr = cashMoney + unregistered + agent;
    var totalCost = cashMoney + registered;
    var payBill = 110;

    $('#totalAmount').text('Sending Kes ' + cashMoney.toFixed(2) + ' to registered Mpesa User is Kes '+ registered.toFixed(2) + 
             '. Send to unregistered Mpesa User is Kes ' + unregistered.toFixed(2) + 
             '. Withdraw From Agent is Kes ' + agent.toFixed(2) + '. Withdraw From ATM is Kes ' + ATM.toFixed(2) + 
              '. Total To Send is Kes '+ totalToSend.toFixed(2) + '. Total To Send to unregistered User is Kes '+ totalToSendUr.toFixed(2) +  '. Paybill Amount is Kes '+ payBill.toFixed(2)  );

/***
     'Withdraw Kes ' +cashMoney.toFixed(2)+  ' From Mpesa Agent is Kes ' +agent.toFixed(2);
     ' Transaction Costs for Kes ' +cashMoney.toFixed(2)+ ': Registered is Kes ' +registered.toFixed(2)+  '+  UnRegistered is Kes ' +unregistered.toFixed(2) ;
     'Total to send Kes ' +cashMoney.toFixed(2)+ ' : Registered is Kes ' +$totalToSendR+  '+  UnRegistered is Kes ' +$totalToSendUr ;
     'For Kes ' +cashMoney.toFixed(2)+  '+ Total Tansaction Cost : Registered  is Kes ' +totalCost.toFixed(2)R+ '+  UnRegistered is Kes ' +totalCost.toFixed(2)Ur;
     'For Kes ' +cashMoney.toFixed(2)+ '+ Total Amount Deducted : Registered is Kes ' +$totalToSendR+ '+  UnRegistered is Kes ' +$totalToSendUr;

**/
        }

//cashMoney>35001    && cashMoney<=40000  82  N/A 275
else if(cashMoney>35001  && cashMoney<=40000) {
    var registered = 110;
    var unregistered = 'N/A';//t
    var agent = 275;
    var ATM =  'N/A'; 
    var totalToSend = cashMoney + registered + agent;
    var totalToSendUr = cashMoney + unregistered + agent;
    var totalCost = cashMoney + registered;
    var payBill = 198;

    $('#totalAmount').text('Sending Kes ' + cashMoney.toFixed(2) + ' to registered Mpesa User is Kes '+ registered.toFixed(2) + 
             '. Send to unregistered Mpesa User is Kes ' + unregistered.toFixed(2) + 
             '. Withdraw From Agent is Kes ' + agent.toFixed(2) + '. Withdraw From ATM is Kes ' + ATM.toFixed(2) + 
              '. Total To Send is Kes '+ totalToSend.toFixed(2) + '. Total To Send to unregistered User is Kes '+ totalToSendUr.toFixed(2) +  '. Paybill Amount is Kes '+ payBill.toFixed(2)  );

/***  

     'Withdraw Kes ' +cashMoney.toFixed(2)+  ' From Mpesa Agent is Kes ' +agent.toFixed(2);
     ' Transaction Costs for Kes ' +cashMoney.toFixed(2)+ ': Registered is Kes ' +registered.toFixed(2) ;
     'Total to send Kes ' +cashMoney.toFixed(2)+ ' : Registered is Kes ' +$totalToSendR ;
     'For Kes ' +cashMoney.toFixed(2)+  '+ Total Tansaction Cost : Registered  is Kes ' +totalCost.toFixed(2)R;
     'For Kes ' +cashMoney.toFixed(2)+ '+ Total Amount Deducted : Registered is Kes ' +$totalToSendR;
     'You cannot send  Kes  '+cashMoney.toFixed(2)+' to UnRegistered Mpesa User+';
     ' You cannot Withdraw  Kes  ' +cashMoney.toFixed(2)+ ' from an ATM Machine+';
**/
        }
    
//cashMoney>40001    && cashMoney<=45000  82  N/A 275
else if(cashMoney>40001  && cashMoney<=45000) {
    var registered = 110;
    var unregistered = 'N/A';//t
    var agent = 275;
    var ATM =  'N/A'; 
    var totalToSend = cashMoney + registered + agent;
    var totalToSendUr = cashMoney + unregistered + agent;
    var totalCost = cashMoney + registered;
    var payBill = 198;

    $('#totalAmount').text('Sending Kes ' + cashMoney.toFixed(2) + ' to registered Mpesa User is Kes '+ registered.toFixed(2) + 
             '. Send to unregistered Mpesa User is Kes ' + unregistered.toFixed(2) + 
             '. Withdraw From Agent is Kes ' + agent.toFixed(2) + '. Withdraw From ATM is Kes ' + ATM.toFixed(2) + 
              '. Total To Send is Kes '+ totalToSend.toFixed(2) + '. Total To Send to unregistered User is Kes '+ totalToSendUr.toFixed(2) +  '. Paybill Amount is Kes '+ payBill.toFixed(2)  );

/***  

     'Withdraw Kes ' +cashMoney.toFixed(2)+  ' From Mpesa Agent is Kes ' +agent.toFixed(2);
     ' Transaction Costs for Kes ' +cashMoney.toFixed(2)+ ': Registered is Kes ' +registered.toFixed(2) ;
     'Total to send Kes ' +cashMoney.toFixed(2)+ ' : Registered is Kes ' +$totalToSendR ;
     'For Kes ' +cashMoney.toFixed(2)+  '+ Total Tansaction Cost : Registered  is Kes ' +totalCost.toFixed(2)R;
     'For Kes ' +cashMoney.toFixed(2)+ '+ Total Amount Deducted : Registered is Kes ' +$totalToSendR;
     'You cannot send  Kes  '+cashMoney.toFixed(2)+' to UnRegistered Mpesa User+';
     ' You cannot Withdraw  Kes  ' +cashMoney.toFixed(2)+ ' from an ATM Machine+';
**/
        }

//cashMoney>45001    && cashMoney<=50000  110 N/A 275
else if(cashMoney>45001  && cashMoney<=50000) {
    var registered = 110;
    var unregistered = 'N/A';//t
    var agent = 275;
    var ATM =  'N/A'; 
    var totalToSend = cashMoney + registered + agent;
    var totalToSendUr = cashMoney + unregistered + agent;
    var totalCost = cashMoney + registered;
    var payBill = 198;

    $('#totalAmount').text('Sending Kes ' + cashMoney.toFixed(2) + ' to registered Mpesa User is Kes '+ registered.toFixed(2) + 
             '. Send to unregistered Mpesa User is Kes ' + unregistered.toFixed(2) + 
             '. Withdraw From Agent is Kes ' + agent.toFixed(2) + '. Withdraw From ATM is Kes ' + ATM.toFixed(2) + 
              '. Total To Send is Kes '+ totalToSend.toFixed(2) + '. Total To Send to unregistered User is Kes '+ totalToSendUr.toFixed(2) +  '. Paybill Amount is Kes '+ payBill.toFixed(2)  );

/***  

     'Withdraw Kes ' +cashMoney.toFixed(2)+  ' From Mpesa Agent is Kes ' +agent.toFixed(2);
     ' Transaction Costs for Kes ' +cashMoney.toFixed(2)+ ': Registered is Kes ' +registered.toFixed(2) ;
     'Total to send Kes ' +cashMoney.toFixed(2)+ ' : Registered is Kes ' +$totalToSendR ;
     'For Kes ' +cashMoney.toFixed(2)+  '+ Total Tansaction Cost : Registered  is Kes ' +totalCost.toFixed(2)R;
     'For Kes ' +cashMoney.toFixed(2)+ '+ Total Amount Deducted : Registered is Kes ' +$totalToSendR;
     'You cannot send  Kes  '+cashMoney.toFixed(2)+' to UnRegistered Mpesa User+';
     ' You cannot Withdraw  Kes  ' +cashMoney.toFixed(2)+ ' from an ATM Machine+';
**/
        }

//cashMoney>50001    && cashMoney<=70000  110 N/A 330
else if(cashMoney>50001  && cashMoney<=70000) {
    var registered = 110;
    var unregistered = 'N/A';//t
    var agent = 330;
    var ATM =  'N/A'; 
    var totalToSend = cashMoney + registered + agent;
    var totalToSendUr = cashMoney + unregistered + agent;
    var totalCost = cashMoney + registered;
    var payBill = 220;

    $('#totalAmount').text('Sending Kes ' + cashMoney.toFixed(2) + ' to registered Mpesa User is Kes '+ registered.toFixed(2) + 
             '. Send to unregistered Mpesa User is Kes ' + unregistered.toFixed(2) + 
             '. Withdraw From Agent is Kes ' + agent.toFixed(2) + '. Withdraw From ATM is Kes ' + ATM.toFixed(2) + 
              '. Total To Send is Kes '+ totalToSend.toFixed(2) + '. Total To Send to unregistered User is Kes '+ totalToSendUr.toFixed(2) +  '. Paybill Amount is Kes '+ payBill.toFixed(2)  );
//$('p').text()

/***
     'Withdraw Kes ' +cashMoney.toFixed(2)+  ' From Mpesa Agent is Kes ' +agent.toFixed(2);
     ' Transaction Costs for Kes ' +cashMoney.toFixed(2)+ ': Registered is Kes ' +registered.toFixed(2) ;
     'Total to send Kes ' +cashMoney.toFixed(2)+ ' : Registered is Kes ' +$totalToSendR ;
     'For Kes ' +cashMoney.toFixed(2)+  '+ Total Tansaction Cost : Registered  is Kes ' +totalCost.toFixed(2)R;
     'For Kes ' +cashMoney.toFixed(2)+ '+ Total Amount Deducted : Registered is Kes ' +$totalToSendR;
     'You cannot send  Kes  '+cashMoney.toFixed(2)+' to UnRegistered Mpesa User+';
     ' You cannot Withdraw  Kes  ' +cashMoney.toFixed(2)+ ' from an ATM Machine+';

**/
        }

else if (cashMoney>70000 ) {

            $('#totalAmount').text('Mpesa limits reached! Enter amounts Less than Kes 70,000! ' );
               
            }



        //end

            else
        {
            //$('#mPtAmount').text('Kes ' + cashMoney.toFixed(2));
            $('#totalAmount').text('ERROR! I cannot compute! I refuse to compute! ' );
            
        }


    };

    
    $( document ).on( "ready", function(){
        $('#calcTMpesa').on('click', calcTMpesa);
        
    });

    $( document ).on( "deviceready", function(){
        StatusBar.overlaysWebView( false );
        StatusBar.backgroundColorByName("gray");
    });

}
)(jQuery);

