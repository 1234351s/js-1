
// 1.Напиши скрипт в якому є три радіобатони зі значенями кольрів. При обиранніна будь якого колір фону боді змінюється відповідно

// <form>
//   <p>Choose a color:</p>
//   <label>
//     <input type="radio" name="color" value="red" checked />
//     Red
//   </label>
//   <label>
//     <input type="radio" name="color" value="white" />
//     White
//   </label>
//   <label>
//     <input type="radio" name="color" value="green" />
//     Green
//   </label>
// </form>
  const radios = document.querySelectorAll('input[name="color"]');
  
  radios.forEach(radio => {
    radio.addEventListener('change', event => {
      document.body.style.backgroundColor = event.target.value;
    });
  });

//   2.Напиши скрипт який, при наборі тексту в інпут input#name-input (подія input), підставляє його поточне значення в span#name-output. якщо інпут порожній, в спані повинен відображатися рядок 'незнайомець'.



//   <input type="text" placeholder="Ваше ім'я?" id="name-input" />
//   <h1>Привіт, <span id="name-output">незнайомець</span>!</h1>
  
  
//   Напиши скрипт, який би при втраті фокуса на інпут, перевіряв його вміст на правильну кількість символів.
  
  
  
//   <input
  
//     type="text"
  
//     id="validation-input"
  
//     data-length="6"
  
//     placeholder="Введи 6 символів"/>
  
//   Скільки символів має бути в інпут, вказується в його атрибуті data-length.
//   Якщо введена відповідна кількість, то border інпут стає зеленим,   якщо неправильне - червоним.
//   Для додавання стилів, використовуй CSS-класи valid і invalid.
  
//   #validation-input {
  
//     border: 3px solid #bdbdbd;
  
//   }
  
  
  
//   #validation-input.valid {
  
//     border-color: #4caf50;
  
//   }
  
  
  
//   #validation-input.invalid {
  
//     border-color: #f44336;
  
//   }


const nameInput = document.createElement('input');
nameInput.type = 'text';
nameInput.placeholder = "Ваше ім'я?";
nameInput.id = 'name-input';

const greeting = document.createElement('h1');
greeting.innerHTML = 'Привіт, <span id="name-output">незнайомець</span>!';


document.body.appendChild(nameInput);
document.body.appendChild(greeting);


const nameOutput = greeting.querySelector('#name-output');
nameInput.addEventListener('input', () => {
  nameOutput.textContent = nameInput.value.trim() || 'незнайомець';
});


const validationInput = document.createElement('input');
validationInput.type = 'text';
validationInput.id = 'validation-input';
validationInput.dataset.length = '6';
validationInput.placeholder = 'Введи 6 символів';
validationInput.style.border = '3px solid #bdbdbd';


document.body.appendChild(validationInput);


const style = document.createElement('style');
style.textContent = `
  #validation-input.valid {
    border-color: #4caf50;
  }
  #validation-input.invalid {
    border-color: #f44336;
  }
`;
document.head.appendChild(style);

const requiredLength = Number(validationInput.dataset.length);
validationInput.addEventListener('blur', () => {
  if (validationInput.value.length === requiredLength) {
    validationInput.classList.add('valid');
    validationInput.classList.remove('invalid');
  } else {
    validationInput.classList.add('invalid');
    validationInput.classList.remove('valid');
  }
});


// 3. Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text оновлюючи властивість font-size. В результаті при перетягуванні повзунка змінюватиметься розмір тексту.



// <input id="font-size-control" type="range" />
// <br />
// <span id="text">Абракадабра!</span>


const fontSizeControl = document.getElementById('font-size-control');
const textSpan = document.getElementById('text');

fontSizeControl.addEventListener('input', () => {
  textSpan.style.fontSize = `${fontSizeControl.value}px`;
});
