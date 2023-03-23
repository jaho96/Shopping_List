const button = document.querySelector('.button');
const input = document.querySelector('input');
const textArea = document.querySelector('.textArea');


function textAreaInputAndDelete(inputValue) {
  const div = document.createElement('div');
  const span = document.createElement('span');
  const deleteButton = document.createElement('button');

  div.setAttribute('class', 'list');

  span.textContent = inputValue;
  deleteButton.innerHTML = '<i class="fa-solid fa-trash-can trash"></i>'
    
  div.append(span, deleteButton);
  textArea.append(div);
    
  input.value = ``;


  deleteButton.addEventListener('click', (e)=> {
    const deleteDiv = e.target.parentNode.parentNode;
    if(deleteDiv === textArea)
      return
    deleteDiv.remove();
  })
}


input.addEventListener('keydown', (e)=> {
  const inputValue = input.value;

  if(e.key === 'Enter' && inputValue !== ''){
    textAreaInputAndDelete(inputValue);
  }
})

button.addEventListener('click', ()=> {
  const inputValue = input.value;
  if(inputValue !== ''){
    textAreaInputAndDelete(inputValue);
  }
})



