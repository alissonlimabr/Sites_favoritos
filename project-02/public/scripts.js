const ul = document.querySelector('ul')
const input = document.querySelector('input')
const form = document.querySelector('form')

function addElement({ name, url }) {
    const nameValue = name;
    const urlValue = url;

    let li = document.getElementById("listaFavoritos").innerHTML;

            li += `<li>
            <span> ${nameValue}</span>
            <a href="${urlValue}">${urlValue}</a>
            <div>
                <button class="btnRemove">
                    <i class="fa fa-trash"></i>
                </button>
            </div>
        </li>`

    document.getElementById("listaFavoritos").innerHTML = li;
    
}

function removeElement(element) {
    const close = document.querySelectorAll('btnRemove');
    for(let i=0; i<close.length; i++){
        close[i].addEventListener('click',()=>{
            close[i].parentElement.style.opacity = 0;
            setTimeout(()=>{
                close[i].parentElement.style.display="none";
            },500);
        })
    }
    input.value = ''
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let { value } = input

    if (!value) 
        return alert('Preencha o campo!')

    const [name, url] = value.split(',')

    if (!url) 
        return alert('O texto não está formatado da maneira correta.')

    if (!/^http/.test(url)) 
        return alert('Digite a url da maneira correta.')

    addElement({ name, url })

    input.value = ''
})