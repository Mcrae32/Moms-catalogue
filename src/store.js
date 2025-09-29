import {reactive} from 'vue'

export const store = reactive({
    openPosition: false,

    productAssortment: [
        {
            id: 0,
            nameProduct: 'Продукт копчено-варёный из свинины',
            weight: 250,
            cardReviews: 'Описание карточки, состава',
            cardPrice: 2000,
            cardImage: '/src/assets/images/assortment/1.png',
            modalReviews: 'Это настоящая гастрономическая гордость, воплощение многовековых традиций и современных технологий. Каждый срез колбасы, будь то нежная докторская, пикантная сервелат или копчёная салями, – это маленькое произведение искусства.',
            modalState: false,
        },
        {
            id: 1,
            nameProduct: 'Свинина прессованная. Продукт варено-копченый из свинины',
            weight: 350,
            cardReviews: 'Описание карточки и состава',
            cardPrice: 2500,
            cardImage: '/src/assets/images/assortment/2.png',
            modalReviews: '',
            modalState: false,
        },
        {
            id: 2,
            nameProduct: 'Буженина. Продукт копчено-запеченая из свинины',
            weight: 350,
            cardReviews: 'Описание карточки и состава',
            cardPrice: 2500,
            cardImage: '/src/assets/images/assortment/1.png',
            modalReviews: '',
            modalState: false,
        },        
    ],
})