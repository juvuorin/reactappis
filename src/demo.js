v1 = {teksti:"Joskus"}
v2 = {teksti:"Toisinaan"}
v3 = {teksti:"Ei ikinä"}
v4 = {teksti:"Tänään"}

v5 = {teksti:"Auto"}
v6 = {teksti:"Fillari"}
v7 = {teksti:"Potkulauta"}
v8 = {teksti:"Skuutti"}

k1 = {teksti:"Milloin on paras hetki tehdä jotain?", vastausvaihtoehdot:[v1,v2,v3,v4]}
k2 = {teksti:"Mikä on hauskin kulkupeli?", vastausvaihtoehdot:[v5,v6,v7,v8]}

tentti = {teksti:"Hassu kysely", kysymykset: [k1,k2]}

const runner = () =>{
    console.log(Tentti(tentti))
    // tarkastele result arvoa täällä : https://codebeautify.org/htmlviewer
}
const Tentti = (tentti)=>{
    return "<div>"+tentti.teksti+(tentti.kysymykset.map(item=>Kysymys(item)))+"</div>\n"
}

const Kysymys = (kysymys)=>{
    return  "<div>"+kysymys.teksti+(kysymys.vastausvaihtoehdot.map(item=>Vastaus(item)))+"</div>\n"
}
const Vastaus = (vastausavaihtoehto)=>{
   return "<div>"+vastausavaihtoehto.teksti+"</div>"   
}
runner()
