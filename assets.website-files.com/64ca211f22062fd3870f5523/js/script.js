// console.log('working');

// const form = document.querySelector('form');

// form.addEventListener('submit', async (e) => {
//   e.preventDefault();

//   const formData = new FormData(form);
//   const data = {};
//   formData.forEach((value, key) => {
//     data[key] = value;
//   });

//   try {
//     const response = await fetch('https://script.google.com/macros/s/AKfycbxYWqatKOWPeX4zjs7-heHRuBReEygVgzQM9bFkziJi69i1qUvcmfqktfzAZb08BnvKlA/exec', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//         'mode': 'no-cors',
//       },
//       body: new URLSearchParams(data)
//     });

//     if (response.ok) {
//       alert('Form submitted successfully!');
//     } else {
//       alert('Form submission failed.');
//     }
//   } catch (error) {
//     console.error('Error submitting form:', error);
//   }
// });

