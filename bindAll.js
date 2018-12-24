let func = function beautiful(){
  alert(this + ' is beautiful');
};
func();

let func = function beautiful(){
  alert(this + ' is beautiful');
};
func.apply('Internet');

let func = function beautiful(){
  alert(this + ' is beautiful');
};
func.apply('Beach'); //Beach is beautiful

function Developer(skill) {
  this.skill = skill;
  this.says = function(){
    alert(this.skill + ' rocks!');
  }
}
let john = new Developer('Ruby');
john.says(); //Ruby rocks!

function Developer(skill) {
  this.skill = skill;
  this.says = function(){
    alert(this.skill + ' rocks!');
  }
}
let john = new Developer('Ruby');
let func = john.says;
func();// undefined rocks!
