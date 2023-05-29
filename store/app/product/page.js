import MiniCategoryList from "@/components/miniCategoryList"
import ProductList from "@/components/productList"

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

export default function Product() {
  categoryList = categoryList.slice(0,5)
  return (
    <>
    <main className="flex flex-col items-center justify-between p-2">
    <h1 className="mt-4 text-base-content font-bold text-xl md:text-3xl">
    Daftar Product
    </h1>
    <MiniCategoryList
    categories={categoryList}
    />      
    <ProductList/>
    </main>
    </>
  )
}
