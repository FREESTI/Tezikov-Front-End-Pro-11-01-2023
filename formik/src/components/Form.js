import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone) => {
    const re = /^\d{12}$/;
    return re.test(phone);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "") {
      setErrors({ name: "Будь ласка, введіть ваше ім'я" });
      return;
    }
    if (email.trim() === "") {
      setErrors({ email: "Будь ласка, введіть вашу електронну пошту" });
      return;
    }
    if (phone.trim() === "") {
      setErrors({ phone: "Будь ласка, введіть ваш номер телефону" });
      return;
    }

    if (!validateEmail(email)) {
      setErrors({ email: "Будь ласка, введіть коректну електронну пошту" });
      return;
    }

    if (!validatePhone(phone)) {
      setErrors({
        phone: "Будь ласка, введіть коректний номер телефону (12 цифр)",
      });
      return;
    }

    setName("");
    setEmail("");
    setPhone("");
    setErrors({});
    alert("Форма успішно відправлена!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Ім'я:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <span>{errors.name}</span>}
      </div>
      <div>
        <label>Електронна пошта:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <span>{errors.email}</span>}
      </div>
      <div>
        <label>Телефон:</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        {errors.phone && <span>{errors.phone}</span>}
      </div>
      <button type="submit">Відправити</button>
    </form>
  );
};

export default Form;
