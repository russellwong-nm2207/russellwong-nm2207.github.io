    
    
    
	const labelYear= ["2005","2006","2007","2008","2009","2010"];//fill the years here from the top row, but within quotes eg "2009","2010"...

   
    const dataObj = {
        labels: labelYear,           //we want the x axis to be the years
        datasets: [
            {
                label: "Accountancy",// uncomment this line and set this to "Accountancy" for example
                data: [495,468,575,536,596,554],// uncomment this line and set this to an array [] with commas that are the bold numbers next to Accountancy for example
                borderWidth: 2,
                backgroundColor: "rgb(0,0,255)",//put a color here as rgb(0,0,255) or hsla(20,100%,80%,0.8) format, from https://imagecolorpicker.com/en or https://color.adobe.com/ (explore the Triad radio button on the left)
                borderColor: "rgb(0,0,0)"//put black rgb(0,0,0) or the same color as above
            },
            {
                label: "Business & Administration",// uncomment this line and set this to "Accountancy" for example
                data: [799,819,894,960,857,859],// uncomment this line and set this to an array [] with commas that are the bold numbers next to Accountancy for example
                borderWidth: 2,
                backgroundColor: "rgb(0,0,255)",//put a color here as rgb(0,0,255) or hsla(20,100%,80%,0.8) format, from https://imagecolorpicker.com/en or https://color.adobe.com/ (explore the Triad radio button on the left)
                borderColor: "rgb(0,0,0)"//put black rgb(0,0,0) or the same color as above
            },
            {
                label: "Dentistry",// uncomment this line and set this to "Accountancy" for example
                data: [12,14,15,17,19,25],// uncomment this line and set this to an array [] with commas that are the bold numbers next to Accountancy for example
                borderWidth: 2,
                backgroundColor: "rgb(0,0,255)",//put a color here as rgb(0,0,255) or hsla(20,100%,80%,0.8) format, from https://imagecolorpicker.com/en or https://color.adobe.com/ (explore the Triad radio button on the left)
                borderColor: "rgb(0,0,0)"//put black rgb(0,0,0) or the same color as above
            },
            {
                label: "Health Sciences",// uncomment this line and set this to "Accountancy" for example
                data: [69,57,67,77,107,196],// uncomment this line and set this to an array [] with commas that are the bold numbers next to Accountancy for example
                borderWidth: 2,
                backgroundColor: "rgb(0,0,255)",//put a color here as rgb(0,0,255) or hsla(20,100%,80%,0.8) format, from https://imagecolorpicker.com/en or https://color.adobe.com/ (explore the Triad radio button on the left)
                borderColor: "rgb(0,0,0)"//put black rgb(0,0,0) or the same color as above
            },
            {
                label: "Information Technology",// uncomment this line and set this to "Accountancy" for example
                data: [199,130,190,210,162,154],// uncomment this line and set this to an array [] with commas that are the bold numbers next to Accountancy for example
                borderWidth: 2,
                backgroundColor: "rgb(0,0,255)",//put a color here as rgb(0,0,255) or hsla(20,100%,80%,0.8) format, from https://imagecolorpicker.com/en or https://color.adobe.com/ (explore the Triad radio button on the left)
                borderColor: "rgb(0,0,0)"//put black rgb(0,0,0) or the same color as above
            },
            {
                label: "Law",// uncomment this line and set this to "Accountancy" for example
                data: [125,134,123,115,118,90],// uncomment this line and set this to an array [] with commas that are the bold numbers next to Accountancy for example
                borderWidth: 2,
                backgroundColor: "rgb(0,0,255)",//put a color here as rgb(0,0,255) or hsla(20,100%,80%,0.8) format, from https://imagecolorpicker.com/en or https://color.adobe.com/ (explore the Triad radio button on the left)
                borderColor: "rgb(0,0,0)"//put black rgb(0,0,0) or the same color as above
            },
            {
                label: "Medicine>",// uncomment this line and set this to "Accountancy" for example
                data: [86,94,83,96,97,94],// uncomment this line and set this to an array [] with commas that are the bold numbers next to Accountancy for example
                borderWidth: 2,
                backgroundColor: "rgb(0,0,255)",//put a color here as rgb(0,0,255) or hsla(20,100%,80%,0.8) format, from https://imagecolorpicker.com/en or https://color.adobe.com/ (explore the Triad radio button on the left)
                borderColor: "rgb(0,0,0)"//put black rgb(0,0,0) or the same color as above
            },
            {
                label: "Natural, Physical and Mathematical Sciences>",// uncomment this line and set this to "Accountancy" for example
                data: [674,880,827,796,946,1091],// uncomment this line and set this to an array [] with commas that are the bold numbers next to Accountancy for example
                borderWidth: 2,
                backgroundColor: "rgb(0,0,255)",//put a color here as rgb(0,0,255) or hsla(20,100%,80%,0.8) format, from https://imagecolorpicker.com/en or https://color.adobe.com/ (explore the Triad radio button on the left)
                borderColor: "rgb(0,0,0)"//put black rgb(0,0,0) or the same color as above
            }
        ],
    }
    new Chart("grad-bar-chart",
            {
                type: "bar",
                data: dataObj,
                options: { 
                    maintainAspectRatio: false,
                    legend: {
                        display: false
                    },
                    title: {
                        display: true,
                        text: ['Number of female graduate', 'per course'],//set this to 'Number of female graduates','per Course'
                        fontFamily: "TrebuchetMS",
                        fontSize: 24,
                        fontColor: 'rgb(0,120,0)',
                    }
                }
            });
