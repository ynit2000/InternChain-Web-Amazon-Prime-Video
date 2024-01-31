var favChannels = [
    { img_url: "/media/LionsgatePlay.jpg" },
    { img_url: "/media/Discovery.jpg" },
    { img_url: "/media/BBC_PLAYER.png" },
    { img_url: "/media/MANORAMAMAX.jpg" },
    { img_url: "/media/hoichoi.jpg" },
    { img_url: "/media/Chaupal.png" },
    { img_url: "/media/Anime.jpg" },
    { img_url: "/media/Erosnow.jpg" },
    { img_url: "/media/Mubi.jpg" },
    { img_url: "/media/Vrott.png" },
    { img_url: "/media/Stingray.png" },
    { img_url: "/media/Docubay.jpg" },
];

document.addEventListener("DOMContentLoaded", function () {
    // Your existing code here
  
    var channelBtn = document.querySelector(".channelBtn");

    favChannels.forEach(function (elem, index) {
        var div = document.createElement("div");
        div.setAttribute("class", "channelDiv");
       

        var image = document.createElement('img');
        image.setAttribute("src", elem.img_url);
        

        div.append(image);
        
        
        // Add a 10px space after each image except for the last one
        if (index < favChannels.length - 1) {
            var space = document.createElement('div');
            
            div.append(space);
        }

        channelBtn.append(div);
    });

    localStorage.setItem("favChannels", JSON.stringify(favChannels));
    space.style.width = "10px";
});

