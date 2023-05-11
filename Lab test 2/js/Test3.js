var cards = [
    {"Name": "Iron man",
      "Email": "tony.stark@avengers.com",
      "Address": "New york, USA",
      "Phone":"xxx-xxx-xxxx"},
      {"Name": "Captain America",
        "Email": "steve.roger@avengers.com",
        "Address": "Oregon, USA",
        "Phone": "yyy-yyy-yyyy"},
      {"Name": "Thor",
        "Email": "thegodofthunder@avengers.com",
        "Address": "Main, Asgard",
        "Phone": "zzz-zzz-zzzz"}];

// document.getElementById('card1').innerHTML ="Name: "+ cards[0].Name + "<br>" + "Email:" + cards[0].Email + "<br>" + "Address: " + cards[0].Address + "<br>" + "Phone: " + cards[0].Phone;


for(let i = 0; i < cards.length; i++){
    for (let key in cards[i]) {
        const para = document.createElement('p');
        para.innerHTML = key + ": " + cards[i][key];
        document.getElementById('card').appendChild(para);


    }
    const br = document.createElement('br');
    document.getElementById('card').appendChild(br);
}