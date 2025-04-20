document.addEventListener('DOMContentLoaded', () => {
    try {
        console.log('DOMContentLoaded disparado.');

        // Seleção de elementos do DOM com verificação
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
        const adminErroMensagem = document.getElementById('admin-erro-mensagem');
        const adminConteudo = document.getElementById('admin-conteudo');
        const spinner = document.getElementById('spinner');

        console.log('Elementos do DOM selecionados:', {
            presentesLista,
            modalPix,
            adminPanel,
            closeButtons,
            adminBtn,
            pixBtn,
            copiarPixBtn,
            pixCopiadoMensagem,
            entrarAdminBtn,
            adminSenhaInput,
            adminErroMensagem,
            adminConteudo,
            spinner
        });

        // Verificar se os elementos principais existem
        if (!presentesLista || !modalPix || !adminPanel) {
            throw new Error('Elementos principais do DOM não encontrados.');
        }

        // Constantes
        const CHAVE_PIX = '24999036283';
        const WHATSAPP_NUMERO = '+5524999036283'; // Substitua pelo número real (ex.: +5511999999999)
        const senhaAdmin = 'casar123';

        // Dados dos presentes
        const presentes = [
            { id: 1, nome: 'Multiprocessador de Alimentos', preco: 'R$ 329,00', imagem: 'https://imgs.casasbahia.com.br/55048238/4g.jpg?imwidth=500', linkCompra: 'https://www.casasbahia.com.br/multiprocessador-de-alimentos-mondial-turbo-chef-9-em-1-mpn-01-bf-com-2-velocidades-pulsar-1000-w/p/55048238' },
            { id: 2, nome: 'Fritadeira Elétrica', preco: 'R$ 599,00', imagem: 'https://imgs.casasbahia.com.br/55065681/1g.jpg?imwidth=500', linkCompra: 'https://www.casasbahia.com.br/fritadeira-eletrica-sem-oleo-air-fryer-oven-2-em-1-mondial-afon-12l-bi-12l-digital---preta-inox---110v-55065681.html' },
            { id: 3, nome: 'Sanduicheira Elétrica', preco: 'R$ 109,00', imagem: 'https://imgs.casasbahia.com.br/55066944/1g.jpg?imwidth=500', linkCompra: 'https://www.casasbahia.com.br/sanduicheira-eletrica-cadence-click-750w-com-botao-liga-e-desliga---san400---110v-55066944.html' },
            { id: 4, nome: 'Panela Elétrica de Pressão', preco: 'R$ 399,00', imagem: 'https://imgs.casasbahia.com.br/55015422/1g.jpg?imwidth=500', linkCompra: 'https://www.casasbahia.com.br/panela-eletrica-de-pressao-mondial-digital-master-cooker-pe-40-3l---preta-inox---220v-55015422.html' },
            { id: 5, nome: 'Kit Potes Herméticos Plásticos', preco: 'R$ 104,03', imagem: 'https://http2.mlstatic.com/D_NQ_NP_730999-MLU72569136498_112023-O.webp', linkCompra: 'https://www.mercadolivre.com.br/kit-potes-hermeticos-plasticos-branco-e-cinza-12-unidades-electrolux/p/MLB23191928?pdp_filters=item_id%3AMLB4328622612&from=gshop&matt_tool=13891073&matt_word=&matt_source=google&matt_campaign_id=22090193717&matt_ad_group_id=174661961684&matt_match_type=&matt_network=g&matt_device=m&matt_creative=727914179470&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735128761&matt_product_id=MLB23191928-product&matt_product_partition_id=2388009210226&matt_target_id=aud-1966852281496%3Apla-2388009210226&cq_src=google_ads&cq_cmp=22090193717&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=1&gbraid=0AAAAAD93qcCXomrz2S49fu90nUtXwjJXv&skipInApp=true' },
            { id: 6, nome: 'Faqueiro em Aço Inox 24 Peças', preco: 'R$ 73,78', imagem: 'https://m.media-amazon.com/images/I/61x2HGF7CfL._AC_SX679_.jpg', linkCompra: 'https://www.amazon.com.br/dp/B0789M146B?ref=cm_sw_r_mwn_dp_022AY4XCFMWRQJZHAF7N&ref_=cm_sw_r_mwn_dp_022AY4XCFMWRQJZHAF7N&social_share=cm_sw_r_mwn_dp_022AY4XCFMWRQJZHAF7N&language=pt-BR' },
            { id: 7, nome: 'Serviço de Jantar e Chá 20 Peças', preco: 'R$ 359,06', imagem: 'https://m.media-amazon.com/images/I/41pr+J3XTqL._AC_SX679_.jpg', linkCompra: 'https://a.co/d/33pwiKj' },
            { id: 8, nome: 'Conjunto Jogo 6 Panelas', preco: 'R$ 447,19', imagem: 'https://http2.mlstatic.com/D_NQ_NP_777532-MLU77124416772_062024-O.webp', linkCompra: 'https://www.mercadolivre.com.br/jogo-de-panelas-induco-conjunto-10-pecas-fundo-triplo-pratic-cook-marmol-vanilla-mimo-style/p/MLB37879062?pdp_filters=item_id%3AMLB3766077365#cart_referer=item#source=shopping_cart' },
            { id: 9, nome: 'Conjunto de Utensílios de Cozinha 12 Peças', preco: 'R$ 74,90', imagem: 'https://m.media-amazon.com/images/I/615DiYtWGlL._AC_SX679_.jpg', linkCompra: 'https://a.co/d/fJqIgfK' },
            { id: 10, nome: 'Lixeira Com Pedal E Balde', preco: 'R$ 79,00', imagem: 'https://http2.mlstatic.com/D_NQ_NP_828148-MLA79489136472_102024-O.webp', linkCompra: 'https://www.mercadolivre.com.br/lixeira-com-pedal-e-balde-interno-agata-inox-5-litros-mor-cor-cinza/p/MLB19544670#polycard_client=recommendations_home_affiliate-profile&reco_backend=item_decorator&reco_client=home_affiliate-profile&reco_item_pos=0&source=affiliate-profile&reco_backend_type=function&reco_id=038c9e48-64f7-4528-bf91-305559b1dda2&tracking_id=5d2e2c4d-0dbd-4f2f-8682-f595e537044f&wid=MLB3651413217&sid=recos&c_id=/home/card-featured/element&c_uid=1b3aae17-f8db-4ad4-972d-37fb699c6dba' },
            { id: 11, nome: 'Conjunto Acessórios P Banheiro', preco: 'R$ 69,11', imagem: 'https://http2.mlstatic.com/D_NQ_NP_686378-MLU75824150044_042024-O.webp', linkCompra: 'https://www.mercadolivre.com.br/conjunto-acessorios-p-banheiro-lixeira-saboneteira-6-pecas-cor-preto/p/MLB32985292#polycard_client=recommendations_home_affiliate-profile&reco_backend=item_decorator&reco_client=home_affiliate-profile&reco_item_pos=0&source=affiliate-profile&reco_backend_type=function&reco_id=ec90efd3-e8a3-4d41-a0ea-d49c3cca1806&tracking_id=a6269cdb-d037-43e3-a07f-fb8b96454509&wid=MLB5229476020&sid=recos&c_id=/home/card-featured/element&c_uid=cc7a4334-f971-4e4f-99b3-ad6c2afb0479' },
            { id: 12, nome: 'Cesto Roupas Sujas', preco: 'R$ 74,82', imagem: 'https://http2.mlstatic.com/D_NQ_NP_874642-MLB79345226228_092024-O-cesto-roupas-sujas-bambu-retangular-forrado-banheiro-grande.webp', linkCompra: 'https://produto.mercadolivre.com.br/MLB-4477249828-cesto-roupas-sujas-bambu-retangular-forrado-banheiro-grande-_JM#polycard_client=recommendations_home_affiliate-profile&reco_backend=item_decorator&reco_client=home_affiliate-profile&reco_item_pos=0&source=affiliate-profile&reco_backend_type=function&reco_id=82e12830-3553-4b57-9ca8-7173f574640d&tracking_id=b2263450-80c6-44f5-8c8c-a686a6b88c6e&c_id=/home/card-featured/element&c_uid=072cc165-a95e-4971-b21e-262f4a9ad69a' },
            { id: 13, nome: 'Kit 15 Potes 500ML Transparentes', preco: 'R$ 32,50', imagem: 'https://down-br.img.susercontent.com/file/br-11134207-7r98o-m2vaby4lekgjff.webp', linkCompra: 'https://shopee.com.br/Kit-15-Potes-500ML-Transparentes-BPA-Free-Marmita-Freezer-Microondas-Organizador-de-Alimentos-Pl%C3%A1stico-i.385816183.23093543314?sp_atk=a5e546a5-f459-4e3f-8cc1-26dca16e7887&xptdk=a5e546a5-f459-4e3f-8cc1-26dca16e7887' },
            { id: 14, nome: 'Máquina de Lavar Brastemp 13Kg Cinza', preco: 'R$ 2.133,03', imagem: 'https://brastemp.vtexassets.com/arquivos/ids/249861-500-500?v=638769687092600000&width=500&height=500&aspect=true', linkCompra: 'https://www.brastemp.com.br/maquina-de-lavar-brastemp-13kg-cinza-platinum-com-ciclo-tira-manchas-advanced-e-ciclo-antibolinha-bwk13a9/p' },
            { id: 15, nome: 'Kit 24 Copos De Vidro', preco: 'R$ 42,08', imagem: 'https://down-br.img.susercontent.com/file/br-11134207-7r98o-m7l68vl8c32sfe.webp', linkCompra: 'https://shopee.com.br/product/800097091/23793834401?d_id=92f30&uls_trackid=52ga6cnh023j&utm_content=yQSVTVXy6WVMU4W1CJPooHV8zRu' },
            { id: 16, nome: 'Jarra de Vidro 1,7L', preco: 'R$ 49,90', imagem: 'https://down-br.img.susercontent.com/file/br-11134207-7r98o-lxtr7pvd3r7ad0.webp', linkCompra: 'https://shopee.com.br/product/323288678/22297647934?d_id=92f30&uls_trackid=52ga6cml002j&utm_content=yQSVTVXy6Sf8X1Pho1QHxCi8Ekf' },
            { id: 17, nome: 'Ralador De Legumes Queijo Descascador de Legumes', preco: 'R$ 23,90', imagem: 'https://down-br.img.susercontent.com/file/sg-11134201-7rd64-m7zly1e0vkcgb9.webp', linkCompra: 'https://shopee.com.br/product/390751975/22993865730?d_id=92f30&uls_trackid=52ga6d4400v8&utm_content=yQSVTVXy6cMHJQKnw9f1q5kdDoM' },
            { id: 18, nome: 'Mini picador de alimentos elétrico', preco: 'R$ 22,66', imagem: 'https://down-br.img.susercontent.com/file/sg-11134201-7rfhe-m3bhs18flm4r0f.webp', linkCompra: 'https://shopee.com.br/mini-picador-de-alimentos-el%C3%A9trico-3-l%C3%A2minas-250-ml-i.1107432289.21397993516?sp_atk=01c0b53c-21ee-4f0c-baff-28142dc9b360&xptdk=01c0b53c-21ee-4f0c-baff-28142dc9b360' },
            { id: 19, nome: 'Forma De Silicone Air Fryer', preco: 'R$ 10,90', imagem: 'https://down-br.img.susercontent.com/file/br-11134207-7r98r-lm9ef09v5mgm5a.webp', linkCompra: 'https://shopee.com.br/Forma-De-Silicone-Air-Fryer-Antiaderente-Cesto-Silicone-Fritadeira-El%C3%A9trica-Quadrado-i.1083951020.19998991996?sp_atk=8f39287f-ec9c-4bd1-a4bf-b92eb08b1d37&xptdk=8f39287f-ec9c-4bd1-a4bf-b92eb08b1d37' },
            { id: 20, nome: 'Abridor De Latas E Garrafas Aço Inox', preco: 'R$ 16,90', imagem: 'https://down-br.img.susercontent.com/file/br-11134207-7r98o-lnag3dj0lhgpff.webp', linkCompra: 'https://shopee.com.br/product/438702188/22397090813?d_id=92f30&uls_trackid=52ga6d690022&utm_content=yQSVTVXy6igS5yCYpF2upwx1oxb' },
            { id: 21, nome: 'Escorredor de Louça', preco: 'R$ 51,99', imagem: 'https://down-br.img.susercontent.com/file/br-11134207-7qukw-lkh62lxmr07d5b.webp', linkCompra: 'https://shopee.com.br/ESCORREDOR-DE-LOU%C3%87A-P-TALHERES-PRATOS-COPOS-COM-TAPETE-DE-PIA-COMPACTO-COR-PRETO-LINHA-SINGLE-COZA-i.349275337.20797263867?sp_atk=6fdb2d02-8ebd-48be-91c7-51b9a1eed08d&xptdk=6fdb2d02-8ebd-48be-91c7-51b9a1eed08d' },
            { id: 22, nome: 'Jogo Facas 6 Peças Plenus', preco: 'R$ 75,57', imagem: 'https://m.media-amazon.com/images/I/61oRCU003NL._AC_SL1200_.jpg', linkCompra: 'https://a.co/d/hyHPEhj' },
            { id: 23, nome: 'Lencol 180 Fios Avulso Casal', preco: 'R$ 29,90', imagem: 'https://down-br.img.susercontent.com/file/br-11134207-7r98o-lvq2jw5wjl0sfd.webp', linkCompra: 'https://shopee.com.br/Lencol-180-Fios-Avulso-Casal-Queen-Solteiro-Sem-Elastico-Bainha-Resistente-Micro-Fibra-Cores-Lisas-i.1045932818.22093062646?sp_atk=738014f8-fc52-46d3-8108-4a36aec2272c&xptdk=738014f8-fc52-46d3-8108-4a36aec2272c' },
            { id: 24, nome: 'Jogo De Lençol 3 Peças Casal ', preco: 'R$ 36,90', imagem: 'https://down-br.img.susercontent.com/file/br-11134201-23010-9nqwukzcmzlv4f.webp', linkCompra: 'https://shopee.com.br/product/925647622/20670640489?d_id=92f30&uls_trackid=52gaa79v002j&utm_content=yQSVTVXwGFQWJycHd7hwuRtSGu5' },
            { id: 25, nome: 'Jogo de Cama Lençol', preco: 'R$ 37,90', imagem: 'https://down-br.img.susercontent.com/file/br-11134207-7r98o-m4q4448wvn4193.webp', linkCompra: 'https://shopee.com.br/product/418872496/23793614115?d_id=92f30&uls_trackid=52gaa7g800v8&utm_content=yQSVTVXwHRsYEEozkq5dC12bdkK' },
            { id: 26, nome: 'Kit 5 Panos de Prato Rústico', preco: 'R$ 36,00', imagem: 'https://down-br.img.susercontent.com/file/br-11134207-7r98o-ltmmyy49ii484e.webp', linkCompra: 'https://shopee.com.br/product/441141906/10876629950?d_id=92f30&uls_trackid=52gaa7cs003j&utm_content=yQSVTVXwHHM2ApJXAzc4FJdm4uD' },
            { id: 27, nome: 'Kit 5 Panos de Prato Tricoline 100% Algodão', preco: 'R$ 69,99', imagem: 'https://down-br.img.susercontent.com/file/br-11134207-7r98o-m22quck44uec57.webp', linkCompra: 'https://shopee.com.br/product/1187958688/22797687065?d_id=92f30&uls_trackid=52gaa6qr0010&utm_content=yQSVTVXxuddoxkvLrTPWmCKh1Z1' },
            { id: 28, nome: 'Kit Potes Porta Mantimento Hermético Quadrado Cozinha 12 Uni', preco: 'R$ 190,42', imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_808651-MLA79816647624_102024-F.webp', linkCompra: 'https://www.mercadolivre.com.br/kit-potes-porta-mantimento-hermetico-quadrado-cozinha-12-uni/p/MLB37246326?pdp_filters=item_id:MLB3767266327#polycard_client=recommendations_pdp-pads-up&reco_backend=pdp_pads_right_rars_v2_with_default&reco_model=rk_ent_v2_retsys_ads&reco_client=pdp-pads-up&reco_item_pos=2&reco_backend_type=low_level&reco_id=785872c4-ba16-4386-83e8-b00f2bae0641&wid=MLB3767266327&sid=recos&is_advertising=true&ad_domain=PDPWEBMOBILE_UP&ad_position=3&ad_click_id=YTBmZDA2ZDctZWFkMC00NGZkLTk3ZjMtYmFkNjU5M2EyODgx' },
            { id: 29, nome: 'Cobertor Lumini Casal Alta Gramatura (Chumbo)', preco: 'R$ 69,80', imagem: 'https://down-br.img.susercontent.com/file/br-11134207-7r98o-m5bdsnhg6hz972.webp', linkCompra: 'https://shopee.com.br/product/356841149/23593658995?d_id=92f30&uls_trackid=52gafuai022j&utm_content=yQSVTVXzADoMmg5mSGKyfdKRy6X' },
            { id: 30, nome: 'Ar Condicionado', preco: 'R$ 2.657,00', imagem: 'https://imgs.casasbahia.com.br/1562813025/1xg.jpg?imwidth=500', linkCompra: 'https://www.casasbahia.com.br/ar-condicionado-split-hi-wall-inverter-r-32-lg-dual-voice-inteligencia-artificial-9000-btus-frio-220v/p/1562813025' },
            { id: 31, nome: 'Forno de Micro-ondas Philco', preco: 'R$ 528,00', imagem: 'https://imgs.casasbahia.com.br/55031124/1xg.jpg?imwidth=500', linkCompra: 'https://www.casasbahia.com.br/forno-de-micro-ondas-philco-pmo23eb-com-menu-fit-20-litros---branco-e-prata---110v-55031124.html' },
            { id: 32, nome: 'Espelho Janela E13 Moldura em Couro', preco: 'R$ 419,00', imagem: 'https://down-br.img.susercontent.com/file/br-11134207-7r98o-lzsanlbi6glx79.webp', linkCompra: 'https://shopee.com.br/product/1146529360/21699378413?d_id=92f30&uls_trackid=52gaf95g003j&utm_content=yQSVTVXz9uAzQazgUgD5b4ZCS2j' },
            { id: 33, nome: 'Cortina Blackout tecido', preco: 'R$ 205,90', imagem: 'https://down-br.img.susercontent.com/file/br-11134201-22120-prfnplpfakkv34.webp', linkCompra: 'https://shopee.com.br/Cortina-Blackout-tecido-corta-luz-quarto-ou-sala-ideal-para-cobertura-de-janelas-de-vidro-para-bloqueio-da-claridade.-i.466058056.12964662260' },
            { id: 34, nome: 'Tapete sala 100% algodão (Veneza Cru - 2x2)', preco: 'R$ 208,90', imagem: 'https://down-br.img.susercontent.com/file/br-11134207-7r98o-m7mp9dtg1uma91.webp', linkCompra: 'https://shopee.com.br/product/466058056/18476924454?d_id=92f30&uls_trackid=52gaa6qh0122&utm_content=yQSVTVXxvG4hCF9v84ApCBJ1ssM' },
            { id: 35, nome: 'Ventilador de mesa 2 em 1 Arno', preco: 'R$ 229,00', imagem: 'https://imgs.casasbahia.com.br/1568950643/1xg.jpg?imwidth=500', linkCompra: 'https://www.casasbahia.com.br/ventilador-de-mesa-2-em-1-arno-40cm-vf42-turbo-force-preto-127v---110v-1568950643.html' }

        ];

        console.log('Array presentes carregado:', presentes);

        // Carregar estado do admin do localStorage
        let adminLogado = false;
        try {
            adminLogado = JSON.parse(localStorage.getItem('adminLogado')) || false;
        } catch (e) {
            console.warn('Erro ao carregar estado do admin do localStorage:', e);
            adminLogado = false;
        }

        console.log('Estado do admin:', adminLogado);

        // Atualizar chave Pix no modal
        if (document.getElementById('chave-pix')) {
            document.getElementById('chave-pix').textContent = `Chave Pix: ${CHAVE_PIX}`;
        }

        // Função para renderizar a lista de presentes
        function renderizarPresentes() {
            console.log('Iniciando renderizarPresentes...');
            if (!presentesLista) {
                console.error('presentesLista não encontrado.');
                return;
            }

            presentesLista.innerHTML = ''; // Limpa a lista
            if (presentes.length === 0) {
                presentesLista.innerHTML = '<p>Nenhum presente disponível no momento.</p>';
                console.log('Nenhum presente disponível.');
                return;
            }

            console.log(`Renderizando ${presentes.length} presentes...`);
            const fragment = document.createDocumentFragment();
            presentes.forEach((presente, index) => {
                const div = document.createElement('div');
                div.id = `presente-${presente.id}`;
                div.classList.add('presente-item');
                div.style.setProperty('--delay', index); // Define o delay para animação
                const mensagemWhatsApp = encodeURIComponent(`Vou escolher esse aqui: ${presente.nome}`);
                const linkWhatsApp = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMERO}&text=${mensagemWhatsApp}`;
                div.innerHTML = `
                    <div class="presente-imagem">
                        <img src="${presente.imagem}" alt="${presente.nome}" aria-label="Imagem de ${presente.nome}" onerror="this.src='https://via.placeholder.com/320x220?text=Imagem+Indisponível';">
                    </div>
                    <div class="presente-info">
                        <h3>${presente.nome}</h3>
                        <p>${presente.preco}</p>
                    </div>
                    <div class="presente-acoes">
                        <a href="${linkWhatsApp}" class="escolher-btn" target="_blank" aria-label="Escolher ${presente.nome} via WhatsApp">Escolher</a>
                        <a href="${presente.linkCompra}" class="comprar-btn" target="_blank" aria-label="Comprar ${presente.nome}">Comprar</a>
                    </div>
                `;
                fragment.appendChild(div);
            });
            presentesLista.appendChild(fragment);
        }

        // Função para salvar estado do admin
        function salvarEstadoAdmin() {
            try {
                localStorage.setItem('adminLogado', JSON.stringify(adminLogado));
                console.log('Estado do admin salvo no localStorage:', adminLogado);
            } catch (e) {
                console.warn('Erro ao salvar estado do admin no localStorage:', e);
            }
        }

        // Event listeners para os modais
        if (closeButtons) {
            closeButtons.forEach(btn => {
                btn.addEventListener('click', function() {
                    const modal = this.parentNode.parentNode;
                    if (modal) {
                        modal.classList.remove('show');
                        setTimeout(() => {
                            modal.style.display = 'none';
                        }, 400); // Tempo para a animação de saída
                    }
                    if (adminErroMensagem) adminErroMensagem.style.display = 'none';
                });
            });
        }

        if (adminBtn) {
            adminBtn.addEventListener('click', () => {
                if (adminPanel) {
                    adminPanel.style.display = 'flex';
                    setTimeout(() => {
                        adminPanel.classList.add('show');
                    }, 10);
                }
                if (adminLogado && adminConteudo) {
                    adminConteudo.style.display = 'block';
                }
            });
        }

        if (pixBtn) {
            pixBtn.addEventListener('click', () => {
                if (modalPix) {
                    modalPix.style.display = 'flex';
                    setTimeout(() => {
                        modalPix.classList.add('show');
                    }, 10);
                }
            });
        }

        if (copiarPixBtn) {
            copiarPixBtn.addEventListener('click', () => {
                if (spinner) spinner.style.display = 'block';
                navigator.clipboard.writeText(CHAVE_PIX)
                    .then(() => {
                        if (spinner) spinner.style.display = 'none';
                        if (pixCopiadoMensagem) {
                            pixCopiadoMensagem.innerHTML = '<span aria-label="Sucesso">✅ Chave Pix copiada!</span>';
                            pixCopiadoMensagem.style.display = 'block';
                            setTimeout(() => {
                                pixCopiadoMensagem.style.display = 'none';
                                pixCopiadoMensagem.innerHTML = '';
                            }, 3000);
                        }
                    })
                    .catch(err => {
                        if (spinner) spinner.style.display = 'none';
                        console.error('Erro ao copiar texto: ', err);
                        if (pixCopiadoMensagem) {
                            pixCopiadoMensagem.innerHTML = '<span aria-label="Erro">❌ Erro ao copiar a chave Pix.</span>';
                            pixCopiadoMensagem.classList.add('mensagem-erro');
                            pixCopiadoMensagem.style.display = 'block';
                            setTimeout(() => {
                                pixCopiadoMensagem.style.display = 'none';
                                pixCopiadoMensagem.innerHTML = '';
                                pixCopiadoMensagem.classList.remove('mensagem-erro');
                            }, 3000);
                        }
                    });
            });
        }

        if (entrarAdminBtn) {
            entrarAdminBtn.addEventListener('click', () => {
                if (adminSenhaInput && adminSenhaInput.value === senhaAdmin) {
                    adminLogado = true;
                    salvarEstadoAdmin();
                    if (adminConteudo) {
                        adminConteudo.style.display = 'block';
                        adminErroMensagem.style.display = 'none';
                    }
                } else {
                    if (adminErroMensagem) {
                        adminErroMensagem.innerHTML = '<span aria-label="Erro">❌ Senha incorreta.</span>';
                        adminErroMensagem.style.display = 'block';
                    }
                }
                if (adminSenhaInput) adminSenhaInput.value = '';
            });
        }

        // Renderizar a lista de presentes inicial
        console.log('Chamando renderizarPresentes() pela primeira vez...');
        renderizarPresentes();

        // Adicionar instruções
        const instructionsContainer = document.createElement('div');
        instructionsContainer.id = 'instructions';
        instructionsContainer.innerHTML = '<p>Clique em "Escolher" para nos informar sua escolha via WhatsApp e depois em "Comprar" para adquirir o presente diretamente pelo site.</p>';
        const mainElement = document.querySelector('main');
        if (mainElement) {
            mainElement.prepend(instructionsContainer);
            console.log('Instruções adicionadas com sucesso.');
        } else {
            console.error('Elemento <main> não encontrado para adicionar instruções.');
        }

        // Fechar modais ao clicar fora
        window.addEventListener('click', (event) => {
            if (event.target === modalPix) {
                modalPix.classList.remove('show');
                setTimeout(() => {
                    modalPix.style.display = 'none';
                }, 400);
            }
            if (event.target === adminPanel) {
                adminPanel.classList.remove('show');
                setTimeout(() => {
                    adminPanel.style.display = 'none';
                }, 400);
                if (adminErroMensagem) adminErroMensagem.style.display = 'none';
            }
        });

        // Código para o efeito de partículas
        const canvas = document.getElementById('particles-canvas');
        const ctx = canvas.getContext('2d');
        let particlesArray = [];

        // Ajustar o tamanho do canvas para cobrir toda a janela
        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Classe para criar partículas
        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 5 + 2; // Tamanho entre 2 e 7
                this.speedX = Math.random() * 1 - 0.5; // Velocidade horizontal lenta
                this.speedY = Math.random() * 1 + 0.5; // Velocidade vertical (caindo)
                this.opacity = Math.random() * 0.5 + 0.3; // Opacidade entre 0.3 e 0.8
                // Cores em tons pastéis suaves
                this.color = [
                    'rgba(255, 182, 193, 0.6)', // Rosa claro
                    'rgba(255, 245, 238, 0.6)', // Pêssego claro
                    'rgba(245, 240, 230, 0.6)'  // Bege claro
                ][Math.floor(Math.random() * 3)];
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                // Reposicionar partículas que saem da tela
                if (this.y > canvas.height) {
                    this.y = 0 - this.size;
                    this.x = Math.random() * canvas.width;
                }
                if (this.x > canvas.width || this.x < 0) {
                    this.x = Math.random() * canvas.width;
                    this.y = 0 - this.size;
                }

                // Efeito de "pulsação" na opacidade
                this.opacity = Math.sin(Date.now() * 0.002 + this.x) * 0.3 + 0.5;
                if (this.opacity < 0.3) this.opacity = 0.3;
                if (this.opacity > 0.8) this.opacity = 0.8;
            }

            draw() {
                ctx.fillStyle = this.color;
                ctx.globalAlpha = this.opacity;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // Inicializar partículas
        function initParticles() {
            particlesArray = [];
            const numberOfParticles = Math.floor((canvas.width * canvas.height) / 10000); // Ajuste baseado no tamanho da tela
            for (let i = 0; i < numberOfParticles; i++) {
                particlesArray.push(new Particle());
            }
        }
        initParticles();

        // Animar partículas
        function animateParticles() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < particlesArray.length; i++) {
                particlesArray[i].update();
                particlesArray[i].draw();
            }
            requestAnimationFrame(animateParticles);
        }
        animateParticles();

        // Reajustar partículas ao redimensionar a janela
        window.addEventListener('resize', () => {
            resizeCanvas();
            initParticles();
        });

    } catch (error) {
        console.error('Erro ao carregar a página:', error);
        const main = document.querySelector('main');
        if (main) {
            main.innerHTML = '<p>Desculpe-nos, ocorreu um erro ao carregar a lista de presentes. Por favor, recarregue a página ou entre em contato com o suporte.</p>';
        }
    }
});