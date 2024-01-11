'use client';

import { useState } from 'react';
import SectionTitle from './SectionTitle';

const Contact = () => {
  
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/send', {
        body: JSON.stringify(form),
        
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });

      const data = await res.json();
      console.log(data);
      setForm({
        name: '',
        email: '',
        message: '',
      });

    } catch (e) {
      console.log(e.error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='w-full flex flex-col justify-between items-center mb-8 px-6 md:px-8 lg:px-4'
    >
    <SectionTitle title={'Contact Me'} iconName={'Contact'} />

      <div className='mt-2 w-full flex flex-col md:flex-row justify-between'>
        <div className='w-full md:w-[48%] '>
          <label
            htmlFor='name'
            className='block font-semibold  text-lg  md:text-xl text-[#E55604]'
          >
            Name <sup className='text-red-500'>*</sup>
          </label>
          <div className='mt-1'>
            <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-[#B4B4B3] focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md'>
              <input
                required={true}
                type='text'
                name='name'
                id='name'
                value={form.name}
                autoComplete='name'
                className='block h-[50px] flex-1 border-0 bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                placeholder='janesmith'
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className='mt-8 md:mt-0 w-full md:w-[48%] '>
          <label
            htmlFor='email'
            className='block font-semibold  text-lg  md:text-xl text-[#E55604]'
          >
            Email <sup className='text-red-500'>*</sup>
          </label>
          <div className='mt-1'>
            <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-[#B4B4B3] focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md'>
              <input
                required={true}
                value={form.email}
                type='email'
                name='email'
                id='email'
                autoComplete='email'
                className='block h-[50px] flex-1 border-0 bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                placeholder='janesmith@gmail.com'
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>

      <div className='mt-8 w-full'>
        <label
          htmlFor='message'
          className='block font-semibold  text-lg  md:text-xl text-[#E55604]'
        >
          Your Message <sup className='text-red-500'>*</sup>
        </label>
        <div className='mt-1'>
          <textarea
            required={true}
            value={form.message}
            id='message'
            name='message'
            rows={3}
            className='block w-full rounded-md border-0 py-1.5 pl-1 text-gray-900 shadow-sm ring-1 ring-inset ring-[#B4B4B3] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            defaultValue={''}
            placeholder='Your Message Here.'
            onChange={handleChange}
          />
        </div>
      </div>

      <div className='w-full flex flex-row justify-end mt-8'>
        <button
          type='submit'
          className='hover:shadow-lg font-semibold hover:border-[#26577C] hover:bg-[#f3f3f3]  p-3  text-[#26577C] h-[50px] w-[120px] border-2 border-solid border-[#B4B4B3] rounded-lg'
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default Contact;
