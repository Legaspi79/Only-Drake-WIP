let drakeImages = [
    "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTQ3NTI2OTA4NzY5MjE2MTI4/drake_photo_by_prince_williams_wireimage_getty_479503454.jpg",
    "https://thefader-res.cloudinary.com/private_images/w_1800,c_limit,f_auto,q_auto:best/F100_Drake_Cover_FINAL_tuqta0/drake-views-from-the-6-cover-story-interview.jpg",
    "https://a.espncdn.com/photo/2022/0524/r1017066_1296x729_16-9.jpg",
    
    "https://i.pinimg.com/564x/84/8f/1f/848f1f9bf3b812feed4f32df54f43b94.jpg",
    
    "https://i2-prod.mirror.co.uk/incoming/article23263533.ece/ALTERNATES/n310p/1_Drake.jpg"
];

const imgs = document.getElementsByTagName("img");

for (let i=0; i<imgs.length; i++) {
    const randomImage = Math.floor(Math.random() * drakeImages.length);
    imgs[i].src = drakeImages[randomImage];
}
