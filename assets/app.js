
const SearchButton = document.getElementById("searchButton");

SearchButton.addEventListener("click",function(){
    const inputTag = document.getElementById("searchText");
    const inputText = inputTag.value;
    inputTag.value = "";
  const url = `https://openapi.programming-hero.com/api/phones?search=${inputText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayData(data.data));
});

const displayData = data =>{
    const row = document.getElementById("allPhone");
    // console.log(data);
    data.forEach(phone => {
        console.log(phone);
        const div = document.createElement("div");
        const divClasses = ["col-md-4", "col-sm-12", "mt-5"]
        div.classList.add(...divClasses);
        div.innerHTML = `
        
                    <div class="card shadow-sm ">
                        <img class="mx-auto my-0 pt-2" src="${phone.image}" width="216" height="256" alt="" />
                        <div class="card-body">
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    <button type="button" class="btn btn-sm btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">View Details</button>
                                    
                                </div>
                                <small class="text-muted">9 mins</small>
                            </div>
                        </div>
                    </div>
        `;
        row.appendChild(div);
       
    });
}
