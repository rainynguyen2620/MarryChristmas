
var to = 'Stella!';
var gift_url = 'https://www.facebook.com/nhi.bang.5817';
var gift_image_url = 'Stella.png';



var nametag = document.getElementById("nametag");
var present = document.getElementById("present");
var presentImage = document.getElementById("present-image");


function init() {

    function playMusic() {
        var myAudio = document.getElementById('playAudio');
        if (myAudio.duration > 0 && !myAudio.paused) {
            //Its playing...do your job

        } else {
            myAudio.play()
            //Not playing...maybe paused, stopped or never played.

        }
    }

    var _giftLink,
        _giftImg;

    if (gift_url) {
        _giftLink = document.createElement("a");
        _giftLink.href = gift_url;
        _giftLink.target = "_blank";
        presentImage.appendChild(_giftLink);
    }

    if (gift_image_url) {
        _giftImg = document.createElement("img");
        _giftImg.src = gift_image_url;
        if (_giftLink) {
            _giftLink.appendChild(_giftImg);
        } else {
            presentImage.appendChild(_giftImg);
        }
    }

    present.addEventListener("click", function (e) {
        present.classList.toggle("open");
        document.getElementById('card').classList.add('card-show');
        playMusic();
    }, false);



    nametag.innerText = to;
}

init();

