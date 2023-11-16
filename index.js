// create array of objects that stores info about
// each freelancer
const freeLancerArr = [
    {name: 'John',
    occupation: 'Programmer',
    price: 30
    },
    {name: 'Samantha',
    occupation: 'Analyst',
    price: 45
    },
    {name: 'Monica',
    occupation: 'Program Manager',
    price: 100
    },
    {name: 'Jose',
    occupation: 'Lawyer',
    price: 400
    }
]

const freelancerContainer = document.querySelector('#freelancer-container')

// every few seconds (setinterval), add a new list item
// to the table and recalculate the average
const addNewFreelancer = setInterval(addInfo, 2000);

function render(){

const names = freeLancerArr.map((freelancer) => {

    const name = document.createElement('span');
    name.textContent = freelancer[name];
    return name;
    })

const occupations = freeLancerArr.map((freelancer) => {
    const occupation = document.createElement('span');
    occupation.textContent = freelancer[occupation];
    return occupation;
})

const prices = freeLancerArr.map((freelancer) => {
    const price = document.createElement('price');
    price.textContent = freelancer[i][price];
    return price;
})

    freelancerContainer.append(names, occupations, prices);
}
    // create new row
    // add / append? row to parent element 'table'

    // iterate through prices, add, and divide by length
    // update average

// calcAvg();

// function calcAvg(){
//     let listOfPrices = [];
//     let avg = 0;

//     document.querySelectorAll('#freelancer-info').forEach(item => listOfPrices.push(item.innerText));

//     for (let i = 0; i <= listOfPrices.length; i++){
//         const arrayEl = listOfPrices[i];
//         avg+= arrayEl[price];
//         avg = avg / listOfPrices.length;
//     }

//     const updatedAvg = document.createElement('div');
//     updatedAvg.textContent = `The average starting price is $${avg}.`

//     freelancerContainer.append(updatedAvg);

// }



// //     for (let i = 0; i < freeLancerArr.length; i++) {

// const name = document.createElement('span');
// name.textContent = freeLancerArr[i][name];

// const occupation = document.createElement('span');
// occupation.textContent = freeLancerArr[i][occupation];

// const price = document.createElement('price');
// price.textContent = freeLancerArr[i][price];

// freelancerContainer.append(name, occupation, price);

// return;
// }