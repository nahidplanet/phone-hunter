
const obj = {
    name:"nahid",
    dis: {
        n:"ab",
        b:"xxx",
        c:"444"
    },
    arr: ["amar","sonar","bangla"]
}

let xx = obj.arr;

const other = obj.dis;
const otherInfo = obj =>{
    for (const key in obj) {
       return `<tr>
        <td> ${key}</td>
        <td>${obj[key]}</td>
        </tr>`;

        array.forEach(element => {
            
        });
    }
}
const ot = otherInfo(other);
console.log(ot);


// ob(obj.arr);
// function ob(arr) {
//    for (const x of arr) {
//         return "result "+x;
        
//    }
// }
// console.log(ob(xx));





// =====================





// show details in Modal 

 
 const modalTop = document.getElementById("modalTop");
     modalTop.innerText = `${data.name}`;
     const modalBody = document.getElementById("ModalBody");
     const ModalCard = document.createElement("div");
     const modalCardClasses = ['card','shadow-sm'];
     ModalCard.classList.add(...modalCardClasses);
     ModalCard.innerHTML = `
                             <img
                             class="mx-auto my-0 pt-2"
                             src="${data.image}"
                             width="216"
                             height="256"
                             alt=""
                         />
 
                         <div class="card-body">
                             <h6 class="card-text">${data.name} Full Specifications</h6>
                             <div class="d-flex justify-content-between align-items-center">
                                 </table >
                                 <table class="table table-striped">
                                 <tbody>
 
                                     <tr>
                                     <td width="100"><h6>Brand</h6></td>
                                     <td>${data.brand}</td>
                                     </tr>
 
                                     <tr>
                                     <td><h6>Name</h6></td>
                                     <td>${data.name}</td>
                                     
                                     </tr>
 
                                     <tr>
                                     <td>ChipSet</td>
                                     <td>${data.mainFeatures.chipSet}</td>
                                     </tr>
 
                                     <tr>
                                     <td>ChipSet</td>
                                     <td>${data.mainFeatures.displaySize}</td>
                                     </tr>
 
                                     <tr>
                                     <td> Display Size </td>
                                     <td>${data.mainFeatures.displaySize}</td>
                                     </tr>
 
                                     <tr>
                                     <td> Memory</td>
                                     <td>${data.mainFeatures.memory}</td>
                                     </tr>
                                     
                                     <tr>
                                     <td> Sensor</td>
                                     <td>/td>
                                     </tr>
                                     
 
                                    
                                     
                                     <tr>
                                     <td> Sensor </td>
                                     <td></td>
                                     </tr>
                                 </tbody>
                                 </table>
                             </div>
                         </div>
     `;
     modalBody.appendChild(ModalCard);