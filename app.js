// selector 
const faqList = document.querySelector('.faq-list');

// function
const renderFAQ = async () => {
    const url = 'http://localhost:3000/faq';

    const res = await fetch(url);
    const faqs = await res.json();

    let template = '';

    faqs.forEach(faq => {
        template += `
            <div class="faq-item">
                <li>
                    <p>${faq.title}</p>
                    <i class="fas fa-chevron-down"></i>
                </li>
                <p class="faq-item-content">${faq.body}</p>
            </div>
        `;
    });

    faqList.innerHTML = template;
}

const showContent = async (e) => {
    const item = e.target;
    item.classList.toggle('active');
}



// event listener 
window.addEventListener('DOMContentLoaded', () => renderFAQ());
faqList.addEventListener('click', showContent);