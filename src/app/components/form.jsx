"use client"
import React, { useState } from 'react';
import Image from 'next/image';

const Form = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    phone: '',
    email: '',
    address: '',
    laptop: '',
    receipt: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, receipt: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const endpoint = 'https://testbackend-ya01.onrender.com/api/v1/users/register';
    const { fullname, phone, email, address, laptop } = formData;

    const formData = new FormData();
    formData.append('fullname', fullname);
    formData.append('phone', phone);
    formData.append('email', email);
    formData.append('address', address);
    formData.append('laptop', laptop);
    formData.append('receipt', formData.receipt);

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Registration successful');
      } else {
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='w-full flex flex-col p-4'>
      <h1 className='font-bold text-[32px]'>Register with us</h1>
      <p className="font-light">Swap your old laptop for a new one</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 flex flex-col gap-2 group w-full">
          <label htmlFor="fullname">Full Name</label>
          <input
            type="text"
            name="fullname"
            id="fullname"
            className="focus:outline-none w-[70%] p-2 bg-white rounded-md"
            placeholder="John Doe"
            value={formData.fullname}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4 flex flex-col gap-2 group w-full">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            className="focus:outline-none w-[70%] p-2 bg-white rounded-md"
            placeholder="+23400000000"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4 flex flex-col gap-2 group w-full">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="focus:outline-none w-[70%] p-2 bg-white rounded-md"
            placeholder="mail@example.com"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4 flex flex-col gap-2 group w-full">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            id="address"
            className="focus:outline-none w-[70%] p-2 bg-white rounded-md"
            placeholder="38 crescent avenue"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4 flex flex-col gap-2 group w-full">
          <label htmlFor="laptop">Laptop Specification</label>
          <select
            name="laptop"
            id="laptop"
            className="bg-white p-2 w-[70%] rounded-md"
            value={formData.laptop}
            onChange={handleChange}
          >
            <option value="">Select laptop type</option>
            <option value="hp">HP</option>
            <option value="dell">Dell</option>
            <option value="macbook">MacBook</option>
          </select>
        </div>
        <div className="mb-4 flex flex-col gap-2 group w-full">
          <label htmlFor="receipt">Upload receipt of old laptop</label>
          <input
            type="file"
            name="receipt"
            id="receipt"
            hidden
            accept="image/svg+xml"
            onChange={handleFileChange}
          />
           <label htmlFor="receipt" className='bg-white p-2 w-fit px-6 rounded-md' >

<Image src='/upload.svg' alt='icon' width={30} height={30} />
</label>

        </div>
        <button type="submit" className="bg-[#335CA6] text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
