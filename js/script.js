$(document).ready(function(){
 $("input[type='button']").click(function(event){
  var queryone =  parseInt($("input[name='quesone']:checked").val());
  var querytwo = parseInt($("input[name='questwo']:checked").val());
  var querythree = parseInt($("input[name='questhree']:checked").val());
  var queryfour = parseInt($("input[name='quesfour']:checked").val());
  var queryfive = parseInt($("input[name='quesfive']:checked").val());
  var querysix = parseInt($("input[name='quessix']:checked").val());
  var queryseven = parseInt($("input[name='quesseven']:checked").val());
  var queryeight = parseInt($("input[name='queseight']:checked").val());
  var querynine = parseInt($("input[name='quesnine']:checked").val());
  var queryten = parseInt($("input[name='questen']:checked").val());
      var questions=[];
      questions.push(queryone,querytwo,querythree,queryfour,queryfive,querysix,queryseven,queryeight,querynine,queryten);
    var total = 0;
    questions.forEach(function(question) {
      total+=question;
    });
    alert(total);
       event.preventDefault();
     });
  });
