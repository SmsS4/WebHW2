var images = [0, 1, 2, 3, 4, 5];
var titles = [
  "کتاب‌خانه",
  "فضای استراحت",
  "سالن",
  "فضای سبز",
  "فضای کاری",
  "تیم",
];
var descs = [
  "به کتاب و کتاب‌خوانی اهمیت می‌دهیم",
  "فضای بازی",
  "سالن ورزش اختصاصی",
  "فضای سبز و محیط پرنشاط",
  "فضای کاری جذاب و متنوع",
  "تیم جوان و پر انرژی",
];
var current_iamge = 0;

function setImage(to_set) {
  current_iamge = to_set;
  document.getElementById("image_mobile").src =
    "../files/gallery/" + to_set + ".jpg";
  document.getElementById("gallery_title").innerText = titles[to_set];
  document.getElementById("gallery_desc").innerText = descs[to_set];
}

function nextImage() {
  setImage((current_iamge + 1) % images.length);
}

function prevImage() {
  setImage((current_iamge - 1 + images.length) % images.length);
}
