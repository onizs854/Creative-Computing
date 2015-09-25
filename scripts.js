var hoursOfSleep = parseFloat(prompt("How many hours of sleep did you get last night?"));
var cupsOfCoffee = parseFloat(prompt("How many cups of coffee have you had today?"));
var sleepAndCoffee = hoursOfSleep + cupsOfCoffee;

if (sleepAndCoffee < 8)
{
  confirm("You need a cup of coffee!");
}
else if (sleepAndCoffee > 14)
{
  alert("STOP DRINKING COFFEE!");
}
else
{
  console.log("You're good for the day.");
}
