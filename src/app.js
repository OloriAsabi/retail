const linksDOM = document.getElementById("links");

fetch("./stores.json")
  .then(function (response) {
    return response;
  })
  .then(function (data) {
    console.log(data);
    return data.json();
  })
  .then(function (Normal) {
    const html = Normal.map(
      (data) =>
            `<div class='flex borderHeight odd:bg-[#fcbc41] odd:text-[#fff] flex-col justify-center text-center items-center'>
            <h1 class="text-[#5e1605]">${data.City}</h1>
            <div class='dash text-[#fff]'/></div>
            <p class="text-2xl font-normal text-[#5e1605] pt-3" >${data.Locality}</p>
            </div>`
      )
      .join('');
    linksDOM.innerHTML = html
  })

  .catch(function (err) {
    console.log("Fetch problem show: " + err.message);
  });