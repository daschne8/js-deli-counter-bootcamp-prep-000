function takeANumber(line, name){
  line.push(name);
  var linePosition = line.length ;
  return "Welcome, ${name}. You are number ${linePosition} in line.".format({name},{linePosition});
}
function nowServing(){
return 5;
}
