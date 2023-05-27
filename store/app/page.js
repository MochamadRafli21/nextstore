import Navbar from "@/components/navbar"
import Carousel from "@/components/carousel"
import CategoryCard from "@/components/categoryCard"

const dummybanners = [
  {
    "id": 1,
    "url": "https://img.freepik.com/free-psd/banner-template-with-online-shopping_23-2148545459.jpg?w=1480&t=st=1685171008~exp=1685171608~hmac=16809c391ae3b2664d185e7c859482431ecaeb39300b753112b4797b8ec82a65"
  },
  {
    "id": 2,
    "url": "https://img.freepik.com/free-psd/special-cashback-offer-banner-template_23-2149170768.jpg?w=1800&t=st=1685170997~exp=1685171597~hmac=09449364aea4d51a34ce71cbe04f420a173373afdaefb7ae563118aa4e24aa1a"
  }
]

let categoryList = [
  {
    "id": 1,
    "image": "https://icon-library.com/images/promotional-icon/promotional-icon-6.jpg",
    "name": "Promo",
  },
  {
    "id": 2,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHOJ1UbEH8IK1x8RXLtEZwnGhyIc5PGl-16w&usqp=CAU",
    "name": "Kantor"
  },
  {
    "id": 3,
    "image": "https://cdn.icon-icons.com/icons2/3562/PNG/512/rocking_horse_kids_toy_icon_225260.png",
    "name": "Kamar Anak"
  },
  {
    "id": 4,
    "image": "https://thumbs.dreamstime.com/b/creative-design-kitchen-icon-kitchen-icon-113961815.jpg",
    "name": "Dapur"
  },
  {
    "id": 1,
    "image": "https://icon-library.com/images/promotional-icon/promotional-icon-6.jpg",
    "name": "Promo",
  },
  {
    "id": 2,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHOJ1UbEH8IK1x8RXLtEZwnGhyIc5PGl-16w&usqp=CAU",
    "name": "Kantor"
  },
  {
    "id": 3,
    "image": "https://cdn.icon-icons.com/icons2/3562/PNG/512/rocking_horse_kids_toy_icon_225260.png",
    "name": "Kamar Anak"
  },
  {
    "id": 4,
    "image": "https://thumbs.dreamstime.com/b/creative-design-kitchen-icon-kitchen-icon-113961815.jpg",
    "name": "Dapur"
  }
]

let productList = [

]

export default function Home() {
  categoryList = categoryList.slice(0,5)
  return (
    <main className="flex flex-col items-center justify-between p-2">
      <Navbar/>
      <Carousel
        banners={...dummybanners}
      />
    <div className="bg-primary flex flex-col p-4 rounded md:w-3/4 items-start justify-between">
    <h1 className="text-primary-content text-xl md:text-3xl font-bold">
    Kategori Favorit
    </h1>
    <div className="flex flex-wrap w-full mt-4">
    {
      categoryList.map((category) => 
        <CategoryCard
        image={category.image}
        name={category.name}
        id={category.id}
        />
      )
    }
    <CategoryCard
    name={"More"}
    />
    </div>
    </div>
    </main>
  )
}
