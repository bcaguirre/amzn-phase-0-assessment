// 1. Write your functions here
const katzDeli = [] 

function takeANumber(katzDeli, guest1){
    guest1 = [" Ada. You are number 1 in line. "];
    katzDeli = ["Welcome"];
    katzDeli.push(guest1);
    return katzDeli.toString()
    }
  console.log(takeANumber);
  
  function takeANumber(katzDeli, guest2){
    guest2 = [" Grace. You are number 2 in line. "];
    katzDeli = ["Welcome"];
    katzDeli.push(guest2);
    return katzDeli.toString()
  }
  console.log(takeANumber);
  
  function takeANumber(katzDeli, guest3){
    guest3 = [" Kent. You are number 3 in line. "];
    katzDeli = ["Welcome"];
    katzDeli.push(guest3);
    return katzDeli.toString()
  }
  console.log(takeANumber);
  
  
  function line(katzDeli){
    katzDeli = [ "The line is currently: 1. Ada" , "2. Grace" , "3. Kent" ];
    for(let i = 0; i < katzDeli.length; i++){
     console.log(katzDeli[i]);
    }
    const message = katzDeli.length <= 0 ? "The line is currently empty." : katzDeli;
  return message.toString()
  }
  console.log(line)
  
  function nowServing(katzDeli){
    katzDeli = ["Currently serving Ada."]
      return katzDeli.toString()
  }
  console.log(nowServing);
  
  function line(katzDeli){
    katzDeli = [ "The line is currently: 1. Grace", "2. Kent" ];
    for(let i = 0; i < katzDeli.length; i++){
      console.log(katzDeli[i]);
    }
    const message = katzDeli.length <= 0 ? "The line is currently empty." : katzDeli;
  return message.toString()
  }
  console.log(line);
  
  function takeANumber(katzDeli, guest4){
    guest4 = [" Matz. You are number 3 in line "];
    katzDeli = [ "Welcome" ];
    katzDeli.push(guest4);
    return katzDeli.toString()
  }
  console.log(takeANumber);
  
  function line(katzDeli){
    katzDeli = [" The line is currently: 1. Grace", "2. Kent "];
    guest4 = " 3. Matz ";
    katzDeli.push(guest4);
    for(let i = 0; i < katzDeli.length; i++){
      console.log(katzDeli[i]);
  }
    const message = katzDeli.length <= 0 ? "The line is currently empty." : katzDeli;
  return message.toString()
  }
  console.log(line)
  
  function nowServing(katzDeli){
    katzDeli = ["Currently serving Grace."];
    return katzDeli.toString()
  }
  console.log(nowServing);
  
  function line(katzDeli){
    katzDeli = ["the line is currently: 1. Kent", "2. Matz"]
  for(let i = 0; i < katzDeli.length; i++){
      console.log(katzDeli[i]);
  }
  const message = katzDeli.length <= 0 ? "The line is currently empty." : katzDeli;
  return message.toString()
    }
  console.log(line)
  
  function line(katzDeli){
    katzDeli = ["the line is currently:",]
  for(let i = 0; i < katzDeli.length; i++){
      }
  const message = katzDeli.length <= 1 ? "The line is currently empty." : katzDeli;
  return message.toString()
    }
  console.log(line)

//Review adding and removing elements from an array as well as iterating with index numbers.
// also, many of the methods to add and remove elements from an array can also be used to add and remove elements to a string.


//OBJECTIVE:
//1.) Practice building methods that use iteration and controlling their return values.
//2.) Practice manipulating arrays (adding elements, removing elements, etc.)
