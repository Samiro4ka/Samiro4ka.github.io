/*function changeTitle()
{
	document.title='Мой заголовок'
}*/

function changeColor()
{
	/*2const myElement=document.getElementById("txt");	
	r=Math.floor(Math.random()*255)
	g=Math.floor(Math.random()*255)
	b=Math.floor(Math.random()*255)
	myElement.style.color=`rgb(${r},${g},${b})`;
	const lst=document.getElementById("lst");*/
	/*1const node=document.createElement("li")
	const textnode=document.createTextNode(Math.floor(Math.random()*255))
	node.appendChild(textnode)
	lst.appendChild(node)*/
	/*3const f=document.getElementById("textinput");
	const node=document.createElement("li")
	console.log(f)
	const textnode=document.createTextNode(f.value)
	node.appendChild(textnode)
	lst.appendChild(node)*/
	const myElement=document.getElementById("txt");
	const a=document.getElementById("ainput");
	const b=document.getElementById("binput")
	const action=document.getElementById("action")
	act=action.options[action.selectedIndex].text
	if(act=='+')
	{
		res=parseInt(a.value)+parseInt(b.value)
	}
	else if (act=='-')
	{
		res=parseInt(a.value) - parseInt(b.value)
	}
	else if (act=='/')
	{
		res=parseInt(a.value)/parseInt(b.value)
	}
	else if(act=='*')
	{
		res=parseInt(a.value)*parseInt(b.value)
	}
	myElement.innerHTML='Ответ:'+res
	/*res=parseInt(a.value)+parseInt(b.value)
	myElement.innerHTML='Ответ:'+res*/
}
/*const myElement=document.getElementById("title");
myElement.style.color="red";
myElement.innerHTML='hello';*/
