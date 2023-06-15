function getHandler(e) {
    e.preventDefault();

    const _url = `http://localhost:3000/`;

    const _options = {
        method: 'get',
        mode: 'cors',
        redirect: 'follow',
        cache: 'default'
    }


    {

        fetch(_url, _options)
            .then(function (response) {
                // Tratar Erros
                if (!response.ok) throw new Error('Erro ao executar requisição!');

                return response.json();
            }
            )
            .then(function (data) {
                // console.log(data);

                let newContent = "";
                newContent += `<tr class="tr_title">`;
                newContent += `<td class="td_title">ID</td>`;
                newContent += `<td class="td_title">CLIENTE</td>`;
                newContent += `<td class="td_title">TELEFONE</td>`;
                newContent += `</tr>`;
                for (let i = 0; i < data.length; i++) {
                    newContent += `<tr class="tr_item" id="lista">`;
                    newContent += `<td class="td_item" id="itens${i}">${data[i].id}</td>`;
                    newContent += `<td class="td_item"><p id="nome${i}">${data[i].nome}</p></td>`;
                    newContent += `<td class="td_item" type="checkbox">
                                    </td>`;
                    newContent += `</tr>`;

                }

                document.getElementById('lista').innerHTML = newContent;


            })

    }

}

window.onload = () => {
    getHandler();
}