import { onAuthStateChanged, signOut, } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { collection, getDocs, query, where } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
import { auth, db } from "./config.js";


const logoutBtn = document.querySelector('#logoutBtn')
const userIcon = document.querySelector('#userIcon')
const loginDiv = document.querySelector('#loginDiv')
const cardsSection = document.querySelector('.cards-section')



onAuthStateChanged(auth, async (user) => {
    if (user) {
        const uid = user.uid;
        const q = query(collection(db, "users"), where("uid", "==", uid));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            let data = doc.data()
            userIcon.src = data.photoUrl
        });
    } else {
        console.log('user is not here');
        loginDiv.innerHTML = `<a href="./login.html"><button class="btn btn-dark">login</button></a>`
    }
});

userIcon.addEventListener('click', () => {

                window.location = './postad.html'
            }
        );


logoutBtn.addEventListener('click', () => {
    signOut(auth).then(() => {
        Swal.fire({
            title: 'Success!',
            text: 'Log-out Successfully',
            icon: 'success',
            confirmButtonText: 'Login'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    window.location = './login.html'
                }
            });
    }).catch((error) => {
        console.log(error);
    });
})

const productData = [];

async function renderScreen() {
    const querySnapshot = await getDocs(collection(db, "product_details"));
    querySnapshot.forEach((doc) => {
        let data = doc.data()
        productData.push(data)
        // console.log(productData);
    });
        productData.map((item,index) => {
            // console.log(item);
            card_section.innerHTML += `
            <div class="product-card">
                <div class="product-image">
                    <img src="${item.productImage}" alt="${item.product_title}">
                </div>
                <div class="product-info">
                    <h2>${item.product_title}</h2>
                    <h2>Contect Seller: ${item.phone_number}</h2>
                    <p class="price"><span>Rs ${item.product_Price}</span></p>
                    <button id="adToCard">Read More</button>
                </div>
            </div>
            `

            const adToCard = document.querySelectorAll('#adToCard')

            adToCard.forEach((btn, index) => {
                btn.addEventListener('click', ()=> {
                    // console.log(productData[index]);
                    localStorage.setItem('sendlocal', JSON.stringify(productData[index]))
                    window.location = '../singalProduct.html'
                })
            })
        })
    
}
renderScreen()