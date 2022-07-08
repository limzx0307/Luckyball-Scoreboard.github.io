let ballPrice, gamePrice;
let is4Players, isPublic, isAdd;
let scoreItem1, scoreItem2, scoreItem3
let people; // People variables is when Private ball goes in and only one person effect so naming not include 1, 2, 3
let s1, s2, s3;
let playerCount;

// This function basically Initialize the things
document.getElementById("startGameButton").onclick = function() {
    Init();

    Set_All_Name();
    Remove_All_Input();
    Reset_All_Score();
};

// Refresh the whole page to reset all
document.getElementById("resetAll").onclick = function() {
    Reset_All();
}

//#region Public, Private Foul Buttonssss
document.getElementById("player1PublicButton").onclick = function() {
    scoreItem1 = document.getElementById("score21");
    scoreItem2 = document.getElementById("score31");
    isPublic = true;
    isAdd = document.getElementById("player1Add").checked ? true : false;

    let one = document.getElementById("score21").textContent;
    let two = document.getElementById("score31").textContent;
    let three = document.getElementById("score41").textContent;

    PublicScore(ballPrice, is4Players, isAdd, one, two, three)
};
document.getElementById("player1PrivateButton").onclick = function() {
    scoreItem1 = document.getElementById("score21");
    scoreItem2 = document.getElementById("score31");
    isPublic = false;
    isAdd = document.getElementById("player1Add").checked ? true : false;
    playerOrder = 1;

    if (is4Players) {people = document.getElementById("score41").textContent;}
    else if(!is4Players) {people = document.getElementById("score31").textContent;}

    PrivateScore(ballPrice, is4Players, isAdd, people)
};
document.getElementById("player1PrivateButton").onclick = function() {
    scoreItem1 = document.getElementById("score21");
    scoreItem2 = document.getElementById("score31");
    isPublic = false;
    isAdd = document.getElementById("player1Add").checked ? true : false;
    playerOrder = 1;

    if (is4Players) {people = document.getElementById("score41").textContent;}
    else if(!is4Players) {people = document.getElementById("score31").textContent;}

    PrivateScore(ballPrice, is4Players, isAdd, people)
};
document.getElementById("player1PublicButton").onclick = function() {
    scoreItem1 = document.getElementById("score21");
    scoreItem2 = document.getElementById("score31");
    isPublic = true;
    isAdd = document.getElementById("player1Add").checked ? true : false;

    let one = document.getElementById("score21").textContent;
    let two = document.getElementById("score31").textContent;
    let three = document.getElementById("score41").textContent;

    PublicScore(ballPrice, is4Players, isAdd, one, two, three)
};
document.getElementById("player1PrivateButton").onclick = function() {
    scoreItem1 = document.getElementById("score21");
    scoreItem2 = document.getElementById("score31");
    isPublic = false;
    isAdd = document.getElementById("player1Add").checked ? true : false;
    playerOrder = 1;

    if (is4Players) {people = document.getElementById("score41").textContent;}
    else if(!is4Players) {people = document.getElementById("score31").textContent;}
    
    PrivateScore(ballPrice, is4Players, isAdd, people)
};
//#endregion

//#region Public Score and Private Score function
// This function handle score update, such as add, undo for public and private
function PublicScore(score, is4Players, isAdd, first, second, third) {
    s1 = Number(first);
    s2 = Number(second);    

    if (is4Players) {
        s3 = Number(third);

        if (isAdd) {
            s1 += score;
            s2 += score;
            s3 += score;
    
            document.getElementById("score21").textContent = s1;
            document.getElementById("score31").textContent = s2;
            document.getElementById("score41").textContent = s3;
        }
        else if(!isAdd) {
            if (s1 <= 0 || s2 <= 0 || s3 <= 0) {
                alert("Hello, please think twice");
                alert("Someone score is already zero");
            }
            else {
                s1 -= score;
                s2 -= score;
                s3 -= score;
        
                document.getElementById("score21").textContent = s1;
                document.getElementById("score31").textContent = s2;
                document.getElementById("score41").textContent = s3;
            }
        }
    }
    else if(!is4Players) {
        if (isAdd) {
            s1 += score;
            s2 += score;
            s3 += score;
    
            document.getElementById("score21").textContent = s1;
            document.getElementById("score31").textContent = s2;
            document.getElementById("score41").textContent = s3;
        }
        else if(!isAdd) {
            if (s1 <= 0 || s2 <= 0 || s3 <= 0) {
                alert("Hello, please think twice");
                alert("Someone score is already zero");
            }
            else {
                s1 -= score;
                s2 -= score;
                s3 -= score;
        
                document.getElementById("score21").textContent = s1;
                document.getElementById("score31").textContent = s2;
                document.getElementById("score41").textContent = s3;
            }
        }
    }
}
function PrivateScore(score, is4Players, isAdd, people) {
    s1 = Number(people);

    if (is4Players) {
        if (isAdd) {
            s1 += score;
    
            document.getElementById("score21").textContent = s1;
        }
        else if(!isAdd) {
            if (s1 <= 0 || s2 <= 0 || s3 <= 0) {
                alert("Hello, please think twice");
                alert("Someone score is already zero");
            }
            else {
                s1 -= score;
        
                document.getElementById("score21").textContent = s1;
            }
        }
    }
    else if(!is4Players) {
        if (isAdd) {
            s1 += score;
            s2 += score;
            s3 += score;
    
            document.getElementById("score21").textContent = s1;
            document.getElementById("score31").textContent = s2;
            document.getElementById("score41").textContent = s3;
        }
        else if(!isAdd) {
            if (s1 <= 0 || s2 <= 0 || s3 <= 0) {
                alert("Hello, please think twice");
                alert("Someone score is already zero");
            }
            else {
                s1 -= score;
                s2 -= score;
                s3 -= score;
        
                document.getElementById("score21").textContent = s1;
                document.getElementById("score31").textContent = s2;
                document.getElementById("score41").textContent = s3;
            }
        }
    }
}
//#endregion

// Initialize the variables just to make things look clear
function Init() {
    ballPrice = Number(document.getElementById("ballPriceText").value);
    gamePrice = Number(document.getElementById("gamePriceText").value);

    is4Players = document.getElementById("fourPlayers").checked ? true : false;

    playerCount = is4Players ? 4 : 3
}

// Update the name in label near input fields, table
function Set_All_Name() {
    if (document.getElementById("fourPlayers").checked) {
        document.getElementById("player1NameColumn").textContent = document.getElementById("player1NameInput").value;
        document.getElementById("player1NameRow").textContent = player1Name = document.getElementById("player1NameInput").value;
        document.getElementById("player2NameColumn").textContent = document.getElementById("player2NameInput").value;
        document.getElementById("player2NameRow").textContent = player1Name = document.getElementById("player2NameInput").value;
        document.getElementById("player3NameColumn").textContent = document.getElementById("player3NameInput").value;
        document.getElementById("player3NameRow").textContent = player1Name = document.getElementById("player3NameInput").value;
        document.getElementById("player4NameColumn").textContent = document.getElementById("player4NameInput").value;
        document.getElementById("player4NameRow").textContent = player1Name = document.getElementById("player4NameInput").value;

        document.getElementById("player1NameLabel").textContent = "Player 1: " + document.getElementById("player1NameInput").value;
        document.getElementById("player2NameLabel").textContent = "Player 2: " + document.getElementById("player2NameInput").value;
        document.getElementById("player3NameLabel").textContent = "Player 3: " + document.getElementById("player3NameInput").value;
        document.getElementById("player4NameLabel").textContent = "Player 4: " + document.getElementById("player4NameInput").value;        

        document.getElementById("player1Id").textContent = document.getElementById("player1NameInput").value;
        document.getElementById("player2Id").textContent = document.getElementById("player2NameInput").value;
        document.getElementById("player3Id").textContent = document.getElementById("player3NameInput").value;
        document.getElementById("player4Id").textContent = document.getElementById("player4NameInput").value;
    }
    else if(document.getElementById("threePlayers").checked) {
        document.getElementById("player1NameColumn").textContent = document.getElementById("player1NameInput").value;
        document.getElementById("player1NameRow").textContent = player1Name = document.getElementById("player1NameInput").value;
        document.getElementById("player2NameColumn").textContent = document.getElementById("player2NameInput").value;
        document.getElementById("player2NameRow").textContent = player1Name = document.getElementById("player2NameInput").value;
        document.getElementById("player3NameColumn").textContent = document.getElementById("player3NameInput").value;
        document.getElementById("player3NameRow").textContent = player1Name = document.getElementById("player3NameInput").value;
        document.getElementById("player4NameColumn").textContent = "";
        document.getElementById("player4NameRow").textContent = "";

        document.getElementById("player1NameLabel").textContent = "Player 1: " + document.getElementById("player1NameInput").value;
        document.getElementById("player2NameLabel").textContent = "Player 2: " + document.getElementById("player2NameInput").value;
        document.getElementById("player3NameLabel").textContent = "Player 3: " + document.getElementById("player3NameInput").value;
        document.getElementById("player4NameLabel").textContent = "";        

        document.getElementById("player1Id").textContent = document.getElementById("player1NameInput").value;
        document.getElementById("player2Id").textContent = document.getElementById("player2NameInput").value;
        document.getElementById("player3Id").textContent = document.getElementById("player3NameInput").value;
        document.getElementById("player4Id").textContent = "";

        document.getElementById("score14").textContent = "";
        document.getElementById("score24").textContent = "";
        document.getElementById("score34").textContent = "";
        document.getElementById("score41").textContent = "";
        document.getElementById("score42").textContent = "";
        document.getElementById("score43").textContent = "";
    }

    document.getElementById("ballPriceLabel").textContent = "Ball Price: " + ballPriceText.value;
    document.getElementById("gamePriceLabel").textContent = "Game Price: " + gamePriceText.value;
}

// Remove input field to make the interface look clear
function Remove_All_Input() {
    let field = document.getElementById("inputField");
    field.removeChild(document.getElementById("player1NameInput"));
    field.removeChild(document.getElementById("player2NameInput"));
    field.removeChild(document.getElementById("player3NameInput"));
    field.removeChild(document.getElementById("player4NameInput"));
    field.removeChild(document.getElementById("ballPriceText"));
    field.removeChild(document.getElementById("gamePriceText"));
}

// This function is to reset or clears the score in table
function Reset_All_Score() {
    // TODO: remove the score in the table ONLY
    console.log("Reset all score...");
}

// Reset all things by refresh the whole page
function Reset_All() {
    var okToRefresh = confirm("Reset all will reset all name and score");

    if (okToRefresh) {
        {
            setTimeout("location.reload(true);", 1000);
        }
    }
}