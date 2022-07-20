const convertMonthsNumberToName = (arrayOfMonthsNumber) => {
    try {
        if (arrayOfMonthsNumber && arrayOfMonthsNumber.length != 0) {
            let tempData = [];
            for (let index = 0; index < arrayOfMonthsNumber.length; index++) {
                const element = arrayOfMonthsNumber[index];
                if (element === '01') {
                    tempData.push('January')
                } else if (element === '02') {
                    tempData.push('Feburary')
                } else if (element === '03') {
                    tempData.push('March')
                } else if (element === '04') {
                    tempData.push('April')
                } else if (element === '05') {
                    tempData.push('May')
                } else if (element === '06') {
                    tempData.push('June')
                } else if (element === '07') {
                    tempData.push('July')
                } else if (element === '08') {
                    tempData.push('August')
                } else if (element === '09') {
                    tempData.push('September')
                } else if (element === '10') {
                    tempData.push('Octuber')
                } else if (element === '11') {
                    tempData.push('November')
                } else if (element === '12') {
                    tempData.push('December')
                }
            }
            return tempData;
        }
        return [];
    } catch (error) {
        console.log(error)
        return []
    }
};

const padTo2Digits = (num) => {
    return num.toString().padStart(2, '0');
};

const convertMsToHM = (milliseconds) => {
    let seconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);

    seconds = seconds % 60;
    // 👇️ if seconds are greater than 30, round minutes up (optional)
    minutes = seconds >= 30 ? minutes + 1 : minutes;

    minutes = minutes % 60;

    // 👇️ If you don't want to roll hours over, e.g. 24 to 00
    // 👇️ comment (or remove) the line below
    // commenting next line gets you `24:00:00` instead of `00:00:00`
    // or `36:15:31` instead of `12:15:31`, etc.
    hours = hours % 24;

    return padTo2Digits(hours);
};

const getTopNValues = (arr, n) => {
    if (n > arr.length) {
        return false;
    }
    return arr
        .slice()
        .sort((a, b) => {
            return b.totalHours - a.totalHours
        })
        .slice(0, n);
};

const convertArrayOfObjectToArray = (arr, key) => {
    try {
        const data = [];
        for (var i = 0; i < arr.length; i++) {
            data.push(arr[i][key]);
        }
        return data;
    } catch (error) {
        console.log(error)
    }
}

const convertMsArrayToHrArray = (arr, key) => {
    try {
        const data = [];
        for (var i = 0; i < arr.length; i++) {
            data.push(convertMsToHM(arr[i][key]));
        }
        return data;
    } catch (error) {
        console.log(error)
    }
}

export { convertMonthsNumberToName, convertMsToHM, getTopNValues, convertArrayOfObjectToArray, convertMsArrayToHrArray };