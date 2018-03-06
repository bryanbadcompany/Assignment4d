function SectionSelect()
{
    if(document.getElementById("menu").value == "Display Baby Cat")
    {
     document.getElementById("section1").style.visibility = "visible";
     document.getElementById("section2").style.visibility = "hidden";
    }
    if (document.getElementById("menu").value == "Display Baby Dog")
    {
     document.getElementById("section2").style.visibility = "visible";
     document.getElementById("section1").style.visibility = "hidden";
    }
}