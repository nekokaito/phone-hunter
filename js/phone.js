const loadPhone = async (text) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/phones?search=${text}`);
    const data = await response.json();
    const phones = data.data;
     displayPhone(phones);
}

const displayPhone = phones => {
   const phoneDiv = document.getElementById('phone-box');
   phoneDiv.innerHTML = '';
    console.log(phones.length);
   phones.forEach(phone => {
            const phoneCard = document.createElement('div');
            console.log(phone);
            phoneCard.classList = 'card w-96 bg-gray-100 shadow-xl';
            phoneCard.innerHTML = `
            <figure class="px-10 pt-10">
            <img src="${phone.image}" alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">${phone.phone_name}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions">
              <button class="btn btn-primary">Buy Now</button>
            </div>
          </div>
    `
    phoneDiv.appendChild(phoneCard);
   });

   
}

const searchBox = () => {
  
  const searchText = document.getElementById('phone_search');
  const searchContent = searchText.value;

  loadPhone(searchContent);

}
document.getElementById('phone_search').addEventListener('input', searchBox);

