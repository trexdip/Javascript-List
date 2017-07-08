function myList()
{
	createUl()
}

function createUl()
{
	var item= document.getElementById('list').value

	var unorderedList= document.createElement('UL')
	unorderedList.setAttribute('id','unorderedListA')
	document.body.appendChild(unorderedList)

	var listItems= document.createElement('LI')
	var listItem= document.createTextNode(item)
	listItems.appendChild(listItem)

	document.getElementById('unorderedListA').appendChild(listItems)
}