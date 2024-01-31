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
    
  
    var channelBtn = document.querySelector(".channelBtn");

    favChannels.forEach(function (elem, index) {
        var div = document.createElement("div");
        div.setAttribute("class", "channelDiv");
       

        var image = document.createElement('img');
        image.setAttribute("src", elem.img_url);
        

        div.append(image);
        
    

        channelBtn.append(div);
    });

    localStorage.setItem("favChannels", JSON.stringify(favChannels));
    
});

