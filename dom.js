let title =document.getElementById("title");
let email =document.getElementById("email");
let submit =document.getElementById("submit");
let mood = "create";
let tmp;

//create prodect
let datapro;
if (localStorage.signin !=null){
    datapro = JSON.parse(localStorage.signin)
} else{
    datapro=[]
}
submit.onclick = function (){
    let newpro = {
        title: title.value.tolowercase(),
        email: email.value
        data: new Data() tolocaleDatestring (),
    }
};
if (title.value !="" && email.value !=""){
    if(mood == "create"){
        datapro.push(newpro);
    } else {
        datapro[tmp] =newpro;
        ShowData();
        clearInputS();
        localStorage.setItem('signin', JSON.stringify(datapro));
        mood = "create";
        submit.innerHTML = "create";
        Count.style.display = "block";
    }
}

    //save logalstorage
    localStorage.setItem("signin", JSON.stringify(dataPro));

    showData();
    clearInputs();
;
  //clear inputs
  function clearInputs() {
    title.value = "";
    email.value = "";
  }
//read
function showData() {
    let table = "";
    for (let i = 0; i < dataPro.length; i++) {
      table += `
      <tr>
         <td>${i + 1}</td>
         <td>${dataPro[i].title}</td>
         <td>${dataPro[i].email}</td>
         <td>${dataPro[i].date}</td>
         <td><button onclick="ubdateData(${i})" id="Add">Add</button></td>
         <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
      </tr>
      `;
    }
}
document.getElementById("tbody").innerHTML = table;
  let btnDelete = document.getElementById("deleteAll");
  if (dataPro.length > 0) {
    btnDelete.innerHTML = `
    <button onclick = "deleteAll()">delete All</button>
    `;
  } else {
    btnDelete.innerHTML = ` `;
  }
//ubdate
function ubdateData(i) {
    title.value = dataPro[i].title;
    hours.value = dataPro[i].email;
    submit.innerHTML = "Update";
    mood = "ubdate";
    tmp = i;
    scroll({
      top: 0,
      behavior: "smooth",
    });
  }
  //delete
function deleteData(i) {
    dataPro.splice(i, 1);
    localStorage.signin = JSON.stringify(dataPro);
    showData();
  }
  function deleteAll() {
    dataPro.splice(0);
    localStorage.clear();
    showData();
  }
  //clean data
  //end