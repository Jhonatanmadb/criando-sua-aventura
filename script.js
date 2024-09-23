const avanca = document.queryselectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addEventListener('click', function(){
        const atual = ducument.queryselector('.ativo');
        const ProximoPasso = 'passo-' + this.getAttribute('data-proximo');

        atual.ClassList.remove('ativo');
        document.getElementsById(PromixoPasso).classlist.add('ativo');
    })
})