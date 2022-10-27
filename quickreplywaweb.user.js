
// ==UserScript==
// @name         Quick Reply for WhatsApp Web +
// @namespace    https://github.com/laksa19/textexpander4whatsappweb
// @version      0.1
// @description  Quick Reply for WhatsApp Web with Reply Button
// @author       Laksamadi Guko
// @match        https://web.whatsapp.com/*
// @icon         https://laksa19.github.io/textexpander4whatsappweb/favicon.png
// @require      http://code.jquery.com/jquery-3.4.1.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let textlist = [
        {
            text: "ppj",
            expand: "Subdomain kakak sudah diperpanjang."
        },
        {
            text: "ext",
            expand: "\nHai kakak"
        }
    ]

  
    $('body').click(()=>{
        if($('#panelReplyButton').length < 1){
            firstAttact();
        }


    })


    function firstAttact(){
       $("footer").prepend('<div style="border-left: 1px solid var(--border-stronger);" id="panelReplyButton"></div>');

       $("footer").append(`<div id="linktxp" style="display:none"></div>`);


       var pn = $($('header span[dir="auto"]')[0]).html();
       var cpn = "";
         if(pn.substring(0,1) == "+"){
              cpn = pn.replace(/[^0-9]/g,'');
              console.log("phone number: "+cpn);
              addReplyBtn(cpn);
         }else{
              $($('header div[title="Profile Details"]')[0]).click();
              var CI = $('div [data-testid="drawer-right"]')[0];
              $(CI).css("display","none");
              var chkPhoneNumber = setTimeout(()=>{
              if (typeof $('section span[dir="auto"]')[1].children[0] !== "undefined") {
                   var phoneNumber = "";
                  if(typeof $($('section span[dir="auto"]')[1].children[0]).html() !== "undefined"){
                      phoneNumber = $($('section span[dir="auto"]')[1].children[0]).html()
                  }else{
                      phoneNumber = $($('section span[dir="auto"]')[5].children[0]).html();
                  }

                   var closeCI = $('span[data-testid="x"]')[1];
                   if(phoneNumber.substring(0,1) == "+"){
                        $(closeCI).click();
                        $(CI).css("display","");
                        clearInterval(chkPhoneNumber);
                        cpn = phoneNumber.replace(/[^0-9]/g,'');
                        console.log("phone number: "+cpn);
                        addReplyBtn(cpn);

                   }else{
                        closeCI.click();
                        $(CI).css("display","");
                        addReplyBtn('');

                   }
              }else{
                   $($('span[data-testid="x"]')[1]).click();
                   $(CI).css("display","");
                   addReplyBtn('');

              }
              },100);
         }





    }

function scr(){
     var scrollchat = setTimeout(()=>{
     const element = $('div[data-testid="conversation-panel-body"]')[0]
  element.scrollIntoView();
     console.log("focusing chat")



  },1000)
setTimeout(()=>{
            clearInterval(scrollchat);
            console.log('chat focused');
},2000)
}


    function addReplyBtn(cpn){
        scr()
        $("footer").append(`
        <script>

        function sendReply(el,send=true){
        $('#'+el)[0].click();
        if(send == true){
        var chkSend = setInterval(()=>{
        if($('span[data-icon="send"]').length > 0){
        setTimeout(()=>{
        $('span[data-icon="send"]').click();
        closeContactInfo();
        clearInterval(chkSend);
        },100);
        }
        },100);
        }
        }
        function closeContactInfo(){
        var closeCI = setInterval(()=>{
        console.log($('span[data-testid="x"]')[1] )
        if(typeof $('span[data-testid="x"]')[1]  !== "undefined"){
        $('span[data-testid="x"]')[1].click();
        clearInterval(closeCI);

        }else{
        clearInterval(closeCI);
        }
        },1500)
        }
        </script>
        `);
         $.each(textlist, function(key,value) {
              var textInput = value.text
              var textReply = value.expand;
              var margin = "margin:5px 5px 0px 10px;";
              if(key > 0){
                   margin = "margin:5px 5px 0px 0px;";
              }

            $('#panelReplyButton').append(`
              <button id="rbtn`+textInput+`" onclick="sendReply('linktxp`+textInput+`')"
              style="`+margin+` color :#fff; background: #08c65b; border: none; border-radius:5px; text-align: center; height:30px; min-width:40px; line-height: 30px; vertical-align:middle; cursor: pointer;"
              title="`+textReply+`">`+textInput+`</button>
            `);
             $("#linktxp").append(`
               <a id="linktxp`+textInput+`" href="https://wa.me/`+cpn+`?text=`+textReply.replace(/(?:\r\n|\r|\n)/g, '%0A').replace(/\s/g, "%20")+`">`+textInput+`</a>
             `);

        })

    }


})();
