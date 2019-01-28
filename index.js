function takeANumber(line, name){
  line.push(name);
  var linePosition = line.length ;
  var greeting = "Welcome, "+name+". You are number "+linePosition+" in line.";
  return greeting;
}
function nowServing(katzDeliLine){
  if(line.length === 0){
    return "There is nobody waiting to be served!"
  }
  return katzDeliLine.shift();
}
