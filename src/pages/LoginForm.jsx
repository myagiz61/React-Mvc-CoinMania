import { useFormik } from "formik";
import { schema } from "./schema";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const { user, signUser } = useContext(UserContext);
  const navigate = useNavigate();
  console.log(user, signUser);

  // daha önce kullanıcı oluşurulduysa
  if (user) {
    // anasayfaya yönlendir
    navigate("/coins");
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
    validationSchema: schema,

    onSubmit: async (values, actions) => {
      await new Promise((res) => setTimeout(res, 2000));
      //hesabı oluşturur
      signUser(values);
      //formu temizleme
      actions.resetForm();
      navigate("/coins");
    },
  });
  return (
    <div>
      <div className="container">
        <div className="logo">
          <img src="/coin-logo.png" />
          <h3>Coinmania</h3>
        </div>

        <form onSubmit={formik.handleSubmit}>
          <div>
            <label>Email</label>
            <input
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="email"
              type="text"
              placeholder="ör:isim@şirket.com"
              className={
                formik.errors.email && formik.touched.email && "error"
              }
            />
            {formik.errors.email && formik.touched.email && (
              <p>{formik.errors.email}</p>
            )}
          </div>

          <div>
            <label>Yaş</label>
            <input
              value={formik.values.age}
              onBlur={formik.handleBlur}
              className={
                formik.errors.age && formik.touched.age && "error"
              }
              onChange={formik.handleChange}
              name="age"
              type="number"
              placeholder="ör:34"
            />
            {formik.errors.age && formik.touched.age && (
              <p>{formik.errors.age}</p>
            )}
          </div>

          <div>
            <label>Şifre</label>
            <input
              value={formik.values.password}
              className={
                formik.errors.password &&
                formik.touched.password &&
                "error"
              }
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              name="password"
              type="password"
              placeholder="••••••"
            />
            {formik.errors.password && formik.touched.password && (
              <p>{formik.errors.password}</p>
            )}
          </div>

          <div>
            <label>Şifre Onay</label>
            <input
              value={formik.values.confirmPassword}
              onBlur={formik.handleBlur}
              className={
                formik.errors.confirmPassword &&
                formik.touched.confirmPassword &&
                "error"
              }
              onChange={formik.handleChange}
              name="confirmPassword"
              type="password"
              placeholder="••••••"
            />
            {formik.errors.confirmPassword &&
              formik.touched.confirmPassword && (
                <p>{formik.errors.confirmPassword}</p>
              )}
          </div>

          <div className="check-wrapper">
            <div className="check">
              <input
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                name="terms"
                type="checkbox"
                id="terms"
              />

              <label htmlFor="terms">
                Koşulları okudum ve onaylıyorum
              </label>
            </div>
            {formik.errors.terms && formik.touched.terms && (
              <p>{formik.errors.terms}</p>
            )}
          </div>

          <button disabled={formik.isSubmitting} type="submit">
            Kaydol
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
