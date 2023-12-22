
// function fullName(fname,lname) {
//     var a = ("Hello " + fname + " " +lname + "<br>");
//     return a;
// }
//  var b = fullName("Maham","Babar");
//  document.write(b);

//Marks Obtain//
document.write("Total Subjects - 5 <br> Total Marks - 500 <br><br>")

function sumMarks(eng,urdu,math,chem,phy){
    var a = eng+urdu+math+chem+phy
    return a;
};
var b = sumMarks (50,80,90,50,90);
document.write("Marks Obtain -" +b+ "<br>");

//percentage//
function percentage(TotalMarks){
    var c = TotalMarks/500*100;
    return c;
};
var d = percentage(b);
document.write("percentage -" +d+ "%");
