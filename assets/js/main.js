$(document).ready(function () {
    flag=0;
    $(".new").click(function (){
        if(flag==0){
            $("#01").css({
                "display": "block"
            })
            $("#111").css({
                "display": "none"
            })
            $("#122").css({
                "display": "none"
            })
            $("#133").css({
                "display": "none"
            })
            $("#144").css({
                "display": "none"
            })
            flag=1;
        }
        else{
            $("#01").css({
                "display": "none"
            })
            flag=0
        }
    });
});


$(document).ready(function () {
    $("#11").click(function () {
        $("#111").css({
            "display": "block"
        })
        $("#122").css({
            "display": "none"
        })
        $("#133").css({
            "display": "none"
        })
        $("#144").css({
            "display": "none"
        })
        $("#01").css({
            "display": "none"
        })
        flag=0
    });
});

$(document).ready(function () {
    $("#12").click(function () {
        $("#122").css({
            "display": "block"
        })
        $("#111").css({
            "display": "none"
        })
        $("#133").css({
            "display": "none"
        })
        $("#144").css({
            "display": "none"
        })
        $("#01").css({
            "display": "none"
        })
        flag=0
    });
});


$(document).ready(function () {
    $("#13").click(function () {
        $("#133").css({
            "display": "block"
        })
        $("#122").css({
            "display": "none"
        })
        $("#111").css({
            "display": "none"
        })
        $("#144").css({
            "display": "none"
        })
        $("#01").css({
            "display": "none"
        })
        flag=0
    });
});


$(document).ready(function () {
    $("#14").click(function () {
        $("#144").css({
            "display": "block"
        })
        $("#122").css({
            "display": "none"
        })
        $("#133").css({
            "display": "none"
        })
        $("#111").css({
            "display": "none"
        })
        $("#01").css({
            "display": "none"
        })
        flag=0
    });
});

$(document).ready(function () {
    $(".close-button").click(function () {
        $("#111").css({
            "display": "none"
        })
        $("#122").css({
            "display": "none"
        })
        $("#133").css({
            "display": "none"
        })
        $("#144").css({
            "display": "none"
        })
        $("#511").css({
            "display": "none"
        })
        $("#522").css({
            "display": "none"
        })
        $("#533").css({
            "display": "none"
        })
        $("#544").css({
            "display": "none"
        })
    });
});



$(document).ready(function () {
    $("#51").click(function () {
        $("#511").css({
            "display": "block"
        })
        $("#522").css({
            "display": "none"
        })
        $("#533").css({
            "display": "none"
        })
        $("#544").css({
            "display": "none"
        })
    });
});
$(document).ready(function () {
    $("#52").click(function () {
        $("#522").css({
            "display": "block"
        })
        $("#511").css({
            "display": "none"
        })
        $("#533").css({
            "display": "none"
        })
        $("#544").css({
            "display": "none"
        })
    });
});

$(document).ready(function () {
    $("#53").click(function () {
        $("#533").css({
            "display": "block"
        })
        $("#522").css({
            "display": "none"
        })
        $("#511").css({
            "display": "none"
        })
        $("#544").css({
            "display": "none"
        })
    });
});

$(document).ready(function () {
    $("#54").click(function () {
        $("#544").css({
            "display": "block"
        })
        $("#522").css({
            "display": "none"
        })
        $("#533").css({
            "display": "none"
        })
        $("#511").css({
            "display": "none"
        })
    });
});

