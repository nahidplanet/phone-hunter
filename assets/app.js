
const SearchButton = document.getElementById("searchButton");

// Load Api With EventListener 
SearchButton.addEventListener("click",function(){
    const inputTag = document.getElementById("searchText");
    const inputText = inputTag.value;
    inputTag.value = "";
    const url = `https://openapi.programming-hero.com/api/phones?search=${inputText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayData(data.data));
});

// search Phone Result 
const displayData = data =>{
    const row = document.getElementById("allPhone");
    row.textContent = "";
    data.forEach(phone => {
        const div = document.createElement("div");
        const divClasses = ["col-md-4", "col-sm-12", "mt-5"]
        div.classList.add(...divClasses);
        div.innerHTML = `
        
                    <div class="card shadow-sm ">
                        <img class="mx-auto my-0 pt-2" src="${phone.image}" width="216" height="256" alt="" />
                        <div class="card-body">
                            <h3 class="card-title">${phone.phone_name}</h3>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    <button onclick="phoneDetails('${phone.slug}')" type="button" class="btn btn-sm btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal" >View Details</button>
                                    
                                </div>
                                <small class="text-muted">Brand: ${phone.brand}</small>
                            </div>
                        </div>
                    </div>
        `;
        row.appendChild(div);
       
    });
}

const phoneDetails = id =>{
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    fetch(url)
    .then(res => res.json())
    .then(data => showDetailsInModal(data.data));
 }
 const showDetailsInModal = data =>{
     const modalContainer = document.getElementById("my-modal");
     modalContainer.textContent = "";
     const modalRow = document.createElement("div");
     modalRow.classList.add("modal-content");
     modalRow.innerHTML = `
     <div class="modal-header">
     <h5 class="modal-title" id="exampleModalLabel" id="modalTop">
      ${data.name}
     </h5>
     <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
   </div>
   <div id="ModalBody" class="modal-body">
                    <div class="image text-center">
                    <img
                    class=" pt-2"
                    src="${data.image}"
                    width="216"
                    height="256"
                    alt=""
                />
                    </div>

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
                                    <td> Display Size </td>
                                    <td>${data.mainFeatures.displaySize}</td>
                                    </tr>

                                    <tr>
                                    <td> Memory</td>
                                    <td>${data.mainFeatures.memory}</td>
                                    </tr>
                                    
                                    <tr>
                                    <td> Sensor</td>
                                    <td></td>
                                    </tr>
                                    

                                  
                                    
                                    <tr>
                                    <td> Sensor </td>
                                    <td></td>
                                    </tr>
                                </tbody>
                                </table>
                            </div>
                        </div>
                  </div>
     `;
     modalContainer.appendChild(modalRow);
 }