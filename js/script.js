let progress=document.getElementById("progress")
let Quaran=document.getElementById("quaran")
let CtrlIcon=document.getElementById("ctrlIcon")

Quaran.onloadedmetadata=function()
{
    progress.max=Quaran.duration;
    progress.value=Quaran.currentTime;

}

function playPause(){
    if(CtrlIcon.classList.contains("fa-pause"))
    {
        Quaran.pause();
        CtrlIcon.classList.remove("fa-pause");
        CtrlIcon.classList.add("fa-play");
    }
    else{
        Quaran.play();
        CtrlIcon.classList.add("fa-pause");
        CtrlIcon.classList.remove("fa-play");
    }

}
if(Quaran.play())
{
    setInterval(()=>
    {
        progress.value=Quaran.currentTime;

    },500)
}
progress.onchange=function()
{
    Quaran.play();
    Quaran.currentTime= progress.value;
    CtrlIcon.classList.add("fa-pause");
    CtrlIcon.classList.remove("fa-play");

}