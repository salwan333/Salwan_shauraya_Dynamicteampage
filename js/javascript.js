
$(document).ready(function () {
    $(".btn").hide();
    $("#imgtxt1").hide();
    $("#imgtxt2").hide();
    var statusImg1 = 0;
    $("#img1").click(function () {
        statusImg1 = ~statusImg1;
        $("#img1").removeClass("img-fluid");
        $("#img1").addClass("img-fluid-big");
        $("#img2").hide(1000);
        $(".btn").show(1000);
        $("#imgtxt1").show(1000);
        $("#imgtxt2").hide(1000);
    });


    $(".btn").click(function () {

        if (statusImg1 != 0) {
            statusImg1 = ~statusImg1;
            $("#img2").show(1000);
            $("#img2").removeClass("img-fluid");
            $("#img2").addClass("img-fluid-big");
            $("#img1").hide(1000);
            $("#imgtxt2").show(1000);
            $("#imgtxt1").hide(1000);
            exit();
        }
        if (statusImg1 == 0) {
            statusImg1 = ~statusImg1;
            $("#img1").show(1000);
            $("#img1").addClass("img-fluid-big");
            $("#img1").removeClass("img-fluid");
            $("#img2").hide(1000);
            $("#imgtxt1").show(1000);
            $("#imgtxt2").hide(1000);
            exit();
        }


    });
});
