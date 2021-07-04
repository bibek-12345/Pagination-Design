/************************************* storing json data into array i.e Array of Object *************************************/
let storeData = [];
var req = new XMLHttpRequest();
req.open("GET", "https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json", true);
req.send();
req.onload = function () {
	var data = JSON.parse(this.response);
	for (var i = 0; i < data.length; i++) {
		storeData.push({
			'id': data[i].id,
			'name': data[i].name,
			'email': data[i].email
		});
	}

};


/************************************* center table UI element *************************************/
let containerUI = document.createElement('div');
containerUI.className = 'center-container';


/************************************* table UI element *************************************/
let tableUI = document.createElement('table');
tableUI.className = 'table-design';


/************************************* table title UI element *************************************/
let captionUI = document.createElement('div');
captionUI.className = 'table-title';

let pUI = document.createElement('p');
pUI.textContent = 'Pagination';

captionUI.append(pUI);
containerUI.append(captionUI);


/************************************* function to create UI element th/td/div *************************************/
let create_element = (element_name, text) => {

	let tag = document.createElement(element_name);
	tag.textContent = text;
	return tag;

};


/************************************* calling create_element function to create UI th element *************************************/
let create_th = () => {

	let theadUI = document.createElement('thead');
	let trUI = document.createElement('tr');

	let thUI1 = create_element('th', 'ID');
	let thUI2 = create_element('th', 'Name');
	let thUI3 = create_element('th', 'Email');

	trUI.append(thUI1, thUI2, thUI3);
	theadUI.append(trUI);
	tableUI.append(theadUI);

};


/************************************* calling create_element function to create UI td element *************************************/
let create_td = (data, start, end) => {

	let tbodyUI = document.createElement('tbody');

	for (let i = start; i <= end; i++) {
		trUI = document.createElement('tr');

		let tdUI1 = create_element('td', data[i - 1].id);
		let tdUI2 = create_element('td', data[i - 1].name);
		let tdUI3 = create_element('td', data[i - 1].email);

		trUI.append(tdUI1, tdUI2, tdUI3);
		tbodyUI.append(trUI);
		tableUI.append(tbodyUI);
	}

	containerUI.insertBefore(tableUI, divContainerUI); //Insert the table just before the pagination

};


/************************************* div UI element *************************************/
let divContainerUI = document.createElement('div');
divContainerUI.className = "container";


/************************************* calling create_element function to create UI div element *************************************/
let ids = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'first', 'last', 'previous'];
for (let i = 1; i <= 13; i++) {

	let divFlexUI = create_element('div', i);

	if (i > 10) {
		divFlexUI.textContent = i === 11 ? 'First' : i === 12 ? "Last" : "Previous";
	}

	divFlexUI.className = "flex-box";
	divFlexUI.id = ids[i - 1];

	divContainerUI.append(divFlexUI);

}

containerUI.append(divContainerUI);
document.body.appendChild(containerUI);


/************************************* EvenListener *************************************/
divContainerUI.addEventListener('click', runEvent);

let previous = ' '; //it is used to display the previous element which is selected

function runEvent(e) {

	function updateTableData(current, previous) {

		if (previous !== ' ') {
			//Update the Previous selected element to its background color and text color
			previous.style.backgroundColor = '#dee7e6';
			previous.style.color = '#009879';
		}

		//Update the currently selected element to new background color and text color
		current.style.backgroundColor = '#009879';
		current.style.color = '#dee7e6';

		if (current.id === 'first') {
			start = 1;
			end = 10;
			tableUI.textContent = ' ';
			create_th();
			create_td(storeData, start, end);
		} else if (current.id === 'last') {
			start = 91;
			end = 100;
			tableUI.textContent = ' ';
			create_th();
			create_td(storeData, start, end);
		} else {
			end = current.textContent * 10;
			start = end - 9;
			tableUI.textContent = ' ';
			create_th();
			create_td(storeData, start, end);
		}
	}

	let start, end; //starting and ending point of respective data click by the user
	let current = e.target; //it is used to display the current element that user click

	if (current.id === 'one') {
		updateTableData(current, previous);
	} else if (current.id === 'two') {
		updateTableData(current, previous);
	} else if (current.id === 'three') {
		updateTableData(current, previous);
	} else if (current.id === 'four') {
		updateTableData(current, previous);
	} else if (current.id === 'five') {
		updateTableData(current, previous);
	} else if (current.id === 'six') {
		updateTableData(current, previous);
	} else if (current.id === 'seven') {
		updateTableData(current, previous);
	} else if (current.id === 'eight') {
		updateTableData(current, previous);
	} else if (current.id === 'nine') {
		updateTableData(current, previous);
	} else if (current.id === 'ten') {
		updateTableData(current, previous);
	} else if (current.id === 'first') {
		updateTableData(current, previous);
	} else if (current.id === 'last') {
		updateTableData(current, previous);
	} else if (e.target.id === 'previous') {
		current = previous.previousElementSibling;
		updateTableData(current, previous);
	}

	previous = current;

};
