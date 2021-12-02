const carsMock = () => ([
  {
    "id": 24,
    "name": "Shelby",
    "model": "GT500",
    "description": "1971 card, perfect conditions",
    "price": 55000,
    "image": {
        "id": "466ff30ffa1c6d96e380e4cc1fa576fe.jpg",
        "storage": "store",
        "metadata": {
            "filename": "shelby gt 500.jpg",
            "size": 108518,
            "mime_type": "image/jpeg",
            "width": 1200,
            "height": 601
        }
    },
    "created_at": "2021-12-01T17:51:12.607Z",
    "updated_at": "2021-12-01T17:51:13.259Z",
    "image_data": "{\"id\":\"466ff30ffa1c6d96e380e4cc1fa576fe.jpg\",\"storage\":\"store\",\"metadata\":{\"filename\":\"shelby gt 500.jpg\",\"size\":108518,\"mime_type\":\"image/jpeg\",\"width\":1200,\"height\":601}}",
    "imageData": "https://res.cloudinary.com/jaar/image/upload/v1/test_app/466ff30ffa1c6d96e380e4cc1fa576fe.jpg"
  },
  {
    "id": 18,
    "name": "ford",
    "model": "mustang",
    "description": "1974 classic grey with a black line over it, restored motor .",
    "price": 800000,
    "image": {
        "id": "8c996139d385b0d4ad611380b9ba17cb.jpg",
        "storage": "store",
        "metadata": {
            "filename": "mustang.jpg",
            "size": 138218,
            "mime_type": "image/jpeg",
            "width": 1920,
            "height": 1280
        }
    },
    "created_at": "2021-11-29T20:29:39.883Z",
    "updated_at": "2021-11-29T20:29:40.532Z",
    "image_data": "{\"id\":\"8c996139d385b0d4ad611380b9ba17cb.jpg\",\"storage\":\"store\",\"metadata\":{\"filename\":\"mustang.jpg\",\"size\":138218,\"mime_type\":\"image/jpeg\",\"width\":1920,\"height\":1280}}",
    "imageData": "https://res.cloudinary.com/jaar/image/upload/v1/test_app/8c996139d385b0d4ad611380b9ba17cb.jpg"
  },
  {
    "id": 25,
    "name": "Lamborgini",
    "model": "Murcielago",
    "description": "Black with yellow stripe on the middle",
    "price": 400000,
    "image": {
        "id": "1e5eb9b8a8d792558c8b7268a096e11d.jpg",
        "storage": "store",
        "metadata": {
            "filename": "murcielago.jpg",
            "size": 75665,
            "mime_type": "image/jpeg",
            "width": 1280,
            "height": 782
        }
    },
    "created_at": "2021-12-01T17:52:28.881Z",
    "updated_at": "2021-12-01T17:52:29.560Z",
    "image_data": "{\"id\":\"1e5eb9b8a8d792558c8b7268a096e11d.jpg\",\"storage\":\"store\",\"metadata\":{\"filename\":\"murcielago.jpg\",\"size\":75665,\"mime_type\":\"image/jpeg\",\"width\":1280,\"height\":782}}",
    "imageData": "https://res.cloudinary.com/jaar/image/upload/v1/test_app/1e5eb9b8a8d792558c8b7268a096e11d.jpg"
  },
  {
    "id": 26,
    "name": "Lamborgini",
    "model": "Gallardo",
    "description": "Yellow",
    "price": 350000,
    "image": {
        "id": "aeb9ebd110c7a77bcefbb9da5431fad5.jpg",
        "storage": "store",
        "metadata": {
            "filename": "gallardo.jpg",
            "size": 293206,
            "mime_type": "image/jpeg",
            "width": 1193,
            "height": 895
        }
    },
    "created_at": "2021-12-01T17:53:08.044Z",
    "updated_at": "2021-12-01T17:53:08.789Z",
    "image_data": "{\"id\":\"aeb9ebd110c7a77bcefbb9da5431fad5.jpg\",\"storage\":\"store\",\"metadata\":{\"filename\":\"gallardo.jpg\",\"size\":293206,\"mime_type\":\"image/jpeg\",\"width\":1193,\"height\":895}}",
    "imageData": "https://res.cloudinary.com/jaar/image/upload/v1/test_app/aeb9ebd110c7a77bcefbb9da5431fad5.jpg"
  },
  {
    "id": 27,
    "name": "Ford",
    "model": "GT",
    "description": "1970 white with blue stripes",
    "price": 100000,
    "image": {
        "id": "6f59517feb49e81dff51e80ba25f3fec.jpg",
        "storage": "store",
        "metadata": {
            "filename": "ford gt 70.jpg",
            "size": 459696,
            "mime_type": "image/jpeg",
            "width": 2000,
            "height": 1125
        }
    },
    "created_at": "2021-12-01T17:54:13.652Z",
    "updated_at": "2021-12-01T17:54:14.394Z",
    "image_data": "{\"id\":\"6f59517feb49e81dff51e80ba25f3fec.jpg\",\"storage\":\"store\",\"metadata\":{\"filename\":\"ford gt 70.jpg\",\"size\":459696,\"mime_type\":\"image/jpeg\",\"width\":2000,\"height\":1125}}",
    "imageData": "https://res.cloudinary.com/jaar/image/upload/v1/test_app/6f59517feb49e81dff51e80ba25f3fec.jpg"
  },
  {
    "id": 28,
    "name": "Chevrolet",
    "model": "Corvette",
    "description": "1969 white",
    "price": 70000,
    "image": {
        "id": "d1ffd2e69018fb8e2895a3193618f71f.jpg",
        "storage": "store",
        "metadata": {
            "filename": "corvette 1969.jpg",
            "size": 79605,
            "mime_type": "image/jpeg",
            "width": 790,
            "height": 527
        }
    },
    "created_at": "2021-12-01T17:55:09.365Z",
    "updated_at": "2021-12-01T17:55:10.067Z",
    "image_data": "{\"id\":\"d1ffd2e69018fb8e2895a3193618f71f.jpg\",\"storage\":\"store\",\"metadata\":{\"filename\":\"corvette 1969.jpg\",\"size\":79605,\"mime_type\":\"image/jpeg\",\"width\":790,\"height\":527}}",
    "imageData": "https://res.cloudinary.com/jaar/image/upload/v1/test_app/d1ffd2e69018fb8e2895a3193618f71f.jpg"
  },
  {
    "id": 29,
    "name": "Rolls Royce",
    "model": "Ghost",
    "description": "2021 Luxury car in white",
    "price": 15000000,
    "image": {
        "id": "dd22667f553ecffbb56509f274ad15fe.jpg",
        "storage": "store",
        "metadata": {
            "filename": "2021-rolls-royce-ghost.jpg",
            "size": 82397,
            "mime_type": "image/jpeg",
            "width": 1920,
            "height": 1080
        }
    },
    "created_at": "2021-12-01T17:55:55.564Z",
    "updated_at": "2021-12-01T17:55:56.190Z",
    "image_data": "{\"id\":\"dd22667f553ecffbb56509f274ad15fe.jpg\",\"storage\":\"store\",\"metadata\":{\"filename\":\"2021-rolls-royce-ghost.jpg\",\"size\":82397,\"mime_type\":\"image/jpeg\",\"width\":1920,\"height\":1080}}",
    "imageData": "https://res.cloudinary.com/jaar/image/upload/v1/test_app/dd22667f553ecffbb56509f274ad15fe.jpg"
  }
]);

export default carsMock;