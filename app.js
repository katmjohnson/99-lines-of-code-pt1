let friends = ['Will','Alissa','Lauren','Lauren','Blakely'];

function outerLoop(whichFriend) {
    for (let i = 0; i < whichFriend.length; i++) {
        console.log(whichFriend[i]);
        innerLoop(whichFriend[i]);
    }  
}

function innerLoop(perFriend) {
    for (let n = 99 ; n > 0; n--) {
        let remainder = n;
        
        if (n===1) {
            console.log(remainder + " lines of code in the file, " + remainder +  + "  lines of code, " + perFriend + "strikes one out, clears it all out, no more lines of code in the file");
        } else if (n ===2){
            let minusOne = remainder - 1;
            console.log(remainder + "line of code in the file," + remainder + "lines of code;" + perFriend + "strikes on out, clears it all out," + minusOne + "line of code in the file");
        } else {
            let minusOne = remainder -1;
            console.log(remainder + " lines of code in the file, " + remainder + " lines of code; " + perFriend + " strikes one out, clears it all out " + minusOne + " lines of code in the file");
        }

    }
}

outerLoop(friends);