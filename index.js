$(document).ready(function(){

  var magic8Ball = {};
  magic8Ball.listofanswers = [ "kubectl delete namespace", "Tweet Kelsey Hightower for help", "Check github issues", "It's Docker", "Timeout expired waiting for volumes to attach", "kubectl cordon $NODE", "Crash Loop Backoff", "Firewalled", "Throw yourself at the mercy of SIG on Slack", "Yes", "Signs point to kubectl get po", "Reply hazy, try kubectl describe all", "Ask again later: Image Pull BackOff", "Concentrate... Now kubectl get events", "Docs are wrong", "Reply not schedulable", "My sources say the node is tainted", "Outlook not healthz", "Apply more labels", "Very doubtful. Upgrade cluster to latest version." ];
  magic8Ball.getAnswer = function()
  {
    var randomNumber = Math.random();
    var randomAnswer = Math.floor(randomNumber * this.listofanswers.length);
    var answer = this.listofanswers[randomAnswer];

    $("#8ball").effect( "shake" );
    $("#answer").text( answer );
    $("#answer").fadeIn(3000);
    $("#8ball").attr("src", "/answerside.png");

  };
  $("#answer").hide();

  var onClick = function()
  {
    $("#answer").hide();
    $("#8ball").attr("src", "/magic8ballQuestion.png");
    magic8Ball.getAnswer();
  };

  $("#questionButton").click( onClick );
});
