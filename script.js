document.addEventListener('DOMContentLoaded', () => {
    const presentesLista = document.getElementById('presentes-lista');
    const modalPix = document.getElementById('modal-pix');
    const adminPanel = document.getElementById('admin-panel');
    const closeButtons = document.querySelectorAll('.close-button');
    const adminBtn = document.getElementById('admin-btn');
    const pixBtn = document.getElementById('pix-btn');
    const copiarPixBtn = document.getElementById('copiar-pix-btn');
    const pixCopiadoMensagem = document.getElementById('pix-copiado-mensagem');
    const entrarAdminBtn = document.getElementById('entrar-admin-btn');
    const adminSenhaInput = document.getElementById('admin-senha');
    const reservasListaAdmin = document.getElementById('reservas-lista-admin');
    const listaReservasElement = document.getElementById('lista-reservas');
    const adminErroMensagem = document.getElementById('admin-erro-mensagem');

    // Dados dos presentes (substitua com seus links e informações)
    let presentes = [
        { id: 1, nome: 'Multiprocessador de Alimentos', preco: 'R$ 329,00', imagem: 'https://imgs.casasbahia.com.br/55048238/4g.jpg?imwidth=500', linkCompra: 'https://www.casasbahia.com.br/multiprocessador-de-alimentos-mondial-turbo-chef-9-em-1-mpn-01-bf-com-2-velocidades-pulsar-1000-w/p/55048238', reservadoPor: null },
        { id: 2, nome: 'Fritadeira Elétrica', preco: 'R$ 599,00', imagem: 'https://imgs.casasbahia.com.br/55065681/1g.jpg?imwidth=500', linkCompra: 'https://www.casasbahia.com.br/fritadeira-eletrica-sem-oleo-air-fryer-oven-2-em-1-mondial-afon-12l-bi-12l-digital---preta-inox---110v-55065681.html', reservadoPor: null },
        { id: 3, nome: 'Forno de Micro-ondas Philco', preco: 'R$ 528,00', imagem: 'https://imgs.casasbahia.com.br/55031124/1xg.jpg?imwidth=500', linkCompra: 'https://www.casasbahia.com.br/forno-de-micro-ondas-philco-pmo23eb-com-menu-fit-20-litros---branco-e-prata---110v-55031124.html', reservadoPor: null },
        { id: 4, nome: 'Sanduicheira Elétrica', preco: 'R$ 109,00', imagem: 'https://imgs.casasbahia.com.br/55066944/1g.jpg?imwidth=500', linkCompra: 'https://www.casasbahia.com.br/sanduicheira-eletrica-cadence-click-750w-com-botao-liga-e-desliga---san400---110v-55066944.html', reservadoPor: null },
        { id: 5, nome: 'Panela Elétrica de Pressão', preco: 'R$ 399,00', imagem: 'https://imgs.casasbahia.com.br/55015422/1g.jpg?imwidth=500', linkCompra: 'https://www.casasbahia.com.br/panela-eletrica-de-pressao-mondial-digital-master-cooker-pe-40-3l---preta-inox---220v-55015422.html', reservadoPor: null },
        { id: 6, nome: 'Kit Potes Herméticos Plásticos', preco: 'R$ 104,03', imagem: 'https://http2.mlstatic.com/D_NQ_NP_730999-MLU72569136498_112023-O.webp', linkCompra: 'https://www.mercadolivre.com.br/kit-potes-hermeticos-plasticos-branco-e-cinza-12-unidades-electrolux/p/MLB23191928?pdp_filters=item_id%3AMLB4328622612&from=gshop&matt_tool=13891073&matt_word=&matt_source=google&matt_campaign_id=22090193717&matt_ad_group_id=174661961684&matt_match_type=&matt_network=g&matt_device=m&matt_creative=727914179470&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735128761&matt_product_id=MLB23191928-product&matt_product_partition_id=2388009210226&matt_target_id=aud-1966852281496%3Apla-2388009210226&cq_src=google_ads&cq_cmp=22090193717&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=1&gbraid=0AAAAAD93qcCXomrz2S49fu90nUtXwjJXv&skipInApp=true', reservadoPor: null },
        { id: 7, nome: 'Faqueiro em Aço Inox 24 Peças', preco: 'R$ 73,78', imagem: 'https://m.media-amazon.com/images/I/61x2HGF7CfL._AC_SX679_.jpg', linkCompra: 'https://www.amazon.com.br/dp/B0789M146B?ref=cm_sw_r_mwn_dp_022AY4XCFMWRQJZHAF7N&ref_=cm_sw_r_mwn_dp_022AY4XCFMWRQJZHAF7N&social_share=cm_sw_r_mwn_dp_022AY4XCFMWRQJZHAF7N&language=pt-BR', reservadoPor: null },
        { id: 8, nome: 'Serviço de Jantar e Chá 20 Peças', preco: 'R$ 359,06', imagem: 'https://m.media-amazon.com/images/I/41pr+J3XTqL._AC_SX679_.jpg', linkCompra: 'https://a.co/d/33pwiKj', reservadoPor: null },
        { id: 9, nome: 'Ar Condicionado', preco: 'R$ 2.657,00', imagem: 'https://imgs.casasbahia.com.br/1562813025/1xg.jpg?imwidth=500', linkCompra: 'https://www.casasbahia.com.br/ar-condicionado-split-hi-wall-inverter-r-32-lg-dual-voice-inteligencia-artificial-9000-btus-frio-220v/p/1562813025', reservadoPor: null },
        { id: 10, nome: 'Conjunto Jogo 6 Panelas', preco: 'R$ 374,10', imagem: 'https://http2.mlstatic.com/D_NQ_NP_777532-MLU77124416772_062024-O.webp', linkCompra: 'https://www.mercadolivre.com.br/jogo-de-panelas-induco-conjunto-10-pecas-fundo-triplo-pratic-cook-marmol-vanilla-mimo-style/p/MLB37879062?pdp_filters=item_id%3AMLB3766077365#cart_referer=item#source=shopping_cart', reservadoPor: null },
        { id: 11, nome: 'Conjunto de Utensílios de Cozinha 12 Peças', preco: 'R$ 74,90', imagem: 'https://m.media-amazon.com/images/I/615DiYtWGlL._AC_SX679_.jpg', linkCompra: 'https://a.co/d/fJqIgfK', reservadoPor: null },
        { id: 12, nome: 'Sofá Retrátil Reclinável', preco: 'R$ 2.770', imagem: 'https://http2.mlstatic.com/D_NQ_NP_871895-MLB80836618834_122024-O-sofa-retratil-reclinavel-zeus-com-molas-ensacadas-linho-19m.webp', linkCompra: 'https://produto.mercadolivre.com.br/MLB-3923010473-sofa-retratil-reclinavel-zeus-com-molas-ensacadas-linho-19m-_JM?variation=186249648639#source=shopping_cart', reservadoPor: null },
        { id: 13, nome: 'Robô Aspirador', preco: 'R$ 1.699,90', imagem: 'https://images9.kabum.com.br/produtos/fotos/366169/robo-aspirador-kabum-smart-900-127v-branco-kbsf011_1731502405_g.jpg', linkCompra: 'https://www.kabum.com.br/produto/366169', reservadoPor: null },
        { id: 14, nome: 'Lixeira Com Pedal E Balde', preco: 'R$ 79,00', imagem: 'https://http2.mlstatic.com/D_NQ_NP_942365-MLA79735997503_102024-O.webp', linkCompra: 'https://www.mercadolivre.com.br/lixeira-com-pedal-e-balde-interno-agata-inox-5-litros-mor-cor-cinza/p/MLB19544670#polycard_client=recommendations_home_affiliate-profile&reco_backend=item_decorator&reco_client=home_affiliate-profile&reco_item_pos=0&source=affiliate-profile&reco_backend_type=function&reco_id=038c9e48-64f7-4528-bf91-305559b1dda2&tracking_id=5d2e2c4d-0dbd-4f2f-8682-f595e537044f&wid=MLB3651413217&sid=recos&c_id=/home/card-featured/element&c_uid=1b3aae17-f8db-4ad4-972d-37fb699c6dba', reservadoPor: null },
        { id: 15, nome: 'Conjunto Acessórios P Banheiro', preco: 'R$ 67,26', imagem: 'https://http2.mlstatic.com/D_NQ_NP_686378-MLU75824150044_042024-O.webp', linkCompra: 'https://www.mercadolivre.com.br/conjunto-acessorios-p-banheiro-lixeira-saboneteira-6-pecas-cor-preto/p/MLB32985292#polycard_client=recommendations_home_affiliate-profile&reco_backend=item_decorator&reco_client=home_affiliate-profile&reco_item_pos=0&source=affiliate-profile&reco_backend_type=function&reco_id=ec90efd3-e8a3-4d41-a0ea-d49c3cca1806&tracking_id=a6269cdb-d037-43e3-a07f-fb8b96454509&wid=MLB5229476020&sid=recos&c_id=/home/card-featured/element&c_uid=cc7a4334-f971-4e4f-99b3-ad6c2afb0479', reservadoPor: null },
        { id: 16, nome: 'Cesto Roupas Sujas', preco: 'R$ 74,82', imagem: 'https://http2.mlstatic.com/D_NQ_NP_874642-MLB79345226228_092024-O-cesto-roupas-sujas-bambu-retangular-forrado-banheiro-grande.webp', linkCompra: 'https://produto.mercadolivre.com.br/MLB-4477249828-cesto-roupas-sujas-bambu-retangular-forrado-banheiro-grande-_JM#polycard_client=recommendations_home_affiliate-profile&reco_backend=item_decorator&reco_client=home_affiliate-profile&reco_item_pos=0&source=affiliate-profile&reco_backend_type=function&reco_id=82e12830-3553-4b57-9ca8-7173f574640d&tracking_id=b2263450-80c6-44f5-8c8c-a686a6b88c6e&c_id=/home/card-featured/element&c_uid=072cc165-a95e-4971-b21e-262f4a9ad69a', reservadoPor: null },
        { id: 17, nome: 'Roteador Huawei Easymesh', preco: 'R$ 248,54', imagem: 'https://m.media-amazon.com/images/I/41AWxaTM93L._AC_SX679_.jpg', linkCompra: 'https://a.co/d/2LTgAl1', reservadoPor: null }

    ];

    // Carregar reservas do localStorage
    let reservas = JSON.parse(localStorage.getItem('reservas')) || {};
    const senhaAdmin = 'casar123';
    let adminLogado = false;

    // Função para renderizar a lista de presentes
    function renderizarPresentes() {
        presentesLista.innerHTML = '';
        presentes.forEach(presente => {
            const div = document.createElement('div');
            div.classList.add('presente-item');
            if (presente.reservadoPor) {
                div.classList.add('reservado');
            }
            div.innerHTML = `
                <img src="${presente.imagem}" alt="${presente.nome}">
                <div class="presente-info">
                    <h3>${presente.nome}</h3>
                    <p>${presente.preco}</p>
                </div>
                <div class="presente-acoes">
                    ${presente.reservadoPor ?
                        `<button class="indisponivel-btn" disabled>Reservado por: ${presente.reservadoPor}</button>` :
                        `<button class="reservar-btn" data-id="${presente.id}">Reservar</button>`
                    }
                    <a href="${presente.linkCompra}" class="comprar-btn" target="_blank">Comprar</a>
                </div>
                <div class="presente-detalhes" id="detalhes-${presente.id}" style="display:none;">
                    <h4>Reservar ${presente.nome}</h4>
                    <input type="text" id="nome-reservante-${presente.id}" placeholder="Seu Nome">
                    <button class="confirmar-reserva-item-btn" data-id="${presente.id}">Confirmar Reserva</button>
                    <div class="reserva-feedback" id="feedback-${presente.id}"></div>
                </div>
            `;
            presentesLista.appendChild(div);
        });

        // Adicionar listeners para reservar e confirmar reserva
        document.querySelectorAll('.reservar-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const presenteId = parseInt(this.dataset.id);
                const detalhesDiv = document.getElementById(`detalhes-${presenteId}`);
                detalhesDiv.style.display = "block";
            });
        });

        document.querySelectorAll('.confirmar-reserva-item-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const presenteId = parseInt(this.dataset.id);
                const nomeInput = document.getElementById(`nome-reservante-${presenteId}`);
                const nome = nomeInput.value.trim();
                const feedbackDiv = document.getElementById(`feedback-${presenteId}`);

                if (nome) {
                    const presente = presentes.find(p => p.id === presenteId);
                    if (presente && !presente.reservadoPor) {
                        presente.reservadoPor = nome;
                        if (!reservas[presenteId]) {
                            reservas[presenteId] = [];
                        }
                        reservas[presenteId].push(nome);
                        salvarReservas();
                        renderizarPresentes();
                        const detalhesDiv = document.getElementById(`detalhes-${presenteId}`);
                        detalhesDiv.style.display = "none";
                        feedbackDiv.textContent = 'Reservado!';
                        feedbackDiv.classList.add('reserva-feedback');
                        setTimeout(() => {
                            feedbackDiv.textContent = '';
                            feedbackDiv.classList.remove('reserva-feedback');
                        }, 2000);
                        nomeInput.value = '';
                    } else if (presente && presente.reservadoPor) {
                        feedbackDiv.textContent = 'Este item já foi reservado.';
                        feedbackDiv.classList.add('reserva-feedback');
                        setTimeout(() => {
                            feedbackDiv.textContent = '';
                            feedbackDiv.classList.remove('reserva-feedback');
                        }, 2000);
                    }
                } else {
                    alert('Por favor, digite seu nome para reservar.');
                }
            });
        });
    }

    // Função para atualizar a lista de reservas no painel de administração
    function atualizarListaReservasAdmin() {
        listaReservasElement.innerHTML = '';
        const reservasAgrupadas = {};
        for (const presenteId in reservas) {
            const presente = presentes.find(p => p.id === parseInt(presenteId));
            if (presente) {
                reservasAgrupadas[presente.nome] = reservas[presenteId];
            }
        }

        for (const nomePresente in reservasAgrupadas) {
            const liPresente = document.createElement('li');
            liPresente.textContent = `${nomePresente}: Reservado por ${reservasAgrupadas[nomePresente].join(', ')}`;
            listaReservasElement.appendChild(liPresente);
        }
    }

    // Função para salvar as reservas no localStorage
    function salvarReservas() {
        localStorage.setItem('reservas', JSON.stringify(reservas));
    }

    // Event listeners para os modais
    closeButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            this.parentNode.parentNode.style.display = "none";
            adminErroMensagem.style.display = "none";
        });
    });

    adminBtn.addEventListener('click', () => {
        adminPanel.style.display = "block";
    });

    pixBtn.addEventListener('click', () => {
        modalPix.style.display = "block";
    });

    copiarPixBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(document.getElementById('24999036283').textContent)
            .then(() => {
                pixCopiadoMensagem.style.display = "block";
                setTimeout(() => {
                    pixCopiadoMensagem.style.display = "none";
                }, 2000);
            })
            .catch(err => {
                console.error('Erro ao copiar texto: ', err);
                alert('Não foi possível copiar a chave Pix.');
            });
    });

    entrarAdminBtn.addEventListener('click', () => {
        if (adminSenhaInput.value === senhaAdmin) {
            adminLogado = true;
            reservasListaAdmin.style.display = "block";
            adminErroMensagem.style.display = "none";
            atualizarListaReservasAdmin();
        } else {
            adminErroMensagem.style.display = "block";
        }
        adminSenhaInput.value = '';
    });

    // Renderizar a lista de presentes inicial
    renderizarPresentes();

    // Atualizar a lista de reservas do admin se estiver logado (para persistência)
    if (adminLogado) {
        atualizarListaReservasAdmin();
    }

    // Adicionar instruções na parte superior da lista de presentes
    const instructionsContainer = document.createElement('div');
    instructionsContainer.id = 'instructions';
    instructionsContainer.innerHTML = '<p>Clique em "Reservar" para indicar que você escolheu este presente.</p>';
    document.querySelector('main').insertBefore(instructionsContainer, presentesLista);
});