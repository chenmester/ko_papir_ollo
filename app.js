let jatekosPont = 0;
let gepPont = 0;
 
 
function Jatek(elem)
{
    document.getElementById('ko').style.border = "white solid 0px"
    document.getElementById('papir').style.border = "white solid 0px"
    document.getElementById('ollo').style.border = "white solid 0px"
 
    document.getElementById(elem).style.border = "3px solid red"
    let rnd = Math.floor(Math.random() * 3)
    let valasztasok = ["ko", "papir", "ollo"]
    let gepValasztas = valasztasok[rnd]
    const gepKep = document.getElementById("gepKep")
    gepKep.src = `./img/${gepValasztas}.png`
 
let eredmeny ;
    if (elem == "ko")
    {
        if(gepValasztas == "ko")
        {
            eredmeny = "Döntetlen"
        }
        else if(gepValasztas == "papir")
        {
            eredmeny = "Gép nyert"
        }
        else
            eredmeny = "Játékos nyert"
    }
    else if(elem == "papir")
    {
        if (gepValasztas =="ko")
        {
            eredmeny = "Játékos nyert"
        }
        else if (gepValasztas == "papir")
        {
            eredmeny = "Döntetlen"
        }
        else eredmeny = "Gép nyert"
    }
    else (elem =="ollo")
    if (gepValasztas =="ko")
        {
            eredmeny = "Gép nyert"
        }
        else if (gepValasztas == "papir")
        {
            eredmeny = "Játékos nyert"
        }
        else eredmeny = "Döntetlen"
     
      if (eredmeny == "Játékos nyert")
      {
        jatekosPont++
        document.getElementById("jatekos").innerHTML = jatekosPont
      }
       
    else if (eredmeny == "Gép nyert")
    {gepPont++
        document.getElementById("gep").innerHTML = gepPont}
       
 
    document.getElementById("eredmeny").innerHTML = "Eredmény: "  + eredmeny
 
    console.log(`A gép választása: ${gepValasztas}, Játékos választása: ${elem}, Az eredmény: ${eredmeny} , Gép pontja: ${gepPont}, Játékos pontja: ${jatekosPont}`)
}