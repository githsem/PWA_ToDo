function save() {
    let listElements = document.getElementsByTagName("LI");
    let data = [];
  
    for (let i = 0; i < listElements.length; i++) {
      let element = listElements[i].innerText;
      elementen = element.replace('X', '');
      data.push(elementen);
    }
    console.log(data);
    localStorage.setItem('data', JSON.stringify(data));
    console.log('save data', data);
  }
  
  function load() {
    let dataString = localStorage.getItem('data');
    data = JSON.parse(dataString);
    console.log('loaded data', data);

    for(var i=0;i<data.length;i++){
      var val = data[i];
      if(val !== '') {
        var elem = $("<li class='list-group-item list-group-item-info value'></li>").text(val);
        $(elem).append("<button class='rem'>X</button>");
        $("#mylist").append(elem);
        $("input").val("");
        $(".rem").on("click", function() {
          $(this).parent().remove();
          save();
        });
      };  
    }; 
  };
    
function initList() {
  
    $("#add").on("click", function() {        
        var val = $("input").val();
        if(val !== '') {
            var elem = $("<li class='list-group-item list-group-item-info value'></li>").text(val);
            $(elem).append("<button class='rem'>X</button>");
            $("#mylist").append(elem);
            $("input").val("");
            $(".rem").on("click", function() {
                $(this).parent().remove();
                save();
            });            
        } 
    save();        
    });   
}



document.addEventListener('DOMContentLoaded', function() {
  initList();
  load();
});