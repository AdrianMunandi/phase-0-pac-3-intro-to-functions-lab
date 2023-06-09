function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase ());
}

function logWhisper(string) {
 console.log(string.toLowerCase ());
}

function sayHiToHeadphonedRoommatetoLowerCase(string) {
    if (string.toLowerCase() === string) {
        return "I can't hear you!";
    } else {
        return "Hi!";
    }
}

function sayHiToHeadphonedRoommatetoUpperCase(string) {
    if (string.toUpperCase() === string) {
        return "YES INDEED!";
    } else {
        return "I can't hear you!";
    }
}

  function sayHiToHeadphonedRoommate(string) {
    if (string === "Let's have dinner together!") {
return "I would love to!";
    } else {
        return "I can't hear you!";
    }
}
