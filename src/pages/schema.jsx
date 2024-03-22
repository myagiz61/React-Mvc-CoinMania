import * as yup from "yup";

// Kaynak: https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a
// Şifre için Kurallar:
// 1 büyük 1 küçük harf
// 1 sayı
// 1 özel karakter
const passwordRules =
  "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$";

export const schema = yup.object().shape({
  email: yup
    .string()
    .email("Lütfen Geçerli Bir Email Giriniz")
    .required("Zorunlu Alan"),

  age: yup
    .number()
    .positive()
    .min(18, "18 Yaşından Küçükler Giremez")
    .max(100, "Yaşınız 100'den Büyük Olamaz")
    .required("Zorunlu Alan"),
  password: yup
    .string()
    .min(5, "Şifre En Az 5 Karakter Olmalı")
    .matches(passwordRules, "Lütfen Daha Güçlü Bir Şifre Giriniz")
    .required("Zorunlu Alan"),
  confirmPassword: yup
    .string()
    // one of: elemanın değeri verilen değerlerden biriyle eşleşiyormu kontrol eder
    .oneOf(
      // ref: farklı bir inputun değerini çağırmaya yarar
      [yup.ref("password")],
      "Şifre Eşleşmiyor"
    )
    .required("Zorunlu Alan"),
  terms: yup
    .boolean()
    .isTrue("Koşulları Kabul Etmeden Devam Edemezsiniz."),
});
