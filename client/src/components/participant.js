var Participant = function(name, type, image, number){
  this.name = name;
  this.type = type;
	this.image = image;
  this.number = number;
  this.hasMet = [];
}

Participant.prototype ={

  save: function(){
      var url = 'http://localhost:3000/lists';
      var request = new XMLHttpRequest();
      request.open("POST", url);
      request.setRequestHeader("Content-Type", "application/json");
      request.onload = function(){
        if(request.status === 200){
        }
      }
      request.send(JSON.stringify(this));
    }


}

module.exports = Participant;
