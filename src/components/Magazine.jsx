import React from 'react'

function Magazine() {
  return (
    <div>
      <header>
        <h1 className="text-xl text-center font-bold">News</h1>
        <hr className="border-[1px] border-black w-14 mx-auto my-4" />
      </header>
      <div className="mx-5 ">
        <img src="https://www.screamous.com/cdn/shop/articles/tees_2052x.jpg?v=1617250928" alt="How Take Care Your Cloth " className="w-[46rem]  mx-auto" />
      </div>
      <div className="mx-5 my-8">
        <h1 className="text-lg font-medium  ">April 1, 2021</h1>
        <hr className="border-[1px] border-black w-14  my-4" />
        <div>
          <p className="font-medium">
            <strong> HOW TO TAKE CARE OF YOUR HEART CLOTHES </strong>Memakai outfit dari brand favoritmu tentunya akan membuat penampilan semakin keren. Jadi pasti ga mau dong kalo outfit yang baru kamu beli jadi cepat rusak karena tidak
            tahu bagaimana cara merawatnya. Ini dia DO & DON’T’S bagaimana cara merawat outfit kamu. T-SHIRT PISAHKAN CUCIAN BERWARNA DAN PUTIH Sebelum dicuci, pisahkan terlebih dahulu t-shirt berwarna dan putih. Hal ini di lakukan untuk
            menghindari terjadi nya kelunturan warna serta menjaga agar kondisi dan kualitas warna t-shirt tetap terjaga.JANGAN MEMAKAI MESIN CUCI Ini merupakan cara yang cukup ampuh untuk menjaga kualitas t-shirt, walaupun menggunakan
            mesin cuci lebih mudah dan praktis, namun menggunakan mesin cuci dapat membuat kondisi t-shirt menjadi melar dan sablonan baju akan rusak. Cara...
          </p>
          <p className="flex align-middle justify-start items-center my-5">
            <a href="#" className="italic font-bold text-orange-700 text-sm">
              Continue reading
            </a>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Magazine
