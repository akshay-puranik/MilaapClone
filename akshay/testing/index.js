
let price = 40000
function main()
{

    console.log("clicked")
    let donated = +document.getElementById("donated").value 


    let percentage =Math.floor((donated/price)*100)
    console.log(percentage)
    let x = 156 - (156*(percentage/100))
    var style = document.createElement('style');
    // style.type = 'text/css';
    var keyFrames = `\
    @keyframes anim {\
        100% {\
            stroke-dashoffset: ${x};\
        }\
    }\
    `;
    style.innerHTML = keyFrames.replace(/x/, "0");
    document.getElementsByTagName('head')[0].appendChild(style);
}

