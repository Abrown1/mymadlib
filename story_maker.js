function makeStory() {
    // get form values (2 points)
    var name = document.getElementById('name').value;
    var noun1 = document.getElementById('noun1').value;
    var adjective = document.getElementById('adjective').value;
    var verb1 = document.getElementById('verb1').value;
    var propernoun = document.getElementById('propernoun').value;
    var adverb = document.getElementById('adverb').value;
    var noun2 = document.getElementById('noun2').value;
    var adjective2 = document.getElementById('adjective2').value;
    var propernoun2 = document.getElementById('propernoun2').value;
    var verb2 = document.getElementById('verb2').value;
    var adverb2 = document.getElementById('adverb2').value;
    var noun3 = document.getElementById('noun3').value;



    // Set title of story. Use at least one form value in the title. (2 points)
    var title = "The Palace Of Mystery";


    // Build story. you can add as many paragraphs as you like. (3 points);
    var paragraph1 = name + " lives in the palace of mystery. " +  name  + " Only goes out at night in order to not be seen.   Every night when " + name +  " comes out, a " + noun1 + verb1 + " into her. ";
    var paragraph2 = verb2  +  " and " +  name +  " have awesome conversations about their journey in the outdoors and drink tea. "  +   " on her way back to the palace, she sees a " +  adjective +  noun2 +   " and smells it. ";
    var paragraph3 = name +  " finally gets home to " + propernoun +  " which is what she calls it , and " + adverb + adverb2 +  " into her bed and goes to sleep " + adjective2 ;
    var paragraph4 = name +  " wakes up to " + noun3 +  " chirping to" + propernoun2 +  " and she gets up to check out the scene. ";

    // Display story by putting title & paragraphs into appropriate divs. (3 points)
    document.getElementById('title').innerHTML = title;
    document.getElementById('paragraph1').innerHTML = paragraph1;
    document.getElementById('paragraph2').innerHTML = paragraph2;
    document.getElementById('paragraph3').innerHTML = paragraph3;
    document.getElementById('paragraph4').innerHTML = paragraph4;

  }
