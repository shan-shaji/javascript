function  anotherEventlistener(typeOfEvent, callback){
    var eventThatHappened = {
        eventType: "keypress",
        key: "p",
        durationType: 2
    }

    if(eventThatHappened.eventType === typeOfEvent){
        callback(eventThatHappened);
        
    }
}