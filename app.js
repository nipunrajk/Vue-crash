const app = Vue.createApp({
  data() {
    return {
      url: 'http://www.whatsapp.com/',
      books: [
        {
          title: 'name of wind 1',
          author: 'you1',
          img: 'assets/1pic.jpg',
          isFav: true,
        },
        {
          title: 'name of wind 2',
          author: 'you2',
          img: 'assets/2pic.jpg',
          isFav: false,
        },
        {
          title: 'name of wind 3',
          author: 'you3',
          img: 'assets/3pic.jpg',
          isFav: true,
        },
      ],
    }
  },
  methods: {
    changeTitle(title) {
      this.firstName = title
    },
    handleEvent(e, data) {
      console.log(e.type)
      if (data > 4) {
        console.log('entered')
      }
    },
    handleMousemove(e) {
      this.x = e.offsetX
      this.y = e.offsetY
    },
    toggleFav(book) {
      book.isFav = !book.isFav
    },
  },
  computed: {
    filterdBooks() {
      return this.books.filter((book) => book.isFav)
    },
  },
})

app.mount('#app')
