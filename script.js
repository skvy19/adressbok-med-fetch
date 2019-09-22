const employees = document.querySelector('ul')

fetch('adressbok-1.json')
   .then(response => response.json())

   // sortera på ålder
   .then (data => data.sort( (a, b) => a.age - b.age ))

   // lista av anställda
   .then(data => data.map(employee => {
       employees.innerHTML += "<li style='list-style-type: none'>" + `${employee.firstname} ${employee.lastname}, email: ${employee.email}`+ "</li>"
      
       console.log(employee.firstname, employee.age) // kollar om sortering verkligen ok 
    }))