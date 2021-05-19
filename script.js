var request =new XMLHttpRequest();
request.open('GET','https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json',true);
request.send();
request.onload=function(){
    var data=JSON.parse(this.response);
    var cdata =data.forEach(ele => {
    console.log(ele.name,ele.email)    
    });
console.log(cdata);
}