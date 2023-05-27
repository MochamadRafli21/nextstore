import Navbar from "@/components/navbar"
import Carousel from "@/components/carousel"

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

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-2">
      <Navbar/>
      <Carousel
        banners={...dummybanners}
      />
    </main>
  )
}
