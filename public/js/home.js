function myFunction(){
    
    
        //select buttons 
        let clickedBtn      = document.getElementsByClassName("btn--clicked")[0];
        //let headerGroupBtns = document.getElementsByClassName("header__group-buttons")[0];
        //let btnHead         = document.getElementsByClassName("btn--head")[0];
        let fitstHead       = document.getElementsByClassName("heading-primary--first")[0];
        let headerGroupImgs = document.getElementsByClassName("header__group-images")[0];
        let sectionGame     = document.getElementsByClassName("section-game");
        let logo            = document.getElementsByClassName("header__logo-box")[0];
        

    
        //hide welcome button
        clickedBtn.style.opacity = 0;
        clickedBtn.style.visibility  = "hidden";
        //show games buttons..
        //headerGroupBtns.style.opacity=1;
        //headerGroupBtns.style.visibility  = "visible";
        //show "Who Is us "
        //btnHead.style.opacity=1;
        //btnHead.style.visibility  = "visible";
        
        //hide welcome head
        fitstHead.style.opacity=0;
        fitstHead.style.visibility  = "hidden";
        fitstHead.style.transition=("all .5s");

        //show games..

        headerGroupImgs.style.visibility  = "visible";
        headerGroupImgs.style.opacity=1;

        //show game area 
        //sectionGame.style.display ="block";
        //sectionGame.style.opacity=1;
        for(i=0;i<sectionGame.length;i++)
        {
            //show game area 
            sectionGame[i].style.display ="block";
            sectionGame[i].style.opacity=1;
    }
    // Hide logo 
    logo.style.opacity = 0;
    logo.style.visibility  = "hidden";

    /* Object.keys(sectionGame).forEach(game => {
        
            console.log(sectionGame[game]);

        });*/


        
    

    



    }
