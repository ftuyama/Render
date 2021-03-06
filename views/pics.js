/*
 * Displays Instagram's Pictures
 */

var name, pics = [];

function display(response) {
    if (response == undefined || response.user == undefined || response.user.username == undefined)
        return;
    if (response.user.is_private) {
        $("#insta_reponse").html("<p>Instagram privado!</p>");
        return;
    }
    show(response.user);
}

function show(user) {
    name = user.full_name;
    pics = [user.profile_pic_url];
    user.media.nodes.forEach(function(node) {
        if (!node.is_video)
            pics.push(node.display_src);
    });
    $("#insta").html("");
    pics.forEach(function(pic) {
        if (pic != undefined && pic != "")
            $("#insta").append(
                "<div class=\"imgContainer\"><a href=\"" +
                pic + "\"><img src=\"" + pic +
                "\" height=\"200\" width=\"200\"/></a></div>");
    });
}