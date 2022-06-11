$(window).scroll(function () {
  if ($(document).scrollTop() > 50) {
    $(".nav").addClass("affix");
    console.log("OK");
  } else {
    $(".nav").removeClass("affix");
  }
});

$(function () {

    "use strict";

    
    // JSON Data
    var dataEn = { 
        "title" :
        {
            "About" : "About",
            "Skills" : "Skills",
            "Title1" : "Full Stack Web Developer",
            "Title2" : "Currently, with a few months of experience as junior developer, I'm looking for better opportunities.",
            "Title3" : "Hi, it's me Fakhri!",
            "Title4": "I'm Fakhri Kahouach, I'm a junior Full-Stack developer. Currently I live in Gafsa in Tunisia.",
            "Title5" : "I am a senior technician in reservoir geology since 2017 and in 2021 I obtained my certificate in Full-Stack JavaScript at GoMyCode Hackerspace Gafsa. I'm mainly interested in UI/UX design.",
            "Title6" : "CONNECT with ME",
            "Title7" : " - All Rights Reserved - "
        }
    };
    var dataFr = {
        
        "title" :
        {
            "About" : "À propos",
            "Skills" : "Compétences",
            "Title1" : "Développeur Web Full-Stack",
            "Title2" : "Actuellement, avec quelques mois d'expérience en tant que développeur junior, je suis à la recherche de meilleurs opportunitées.",
            "Title3" : "Salut, c'est moi Fakhri!",
            "Title4" : "Je suis Fakhri Kahouach, je suis développeur Full-Stack junior. Actuellement j'habite à Gafsa en Tunisie.",
            "Title5" : "Je suis technicien supérieur en géologie des réservoirs diplomé depuis 2017 et en 2021 j'obtenu mon certificat en Full-Stack JavaScript à GoMyCode Hackerspace Gafsa. Je m'intérresse surtout au UI/UX design.",
            "Title6" : "Me Contacter",
            "Title7" : " - Tous les droits sont réservés - "
        }
        
    };
    
    function checkForLanguage(selector) {
        
        var $this = $(selector);
        
        if ($this.val() === "en") { // English
          //Add Attribute Selected 
            $this.find("option[value='en']")
                .attr("selected","selected")
                .siblings().removeAttr("selected");
            //Change Direction
            $("html").attr("dir","ltr");
            //Get data from JSON
            $(".text1").text(dataEn.title.About );
            $(".text2").text(dataEn.title.Skills );
            $(".text3").text(dataEn.title.Title1 );
            $(".text4").text(dataEn.title.Title2 );
            $(".text5").text(dataEn.title.Title3 );
            $(".text6").text(dataEn.title.Title4 );
            $(".text7").text(dataEn.title.Title5 );
            $("#skills").text(dataEn.title.Skills );
            $("#text8").text(dataEn.title.Title6 );
            $("#text9").text(dataEn.title.Title7 );
        } else if ($this.val() === "fr") { //French
            //Add Attribute Selected 
            $this.find("option[value='fr']")
                .attr("selected","selected")
                .siblings().removeAttr("selected");
            //Change Direction
            $("html").attr("dir","ltr");
            //Get data from JSON
            $(".text1").text(dataFr.title.About );
            $(".text2").text(dataFr.title.Skills );
            $(".text3").text(dataFr.title.Title1 );
            $(".text4").text(dataFr.title.Title2 );
            $(".text5").text(dataFr.title.Title3 );
            $(".text6").text(dataFr.title.Title4 );
            $(".text7").text(dataFr.title.Title5 );
            $("#skills").text(dataFr.title.Skills );
            $("#text8").text(dataFr.title.Title6 );
            $("#text9").text(dataFr.title.Title7 );
        }

    }
    //Called Function Onload
    checkForLanguage("select");
    
    //when choose language
    $("select").on("change", function () {
        
        checkForLanguage($(this));
    });
    
});