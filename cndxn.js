var grade ='D';
document.write("Entering switch statement <br>");
switch(grade)
{
    case 'A': document.write("Well done! <br>");
              break;
    case 'B': document.write("Good! <br>");
              break;
    case 'C': document.write("You need to work harder! <br>");
                break;
    case 'D': document.write("failed ): <br>")
    break;
    default: document.write("Invalid grade <br>");
}