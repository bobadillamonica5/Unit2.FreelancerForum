const freelancerArr = [{name: 'John', occupation: 'Programmer', price: 30}, {name: 'Samantha', occupation: 'Analyst', price: 45}]
const avgPrice = 50;
const newNames = ['James', 'Lou', 'Kathy', 'Sam', 'Dawn'];
const newPrices = [40, 80, 20, 399, 200];
const newOccupations = ['Developer', 'Teacher', 'Dog Walker', 'Guitar Player', 'Analyst'];
const freelancerContainer = document.querySelector('#freelancer-container')
const avgPriceSection = document.querySelector('#price');
const newDataLength = newNames.length;


// 1. Add rows and populate initial names, price etc
function buildInitialTable(){
    // add column to table and populate with names pulled from initial array
    const rows = freelancerArr.forEach((freelancerObj) => {
        
        const row = document.createElement('tr');
        const name = document.createElement('td');
        name.textContent = freelancerObj.name;
        row.appendChild(name);

        // add column to table and populate with population pulled from initial arr
        const occupation = document.createElement('td');
        occupation.textContent = freelancerObj.occupation;
        row.appendChild(occupation);

        // || with price
        const price = document.createElement('td');
        price.textContent = '$' + freelancerObj.price;
        row.appendChild(price);

        freelancerContainer.appendChild(row);
    })
        // attach rows to freelancer table
    }

// 2. Add section to populate initial average
function initialAvg(){    
    // store avg price in div
    avgPriceSection.textContent = `$${avgPrice}.`;

}

// 3. Render data from initial fields (avg, name etc)
function render(){
    
    buildInitialTable();
    initialAvg();
    
    const addRowIntervalId = setInterval(addNewRows, 2000);
    
    setTimeout(() => clearInterval(addRowIntervalId), 7000);

    // update avg price (call calc avg)
};

const randomIndex = function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


// 4. Generate random names, prices, occupations
function generateRandomRows() {
    const newFreelancerObj = {};
    const row = document.createElement('tr');
    const name = document.createElement('td');
    newFreelancerObj.name = newNames[randomIndex(newDataLength)];
    name.textContent = newFreelancerObj.name;
    row.appendChild(name);
    freelancerContainer.appendChild(row)

    const occupation = document.createElement('td');
    newFreelancerObj.occupation = newOccupations[randomIndex(newDataLength)];
    occupation.textContent = newFreelancerObj.occupation;
    row.appendChild(occupation);
    freelancerContainer.appendChild(row)

    const price = document.createElement('td');
    newFreelancerObj.price = newPrices[randomIndex(newDataLength)];
    price.textContent = '$' + newFreelancerObj.price;
    row.appendChild(price);
    freelancerContainer.appendChild(row)

    console.log('new obj: ', newFreelancerObj);

    freelancerArr.push(newFreelancerObj);
    console.log('updated array: ', freelancerArr);
}
// generate random num but cant be greater than list
// insert as index for name
// add to object
// push object to freelancers array

// 4. Activate setIntervial to add new data from arrays

function addNewRows(){

    generateRandomRows();
    updateAvgPrice();

}

function updateAvgPrice(){
    let newAvg = 0;
    let sum = 0;

    // access array
    // access obj in array
    // access price in obj
    // add to sum
    // divide sum by length of array

    freelancerArr.forEach((el) => {
        console.log('obj: ', el);
        sum+= el.price; 
    })

    newAvg = Math.floor(sum / freelancerArr.length);
    avgPriceSection.textContent = `$${newAvg}.`;

}

render();
