const loadPhone = async (text) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/phones?search=${text}`);
    const data = await response.json();
    const phones = data.data;
     displayPhone(phones);
     
}

const displayPhone = phones => {
   const phoneDiv = document.getElementById('phone-box');
   const nextDiv = document.getElementById('next-box');
   phoneDiv.innerHTML = '';
    console.log(phones.length);
    if (phones.length > 9) {
          nextDiv.classList.remove('hidden');
    }
    else {
      nextDiv.classList.add('hidden')
    }
    phones = phones.slice(0,9);
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
              <button onclick="moreDetails('${phone.slug}')" class="btn btn-primary">Details</button>
            </div>
          </div>
    `
    phoneDiv.appendChild(phoneCard);
   });
  
   loading(false);
   
}

const searchBox = () => {
  
  loading(true);
  const searchText = document.getElementById('phone_search');
  const searchContent = searchText.value;

  loadPhone(searchContent);
  

}

const moreDetails = async (id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
    const data = await res.json();
    console.log(data.data);
}


const loading = (isYes) => {
    const loadingDiv = document.getElementById('loading');
    
    if (isYes) {
      loadingDiv.classList.remove('hidden');
    }
    else {
      loadingDiv.classList.add('hidden');
    }



}


